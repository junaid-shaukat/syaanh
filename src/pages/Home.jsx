import { useEffect } from "react";
import { Navbar, Footer } from "../components";

function useScrollReveal() {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
}

function Home() {
    useScrollReveal();

    return (
        <>
            <Navbar currentPage="home" />
            <main className="mt-20">
                {/* Hero Section */}
                <section className="relative py-24 hero-gradient overflow-hidden">
                    <div className="max-w-container-max mx-auto px-margin-desktop text-center relative z-10">
                        <h1 className="font-headline-xl text-headline-xl text-primary mb-8">
                            Everything your home needs,<br /><span className="text-secondary">all in one place.</span>
                        </h1>
                        <div className="max-w-2xl mx-auto relative group">
                            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-outline">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="w-full pl-16 pr-32 py-5 rounded-2xl bg-surface-container-lowest border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm group-hover:shadow-md"
                                placeholder="Search for maintenance, groceries, or essentials..."
                                type="text"
                            />
                            <button className="absolute right-3 top-3 bottom-3 bg-secondary-container text-on-secondary-container px-8 rounded-xl font-label-md text-label-md hover:brightness-95 transition-all">
                                Search
                            </button>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-4 opacity-70">
                            <span className="text-label-md">Trending:</span>
                            <a className="text-label-md hover:text-primary underline decoration-primary/30" href="#">AC Repair</a>
                            <a className="text-label-md hover:text-primary underline decoration-primary/30" href="#">House Cleaning</a>
                            <a className="text-label-md hover:text-primary underline decoration-primary/30" href="#">Fresh Fruits</a>
                        </div>
                    </div>
                </section>

                {/* Flash Offers */}
                <section className="py-16 bg-surface">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-on-surface">Flash Offers</h2>
                                <p className="text-on-surface-variant font-body-md">Limited time deals on home essentials</p>
                            </div>
                            <a className="text-primary font-label-md hover:underline flex items-center gap-2" href="syaanh/offers">
                                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                            <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                                <button className="shrink-0 px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label-md transition-all hover:brightness-95">All</button>
                                <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Services</button>
                                <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Shop</button>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-4 -mx-margin-desktop px-margin-desktop">
                            {/* Offer Card 1 */}
                            <div className="min-w-[320px] bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-md transition-shadow">
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <div className="absolute top-3 left-3 bg-error text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">40% OFF</div>
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvROFxCj-f9dGuMlN79wIsBKwNnd9VE08cmrPy91m2FsQ1nIyRPZvye_skqTHjCQeDTzt8MOTDHxjcrD0B8saDnySedfxW3QGT-xRR4zCoaJSqk63fMkDIWjwMZzNd2V-ivoOlPwJ9qIrA1xS1EgNoK0w6H-_raqKyB_X6UoxBQLjQO_uNzzkIvEJx4w7G2skKe8Qe3yof2saZQW-JjqLk55RitzfPI_uUc1tHrSwpo0gMUfA6ieNIWRfq_RnPD9Pn7UjC76FElbEH" alt="AC Deep Clean" />
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-1">AC Deep Clean</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Complete sanitation and filter cleaning</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-error font-bold text-headline-md">AED 149</span>
                                        <span className="text-on-surface-variant text-label-sm line-through">AED 250</span>
                                    </div>
                                    <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-label-md hover:brightness-95 transition-all">Book Now</button>
                                </div>
                            </div>
                            {/* Offer Card 2 */}
                            <div className="min-w-[320px] bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-md transition-shadow">
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <div className="absolute top-3 left-3 bg-tertiary-container text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">BEST SELLER</div>
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy3LgteVzLF3c8ht_cbpShnoP6dp4Ihiph9eHyaHGDNugi4OBx9AMLnkMslqo2aI7wu_b0r5dAAg0Z_ux_jf2-8NKi-XoA9kpsLG5kazji5eh0xbn7Z7mbYv-wdhH1C7-r3mwGsxb8qTQT4cfLiCyx38Mv54Dr67R-t6rx8HY8mKLasC1k6vWsqaYJaG33roMYHrqFgrZiTqvNHr-FyglN987hqLLnJCd6V1Of29CUxBMTMBN168nZU1gkPuS3dxTeCnMUVjtT9mjW" alt="Organic Veggie Box" />
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-1">Organic Veggie Box</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Fresh from farm to your doorstep</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-primary font-bold text-headline-md">AED 85</span>
                                        <span className="text-on-surface-variant text-label-sm">per box</span>
                                    </div>
                                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-label-md hover:opacity-90 transition-all">Add to Cart</button>
                                </div>
                            </div>
                            {/* Offer Card 3 */}
                            <div className="min-w-[320px] bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-md transition-shadow">
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVMlZKm9fKhwqfcruGNCCQ6bMSX18PLLvg9AhGKaVo6lDELaAk3CXPgRFmkNxPje0mFgMvX5ERvrXWT_rKO3muOStfcYIzQ8G8ouWWCMmrSU9sp5VWsjA6Vxdoi-xH8CDcm7AFNfADUIw8XjJ-tK1dVPqjzZv5Wl5GNUoqktYJukYhKRambVFpzL29NGEN5eVBYspMd7FP6YGH_PHZ5zjDR12pQoCbMX9y9KPCNqGnFGdioCxzcdbwQ7qmnDWY70F3QdvnQs0MCnx" alt="Premium BBQ Kit" />
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-1">Premium BBQ Kit</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Includes Wagyu cuts and sides</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-primary font-bold text-headline-md">AED 299</span>
                                        <span className="text-on-surface-variant text-label-sm">Ready to grill</span>
                                    </div>
                                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-label-md hover:opacity-90 transition-all">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Maintenance Services */}
                <section className="py-20 bg-surface-container-low">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="flex justify-between items-end mb-12">
                            <div className="text-left">
                                <h2 className="font-headline-lg text-headline-lg text-primary">Reliable Home Maintenance</h2>
                                <p className="text-on-surface-variant max-w-xl mt-4">Professional services delivered by vetted experts. From leaks to lightbulbs, we've got you covered.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2 mr-4">
                                    <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                                <a className="text-primary font-label-md hover:underline flex items-center gap-2" href="syaanh/services">
                                    View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-8 -mx-margin-desktop px-margin-desktop">
                            <button className="shrink-0 px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label-md transition-all hover:brightness-95">All</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Cooling</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Plumbing</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Electrical</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">General Maintenance</button>
                        </div>
                        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-margin-desktop px-margin-desktop">
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">ac_unit</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Air Conditioner</span>
                            </a>
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">plumbing</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Plumbing</span>
                            </a>
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">format_paint</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Painting</span>
                            </a>
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">bolt</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Electrical</span>
                            </a>
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">cleaning_services</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Cleaning</span>
                            </a>
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">handyman</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Handyman</span>
                            </a>
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">pest_control</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Pest Control</span>
                            </a>
                            <a className="min-w-[180px] group flex flex-col items-center bg-surface-container-lowest p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg border border-outline-variant/20" href="#">
                                <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">carpentry</span>
                                </div>
                                <span className="font-label-md text-on-surface text-center">Carpentry</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Shop Essentials */}
                <section className="py-20">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-on-surface">Shop Essentials</h2>
                                <p className="text-on-surface-variant font-body-md mt-1">Quality products delivered to your doorstep</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2 mr-4">
                                    <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                                <a className="text-primary font-label-md hover:underline flex items-center gap-2" href="syaanh/shopping">
                                    View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-10">
                            <button className="shrink-0 px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label-md transition-all hover:brightness-95">All</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Grocery</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Fresh Meats</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Fruits</button>
                            <button className="shrink-0 px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md transition-all hover:bg-primary-container/10 hover:text-primary">Household</button>
                        </div>
                        <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-4 -mx-margin-desktop px-margin-desktop">
                            {/* Category 1 */}
                            <div className="min-w-[280px] group relative h-96 rounded-3xl overflow-hidden cursor-pointer border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCviwWO7rtu3LG9a74-OXD2naBwSKZFR4hp3NP-8PkHUq0OB5Y4z2XAL9q_x3SmjiHkLgOVshD0TA_DGTrLcJMIp7SsjCgre-PpL_w0SSK6YypuYYuBlVo0F9vdwqup-zYHPo_R-FAeHlH2Wh21K6EuyTCOL3EZqgKjql8ARFxxO-hOHeHGVccW9HLnzQsHBhvUHSOO0SuN0UYcpcBMnBzxw6Sed6UeQ50fE9iMaWCMeAOqzWkRSFlG6lOzWg1cmChDsOtRVoSrfv6f')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-headline-md text-headline-md mb-1">Grocery</h4>
                                    <p className="text-label-md opacity-80">Daily staples delivered</p>
                                </div>
                            </div>
                            {/* Category 2 */}
                            <div className="min-w-[280px] group relative h-96 rounded-3xl overflow-hidden cursor-pointer border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBobE10PgYKRIrZsSPf3MfIHZdgW6_UzJ2XpJnCyY1iEjaUxWIh19x-MOzxvyI0FSa5ZXsbZqGfX7Gr_yQxYtp26gWDWirqPNVJvr0wsh0QtLZh9ybnbBy3TDg8okrjd_C_dGItK_b8CKRteAiVsp2oSkhn-MaOpr10WDBoBc9WUW2X71vdIo0Ko0Pv26aOC30ZtSErs_8QwA09kNS5BmONO9NW1cWUpbSrUatOFcMCoxdvVo90rbUN1R01NWAOPC0o4XwEmFJyeble')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-headline-md text-headline-md mb-1">Fresh Meats</h4>
                                    <p className="text-label-md opacity-80">Premium quality cuts</p>
                                </div>
                            </div>
                            {/* Category 3 */}
                            <div className="min-w-[280px] group relative h-96 rounded-3xl overflow-hidden cursor-pointer border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfIxmyoMQalu3NtRhHgckZuBiBiTq3_-3TGQJAkmtnAf4Qc_1G9q0IclaXHoVOYvJxtU7R4UDkQ5MhRDe08Ge-8A8VOtY5Tv_EWvP7IOGErQTyrPmbstCilE1qAptddaIsRZsbJwbviWHkkPw_XbOCWRwSMD4CjRxVhI7IqvmX_acatKvAR59a_lLXcJdoGEIyP3sHs4DxLbF1KNmNjvnVY-lrS4HTB2eQ2qYeAcfrQH7AEaguSPBvwiSWQI7RP3c896m0TTTLO8wS')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-headline-md text-headline-md mb-1">Fresh Fruits</h4>
                                    <p className="text-label-md opacity-80">Orchard fresh</p>
                                </div>
                            </div>
                            {/* Category 4 */}
                            <div className="min-w-[280px] group relative h-96 rounded-3xl overflow-hidden cursor-pointer border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNFA1X6pZVdvhgHJ48sPqhc4Z3rIPcmS7zUe-VG-ozZjMyLSZkIQZkdimXJPmfOoadeKnWso6_KfBk-kc7YL1ERnlcGnOkJScUV9dnSZnMdoBEA8rZQSf0TzkC_jtxMlMSA6aMUIsRqHXCbIOWtgwQc1m75GFkymLNXogHNPHYiX8cZQLRs02w9QEmlu2zOhgq6MaXOQH0ZB5I4JhzjJtejjmuwD28OyHbz7iL3G6lHk52bvHhUnjMjtkWqGb7r_-HEekCFRV6j-sJ')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-headline-md text-headline-md mb-1">Household</h4>
                                    <p className="text-label-md opacity-80">Cleaning & essentials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-24 bg-primary text-on-primary">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="text-center mb-16">
                            <h2 className="font-headline-lg text-headline-lg">How Syaanh Works</h2>
                            <p className="text-on-primary-container/80 mt-4 font-body-md">Seamless maintenance in just a few clicks</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-on-primary/10 flex items-center justify-center mb-6 border border-on-primary/20 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all">
                                    <span className="material-symbols-outlined text-3xl">touch_app</span>
                                </div>
                                <h5 className="font-headline-md text-headline-md mb-2">Choose</h5>
                                <p className="text-on-primary-container/70 text-label-md">Select the service or item you need from our catalog.</p>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-on-primary/10 flex items-center justify-center mb-6 border border-on-primary/20 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all">
                                    <span className="material-symbols-outlined text-3xl">edit_note</span>
                                </div>
                                <h5 className="font-headline-md text-headline-md mb-2">Describe</h5>
                                <p className="text-on-primary-container/70 text-label-md">Tell us a bit more about the task or your preferences.</p>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-on-primary/10 flex items-center justify-center mb-6 border border-on-primary/20 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all">
                                    <span className="material-symbols-outlined text-3xl">local_offer</span>
                                </div>
                                <h5 className="font-headline-md text-headline-md mb-2">Get Offers</h5>
                                <p className="text-on-primary-container/70 text-label-md">Receive instant quotes or competitive bids from pros.</p>
                            </div>
                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-on-primary/10 flex items-center justify-center mb-6 border border-on-primary/20 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all">
                                    <span className="material-symbols-outlined text-3xl">star</span>
                                </div>
                                <h5 className="font-headline-md text-headline-md mb-2">Rate & Enjoy</h5>
                                <p className="text-on-primary-container/70 text-label-md">Rate your experience and enjoy a perfectly maintained home.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-24">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Reasons to choose us</h2>
                                <p className="text-on-surface-variant font-body-lg mb-10 leading-relaxed">We pride ourselves on providing the highest quality home services in the region, built on a foundation of trust and professional excellence.</p>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-5">
                                        <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                        </div>
                                        <div>
                                            <h6 className="font-label-md text-label-md text-on-surface">Vetted Professionals</h6>
                                            <p className="text-on-surface-variant text-label-sm">Every technician undergoes background checks and skills testing.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                        </div>
                                        <div>
                                            <h6 className="font-label-md text-label-md text-on-surface">Direct Communication</h6>
                                            <p className="text-on-surface-variant text-label-sm">Chat directly with your service provider in the Syaanh app.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                                        </div>
                                        <div>
                                            <h6 className="font-label-md text-label-md text-on-surface">Service Protection</h6>
                                            <p className="text-on-surface-variant text-label-sm">Enjoy peace of mind with our Syaanh satisfaction guarantee.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-square bg-surface-container rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABhLQk__LsGdw_WrKw1WkJBkCJeEN_A_Iwca0E3F36l0C7TyjPuTkS9pxeVU-xdmOYTIEOP9yaK17fKKFz0sBbyySR7LfzE4YXOLVtjmrzI30n2ME4AZ-Fr7zmrPyhl67q45vNXLMGGfF-av0MtgRuWMwzJMIlWMREKNqMs3UQmaS_Xb0yMbbfNt_J-kPkCqVe-ZQ8NfuMM6J-bbKlzEWR33XMpNDcr-eWDV6KqSjpYiu_B-8qAb6hncr3lYhjPl1ZE4xNOoL-YYh-" alt="Professional technician" />
                                </div>
                                {/* Floating Trust Badges */}
                                <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined">thumb_up</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">4.9/5 Rating</div>
                                            <div className="text-[10px] text-on-surface-variant">by 50k+ users</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* App Promo Section */}
                <section className="mb-20 px-margin-desktop max-w-container-max mx-auto">
                    <div className="bg-secondary-container rounded-[40px] p-12 lg:p-20 overflow-hidden relative">
                        <div className="relative z-10 lg:w-3/5">
                            <h2 className="font-headline-xl text-headline-xl text-on-secondary-container mb-6">Manage your home on the go</h2>
                            <p className="text-on-secondary-container/80 font-body-lg mb-10">Track repairs, chat with pros, and order essentials with the Syaanh mobile app. Available on all major platforms.</p>
                            <div className="flex flex-wrap gap-4">
                                <a className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform" href="#">
                                    <span className="material-symbols-outlined text-3xl">phone_iphone</span>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase opacity-70">Download on</div>
                                        <div className="font-bold leading-tight">App Store</div>
                                    </div>
                                </a>
                                <a className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform" href="#">
                                    <span className="material-symbols-outlined text-3xl">play_books</span>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase opacity-70">Get it on</div>
                                        <div className="font-bold leading-tight">Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="absolute -right-20 -bottom-20 hidden lg:block w-1/2">
                            <img className="w-full drop-shadow-2xl transform -rotate-12 translate-y-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD250JLvQ5bWrshuxpvA-sBBhVm28wxYhE3Ln3xpTSp5UC_lyOSpb3AYePJ3--ELCZ3uvDGFowBvPGx5kI_0y41fsrEthpdabQuR-CN1CknnAAs3RfTJ93JFN3g9zuUwuX-qMrBkvxm4riiOwsP3r9uPGxXbuMl65xgz8o0Qp_6Gap2OFeBSYfDX2xrZVMB7BZjbzJKm6mJuMoDClLtqE0GZ0HFeIdf5fpnP6GlD0SSNv_-9rCnkXCFopItKAZdNLmu5EkbN9N8F1dt" alt="Syaanh mobile app" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;