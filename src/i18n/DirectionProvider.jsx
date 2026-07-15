import { createContext, useContext, useEffect, useState } from "react";

const DirectionContext = createContext();

export function DirectionProvider({ children }) {
  const [direction, setDirection] = useState(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    return savedLang === "ar" ? "rtl" : "ltr";
  });

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  const toggleDirection = (lang) => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    setDirection(dir);
    document.documentElement.dir = dir;
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  return useContext(DirectionContext);
}