import catalan from "@/i18n/ca.json";
import english from "@/i18n/en.json";
import spanish from "@/i18n/es.json";

const LANG = {
  CATALAN: "ca",
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.CATALAN) return { ...english, ...catalan };
  if (currentLocale === LANG.SPANISH) return { ...english, ...spanish };
  return english;
};
