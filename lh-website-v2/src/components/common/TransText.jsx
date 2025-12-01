import React from "react";
import { Trans } from "react-i18next";

const LinkText = ({ children, href }) => {
    return (
      <a
        href={href}
        style={{ color: 'inherit', textDecoration: 'underline' }}
        target={href?.startsWith('http') ? "_blank" : undefined}
        rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  
  const TransText = ({ i18nKey, t }) => {  
    return (
      <Trans
        i18nKey={i18nKey}
        t={t}
        components={{
          strong: <strong />,
          linkTag: <LinkText />,
          break: <br />,
          kursiv: <i />
        }}
      />
    );
  };
  
  export default TransText;
  