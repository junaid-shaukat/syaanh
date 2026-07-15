import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogging, login, setLanguage } from "../app/preferenceSlice";
import { useTranslation } from "react-i18next";
import { useDirection } from "../i18n/DirectionProvider";
import i18n from "../i18n/i18n";

function Navbar({ currentPage = "home" }) {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authTab, setAuthTab] = useState("login");
    const { t } = useTranslation();
    const { toggleDirection } = useDirection();
    const dispatch = useDispatch();

    const closeModal = () => {
        setShowAuthModal(false);
    };

    const openModal = (tab = "login") => {
        setAuthTab(tab);
        setShowAuthModal(true);
    };

    // Escape key to close modal
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeModal();
        };
        if (showAuthModal) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [showAuthModal]);

    const linkClass = (page) =>
        page === currentPage
            ? "text-primary relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
            : "text-on-surface-variant hover:text-primary transition-colors";

    const preference = useSelector((state) => state.preference) || {};
    const { isLoggedIn } = preference;

    const handleSignInClick = () => {
        dispatch(login({ token: "dummy-token", credentials: { phone: "+97400000000" } }));
        dispatch(setLogging(true));
        setShowAuthModal(false);
    };

    const handlePasswordToggle = (e) => {
        const input = e.currentTarget.previousElementSibling;
        if (input && input.type === "password") {
            input.type = "text";
            e.currentTarget.textContent = "visibility";
        } else if (input) {
            input.type = "password";
            e.currentTarget.textContent = "visibility_off";
        }
    };

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
        dispatch(setLanguage(lang));
        toggleDirection(lang);
    };

    const currentLang = i18n.language || "en";

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant h-20">
                <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
                    <div className="flex items-center gap-12">
                        <Link className="font-headline-lg text-headline-lg font-extrabold text-primary" to="/">Syaanh</Link>
                        <div className="hidden md:flex items-center gap-8 font-label-md text-label-md">
                            <Link className={linkClass("home")} to="/">{t("nav.home", "Home")}</Link>
                            <Link className={linkClass("services")} to="/services">{t("nav.services", "Services")}</Link>
                            <Link className={linkClass("shopping")} to="/shopping">{t("nav.shopping", "Shopping")}</Link>
                            <Link className={linkClass("offers")} to="/offers">{t("nav.offers", "Offers")}</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors py-2">
                                <span>{currentLang === "ar" ? "AR" : "EN"} / QAR</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            {/* Dropdown Menu */}
                            <div className="absolute top-full right-6 mt-2 w-64 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-4">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">{t("nav.language", "Language")}</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                className={`px-3 py-2 rounded-md text-label-md text-center transition-colors ${currentLang === "en" ? "bg-primary text-white" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}
                                                onClick={() => switchLanguage("en")}
                                            >
                                                {t("lang.en", "English")}
                                            </button>
                                            <button
                                                className={`px-3 py-2 rounded-md text-label-md text-center transition-colors ${currentLang === "ar" ? "bg-primary text-white" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}
                                                onClick={() => switchLanguage("ar")}
                                            >
                                                {t("lang.ar", "العربية")}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border-t border-outline-variant pt-4">
                                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">{t("nav.currency", "Currency")}</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button className="px-3 py-2 rounded-md bg-primary-container/10 text-primary text-label-md text-center border border-primary">QAR</button>
                                            <button className="px-3 py-2 rounded-md bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md text-center transition-colors">SAR</button>
                                            <button className="px-3 py-2 rounded-md bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md text-center transition-colors">AED</button>
                                            <button className="px-3 py-2 rounded-md bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md text-center transition-colors">USD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="hover:text-primary transition-colors flex items-center relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border border-white"></span>
                        </button>
                        <div className="flex items-center gap-5 text-on-surface-variant">
                            <button className="hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined">location_on</span></button>
                            <button className="hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined">shopping_cart</span></button>
                        </div>
                        {(isLoggedIn) ? (
                            <Link to="/profile" className="bg-primary text-white px-8 py-2.5 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined">account_circle</span>
                                Ahmed Khalid
                            </Link>
                        ) : (
                            <>
                                <button className="bg-primary text-white px-8 py-2.5 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all" onClick={() => openModal("login")}>{t("nav.login", "Login")}</button>

                            </>
                        )}
                    </div>
                </nav>
            </header>

            {/* Auth Modal */}
            {showAuthModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/30" onClick={(e) => e.target === e.currentTarget && closeModal()}>
                    <div className="bg-surface-container-lowest w-full max-w-[480px] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[921px] animate-in fade-in zoom-in duration-300">
                        {/* Modal Header / Tabs */}
                        <div className="flex border-b border-outline-variant pt-4 px-8">
                            <button
                                className={`flex-1 py-4 font-label-md text-label-md transition-all ${authTab === "login" ? "text-primary font-semibold border-b-2 border-primary" : "text-on-surface-variant hover:text-primary"}`}
                                onClick={() => setAuthTab("login")}
                            >
                                {t("auth.login", "Login")}
                            </button>
                            <button
                                className={`flex-1 py-4 font-label-md text-label-md transition-all ${authTab === "register" ? "text-primary font-semibold border-b-2 border-primary" : "text-on-surface-variant hover:text-primary"}`}
                                onClick={() => setAuthTab("register")}
                            >
                                {t("auth.register", "Register")}
                            </button>
                        </div>
                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            {/* Brand & Message */}
                            <div className="text-center mb-8">
                                <h2 className="font-headline-md text-headline-md text-primary mb-2">{t("auth.welcome", "Welcome to Syaanh")}</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    {authTab === "login" ? t("auth.signInPrompt", "Sign in to manage your home services") : t("auth.registerPrompt", "Join the leading home maintenance platform")}
                                </p>
                            </div>
                            {/* Login Form */}
                            {authTab === "login" && (
                                <div className="space-y-5" id="form-login">
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface ml-1">{t("auth.phone", "Phone Number")}</label>
                                        <div className="flex items-center border border-outline-variant rounded-lg bg-surface px-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                            <span className="font-body-md text-body-md text-on-surface-variant border-e border-outline-variant pe-3 py-3">+974</span>
                                            <input className="flex-1 bg-transparent border-none focus:ring-0 font-body-md text-body-md ps-3 py-3" placeholder={t("auth.phonePlaceholder", "0000 0000")} type="tel" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface ml-1">{t("auth.password", "Password")}</label>
                                        <div className="flex items-center border border-outline-variant rounded-lg bg-surface px-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                            <input className="flex-1 bg-transparent border-none focus:ring-0 font-body-md text-body-md py-3" placeholder="••••••••" type="password" />
                                            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" onClick={handlePasswordToggle}>visibility_off</span>
                                        </div>
                                        <div className="text-right">
                                            <a className="font-label-sm text-label-sm text-primary hover:underline" href="#">{t("auth.forgotPassword", "Forgot Password?")}</a>
                                        </div>
                                    </div>
                                    <button className="w-full h-14 bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-container font-headline-md text-[18px] rounded-lg shadow-sm transition-all transform active:scale-[0.98] mt-4" onClick={handleSignInClick}>
                                        {t("auth.signIn", "Sign In")}
                                    </button>
                                </div>
                            )}
                            {/* Register Form */}
                            {authTab === "register" && (
                                <div className="space-y-5" id="form-register">
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface ml-1">{t("auth.fullName", "Full Name")}</label>
                                        <input className="w-full h-12 border border-outline-variant rounded-lg bg-surface px-4 focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" placeholder={t("auth.fullNamePlaceholder", "John Doe")} type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface ml-1">{t("auth.phone", "Phone Number")}</label>
                                        <div className="flex items-center border border-outline-variant rounded-lg bg-surface px-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                            <span className="font-body-md text-body-md text-on-surface-variant border-e border-outline-variant pe-3 py-3">+974</span>
                                            <input className="flex-1 bg-transparent border-none focus:ring-0 font-body-md text-body-md ps-3 py-3" placeholder={t("auth.phonePlaceholder", "0000 0000")} type="tel" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface ml-1">{t("auth.password", "Password")}</label>
                                        <div className="flex items-center border border-outline-variant rounded-lg bg-surface px-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                            <input className="flex-1 bg-transparent border-none focus:ring-0 font-body-md text-body-md py-3" placeholder={t("auth.createPassword", "Create a password")} type="password" />
                                            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer" onClick={handlePasswordToggle}>visibility_off</span>
                                        </div>
                                    </div>
                                    <button className="w-full h-14 bg-primary text-white hover:bg-primary-container font-headline-md text-[18px] rounded-lg shadow-sm transition-all transform active:scale-[0.98] mt-4">
                                        {t("auth.createAccount", "Create Account")}
                                    </button>
                                </div>
                            )}
                            {/* Divider */}
                            <div className="relative flex items-center my-8">
                                <div className="flex-grow border-t border-outline-variant"></div>
                                <span className="flex-shrink mx-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t("auth.orContinueWith", "Or continue with")}</span>
                                <div className="flex-grow border-t border-outline-variant"></div>
                            </div>
                            {/* Social Logins */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 h-12 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors font-label-md text-label-md text-on-surface">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
                                    </svg>
                                    Google
                                </button>
                                <button className="flex items-center justify-center gap-3 h-12 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors font-label-md text-label-md text-on-surface">
                                    <svg className="w-5 h-5 fill-on-surface" viewBox="0 0 24 24">
                                        <path d="M17.05 20.28c-.98.95-2.05 1.72-3.32 1.72-1.2 0-1.63-.73-3.12-.73-1.47 0-1.95.7-3.11.73-1.25.04-2.42-.87-3.41-1.85-2-1.98-3.07-5.02-3.07-7.46 0-3.83 2.4-5.85 4.67-5.85 1.18 0 2.1.75 2.83.75.7 0 1.83-.88 3.2-.88 1.45 0 2.53.53 3.25 1.43-3.12 1.83-2.62 6.03.53 7.35-.67 1.73-1.5 3.4-2.25 4.79zm-4.14-16.14c.6-1.12.33-2.35-.12-3.14 1.12.1 2.38.83 3 1.93.63 1.13.37 2.4.15 2.68-1.23.03-2.4-.73-3.03-1.47z"></path>
                                    </svg>
                                    Apple
                                </button>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="p-6 bg-surface-container-low text-center border-t border-outline-variant">
                            <p className="font-label-sm text-label-sm text-on-surface-variant">
                                {t("auth.agreeTerms", "By continuing, you agree to our")}
                                <a className="text-primary font-semibold hover:underline ml-1" href="#">{t("auth.termsOfService", "Terms of Service")}</a> {t("auth.and", "and")}
                                <a className="text-primary font-semibold hover:underline ml-1" href="#">{t("auth.privacyPolicy", "Privacy Policy")}</a>.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;