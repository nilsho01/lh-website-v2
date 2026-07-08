import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function walk(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full, extensions));
    else if (extensions.includes(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function flatten(obj, prefix = '') {
  const res = {};
  for (const k of Object.keys(obj)) {
    const val = obj[k];
    const key = prefix ? `${prefix}.${k}` : k;
    if (val && typeof val === 'object') Object.assign(res, flatten(val, key));
    else res[key] = val;
  }
  return res;
}

function findUsedKeys(srcDir) {
  const files = walk(srcDir);
  const used = new Set();
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const nsMatch = content.match(/useTranslation\(\s*['"]([^'"]+)['"]\s*\)/);
    // Files without an explicit namespace fall back to i18next's defaultNS ('general')
    const namespace = nsMatch ? nsMatch[1] : 'general';

    // t('key') occurrences
    const tRegex = /\bt\(\s*['"]([^'"]+)['"]\s*\)/g;
    let m;
    while ((m = tRegex.exec(content)) !== null) {
      const key = m[1];
      used.add(namespace ? `${namespace}.${key}` : key);
    }

    // TransText i18nKey="..." — resolves via the file's t(), so same namespace applies
    const transRegex = /i18nKey\s*=\s*['"]([^'"]+)['"]/g;
    while ((m = transRegex.exec(content)) !== null) {
      used.add(`${namespace}.${m[1]}`);
    }
  }
  return Array.from(used).sort();
}

function loadLocales(localesDir) {
  const langs = {};
  for (const lang of fs.readdirSync(localesDir)) {
    const langDir = path.join(localesDir, lang);
    if (!fs.statSync(langDir).isDirectory()) continue;
    langs[lang] = {};
    for (const file of fs.readdirSync(langDir)) {
      if (!file.endsWith('.json')) continue;
      const filePath = path.join(langDir, file);
      const namespace = path.basename(file, '.json');
      try {
        const obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        Object.assign(langs[lang], flatten(obj, namespace));
      } catch (e) {
        console.error('Error parsing', filePath, e.message);
      }
    }
  }
  return langs;
}

function main() {
  const root = path.resolve(__dirname, '..');
  const srcDir = path.join(root, 'src');
  const localesDir = path.join(root, 'public', 'locales');

  const used = findUsedKeys(srcDir);
  const locales = loadLocales(localesDir);

  const report = {};
  for (const lang of Object.keys(locales)) report[lang] = [];

  for (const key of used) {
    for (const lang of Object.keys(locales)) {
      if (!Object.prototype.hasOwnProperty.call(locales[lang], key)) report[lang].push(key);
    }
  }

  console.log('Used keys found:', used.length);
  for (const lang of Object.keys(report)) {
    console.log(`\nMissing keys for ${lang}: ${report[lang].length}`);
    for (const k of report[lang]) console.log('  ', k);
  }
}

main();
