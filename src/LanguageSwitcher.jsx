import React from "react";
import i18n from "i18next";
import "./lng-switch.css";

const languages = [
  { code: "en", label: "🇬🇧 English" },
  { code: "fr", label: "🇫🇷 Français" },
  { code: "ko", label: "🇰🇷 한국어" },
];

export function LanguageSwitcher() {
  const currentLang = i18n.language || "en";

  return (
    <div className='lang-switcher'>
      🌐{" "}
      <select
        className='lang-select'
        value={currentLang}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
