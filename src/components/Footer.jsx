import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-surface-container-highest border-t border-outline-variant">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-12 max-w-container-max mx-auto">
                <div className="space-y-6">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">Syaanh</span>
                    <p className="text-on-surface-variant font-label-md">{t("footer.description", "Providing trusted home maintenance and essential shopping services since 2020. Your home's best friend.")}</p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-xl">public</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-xl">share</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h6 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-wider">{t("footer.company", "Company")}</h6>
                    <ul className="space-y-4">
                        <li><a className="text-on-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">{t("footer.aboutUs", "About Us")}</a></li>
                        <li><a className="text-on-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">{t("footer.careers", "Careers")}</a></li>
                        <li><a className="text-on-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">{t("footer.partnerWithUs", "Partner with Us")}</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-wider">{t("footer.support", "Support")}</h6>
                    <ul className="space-y-4">
                        <li><a className="text-on-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">{t("footer.contactSupport", "Contact Support")}</a></li>
                        <li><a className="text-on-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">{t("footer.termsOfService", "Terms of Service")}</a></li>
                        <li><a className="text-on-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">{t("footer.privacyPolicy", "Privacy Policy")}</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-wider">{t("footer.newsletter", "Newsletter")}</h6>
                    <p className="text-on-surface-variant text-label-sm mb-4">{t("footer.newsletterDesc", "Get the latest offers and maintenance tips.")}</p>
                    <div className="flex flex-col gap-2">
                        <input className="bg-surface-container-low border-outline-variant rounded-lg px-4 py-2 text-label-md" placeholder={t("footer.emailPlaceholder", "Your email address")} type="email" />
                        <button className="bg-primary text-white py-2 rounded-lg font-label-md hover:opacity-90 transition-all">{t("footer.subscribe", "Subscribe")}</button>
                    </div>
                </div>
            </div>
            <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-on-surface-variant font-label-md">{t("footer.copyright", "© 2024 Syaanh Home Services. All rights reserved.")}</span>
                <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined text-on-surface-variant">payments</span>
                    <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;