import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shopping from "./pages/Shopping";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "./app/preferenceSlice";
import { useDirection } from "./i18n/DirectionProvider";
import useApi from "./api/useApi";
import i18n from "./i18n/i18n";

function App() {
  const fetched = useRef(false);
  const { get } = useApi();
  const { toggleDirection } = useDirection();
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    get("/api/v2/translations?platform=web")
      .then((res) => {
        // Expecting shape: { en: { ... }, ar: { ... } }
        const translations = res.data || res;

        Object.entries(translations).forEach(([lang, resources]) => {
          i18n.addResourceBundle(lang, "translation", resources, true, true);
        });

        // Sync the loaded language with Redux and direction
        const currentLang = i18n.language === "ar" ? "ar" : "en";
        dispatch(setLanguage(currentLang));
        toggleDirection(currentLang);

        // Force re-render by changing language to itself (loads the bundle)
        i18n.changeLanguage(currentLang);
      })
      .catch((err) => {
        console.error("Failed to load translations:", err);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;