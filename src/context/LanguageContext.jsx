import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { copy } from '../copy.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem('salvanoise:lang');
    return stored === 'es' ? 'es' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('salvanoise:lang', lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: copy[lang],
      pick: (value) => (value && typeof value === 'object' ? value[lang] : value),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
