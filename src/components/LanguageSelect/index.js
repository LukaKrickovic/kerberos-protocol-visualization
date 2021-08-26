import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelect = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Select value={language} onChange={handleLanguageChange}>
      <MenuItem value="en">en</MenuItem>
      <MenuItem value="sr">sr</MenuItem>
    </Select>
  );
};

export default LanguageSelect;
