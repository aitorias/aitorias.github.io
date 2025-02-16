export const languages: Record<string, { code: string; name: string }> = {
  ca: {
    code: "ca",
    name: "Català",
  },
  en: {
    code: "en",
    name: "English",
  },
  es: {
    code: "es",
    name: "Español",
  },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  ca: {
    "nav.home": "Inici",
  },
  en: {
    "nav.home": "Home",
  },
  es: {
    "nav.home": "Inicio",
  },
} as const;

export const routes = {
  ca: {
    projects: "projectes",
  },
  en: {
    projects: "projects",
  },
  es: {
    projects: "proyectos",
  },
};
