// src/configs/team.config.js

// Rohdaten: alle Texte in drei Sprachen
const rawTeamConfig = [
  {
    id: "management",
    accent: "primary",
    highlight: true,
    title: {
      de: "Management",
      en: "Management",
      cn: "管理团队",
    },
    description: {
      de: "Strategische Ausrichtung, Kundenbeziehungen und der ruhige Kopf hinter komplexen Projekten.",
      en: "Strategic direction, client relationships and the calm hand behind complex projects.",
      cn: "负责战略方向、客户关系，以及在复杂项目中的冷静决策。",
    },
    people: [
      {
        name: {
          de: "Max Mustermann",
          en: "Max Mustermann",
          cn: "马克斯·穆斯特曼",
        },
        role: {
          de: "Geschäftsführer",
          en: "Managing Director",
          cn: "总经理",
        },
      },
    ],
  },
  {
    id: "qualitative",
    accent: "secondary",
    title: {
      de: "Qualitative Projekte",
      en: "Qualitative projects",
      cn: "定性项目",
    },
    description: {
      de: "Kleine Stichproben, große Insights – hier entstehen die Geschichten hinter den Daten.",
      en: "Small samples, big insights – this is where the stories behind the data emerge.",
      cn: "小样本，大洞察——这里挖掘数据背后的真实故事。",
    },
    people: [
      {
        name: { de: "Anita Schreiner", en: "Anita Schreiner", cn: "安妮塔·施赖纳" },
        role: {
          de: "Senior Researcherin",
          en: "Senior Researcher",
          cn: "高级研究员",
        },
      },
      {
        name: { de: "Mirko Klotze", en: "Mirko Klotze", cn: "米尔科·克洛策" },
        role: {
          de: "Research Consultant",
          en: "Research Consultant",
          cn: "研究顾问",
        },
      },
      {
        name: { de: "Pascal Dietrich", en: "Pascal Dietrich", cn: "帕斯卡尔·迪特里希" },
        role: {
          de: "Projektmanager",
          en: "Project Manager",
          cn: "项目经理",
        },
      },
    ],
  },
  {
    id: "clinic",
    accent: "info",
    title: {
      de: "Klinikprojekte",
      en: "Clinic projects",
      cn: "临床项目",
    },
    description: {
      de: "Zwischen Ärzt:innen, Pflege und Patient:innen – Klinikprojekte brauchen Präzision und Empathie.",
      en: "From healthcare professionals to patients – clinic projects require precision and empathy.",
      cn: "面向医护人员与患者的项目，需要高度精准与同理心。",
    },
    people: [
      {
        name: { de: "Omar Peter", en: "Omar Peter", cn: "奥马尔·彼得" },
        role: {
          de: "Projektleitung",
          en: "Project Lead",
          cn: "项目负责人",
        },
      },
      {
        name: { de: "Christian Topsy", en: "Christian Topsy", cn: "克里斯蒂安·托普西" },
        role: {
          de: "Senior Consultant",
          en: "Senior Consultant",
          cn: "高级顾问",
        },
      },
      {
        name: { de: "Anna Krammer", en: "Anna Krammer", cn: "安娜·克拉默" },
        role: {
          de: "Research Managerin",
          en: "Research Manager",
          cn: "研究经理",
        },
      },
      {
        name: { de: "Norbert Tanne", en: "Norbert Tanne", cn: "诺伯特·坦内" },
        role: {
          de: "Fieldwork-Spezialist",
          en: "Fieldwork Specialist",
          cn: "现场调研专家",
        },
      },
    ],
  },
  {
    id: "online",
    accent: "success",
    title: {
      de: "Online-Projekte",
      en: "Online projects",
      cn: "在线项目",
    },
    description: {
      de: "Schnell, skalierbar, digital – hier wird Online-Datenverkehr in klare Empfehlungen übersetzt.",
      en: "Fast, scalable and digital-first. This team turns online data into clear recommendations.",
      cn: "快速、可扩展、数字优先——将在线数据转化为清晰可行的建议。",
    },
    people: [
      {
        name: { de: "Berta Bär", en: "Berta Bär", cn: "贝尔塔·贝尔" },
        role: {
          de: "Leitung Online Research",
          en: "Online Research Lead",
          cn: "在线研究主管",
        },
      },
      {
        name: { de: "Ulrich Walter", en: "Ulrich Walter", cn: "乌尔里希·瓦尔特" },
        role: {
          de: "Datenanalyst",
          en: "Data Analyst",
          cn: "数据分析师",
        },
      },
      {
        name: { de: "Walter Ulrich", en: "Walter Ulrich", cn: "瓦尔特·乌尔里希" },
        role: {
          de: "Projektmanager",
          en: "Project Manager",
          cn: "项目经理",
        },
      },
    ],
  },
  {
    id: "it",
    accent: "warning",
    title: {
      de: "IT · Reporting-Systeme · Technologische Lösungen",
      en: "IT · Reporting systems · Technological solutions",
      cn: "IT · 报告系统 · 技术解决方案",
    },
    description: {
      de: "Von Dashboards bis Datenpipelines – dieses Team baut die Werkzeuge hinter Ihren Insights.",
      en: "From dashboards to data pipelines – this team builds the tools behind your insights.",
      cn: "从仪表盘到数据管道——这里打造支撑洞察的一整套工具。",
    },
    people: [
      {
        name: { de: "Karin Minner", en: "Karin Minner", cn: "卡林·米纳" },
        role: {
          de: "Leitung IT & Reporting",
          en: "IT & Reporting Lead",
          cn: "IT 与报告负责人",
        },
      },
      {
        name: { de: "Thorsten Thoma", en: "Thorsten Thoma", cn: "托斯滕·托马" },
        role: {
          de: "Solutions Architect",
          en: "Solutions Architect",
          cn: "解决方案架构师",
        },
      },
      {
        name: { de: "Lisa Friedrich", en: "Lisa Friedrich", cn: "莉萨·弗里德里希" },
        role: {
          de: "Data & Reporting Specialist",
          en: "Data & Reporting Specialist",
          cn: "数据与报告专员",
        },
      },
    ],
  },
];

// Helfer: Sprache normalisieren
const resolveLangKey = (lang) => {
  if (!lang) return "en";
  const lower = lang.toLowerCase();
  if (lower.startsWith("de")) return "de";
  if (lower.startsWith("cn") || lower.startsWith("zh")) return "cn";
  return "en";
};

// Public API: Konfig je Sprache "ausgerollt"
const getTeamSections = (lang = "en") => {
  const key = resolveLangKey(lang);

  return rawTeamConfig.map((section) => ({
    ...section,
    title: section.title[key],
    description: section.description?.[key] || "",
    people: section.people.map((p) => ({
      name: p.name[key],
      role: p.role?.[key] || "",
    })),
  }));
};

export default getTeamSections;
