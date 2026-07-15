import { Navbar, Footer } from "../components";

function Services() {
    return (
        <>
            <Navbar currentPage="services" />
            <main className="mt-20">
                {/* Seasonal Offer Hero Banner */}
                <section className="relative h-[500px] w-full overflow-hidden bg-surface-container">
                    <div className="absolute inset-0">
                        <img alt="Expert AC Servicing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6fIpbYwLs_h-uZzDCumKKMJPr6qvn1RpxumRTh_YcIoJIWaMWvBD_cvN_ti3gOqvHEe85h6EumAGEWKh8IKBnRsQ3mcEBUDaCrRoaLv3PidkA9J_3pjXScXTCOt_nZjK_QD7QcbO9psMOi6Wy6r6cOCf1AEYKDeaFh-eptHeJmK6PGB4kGFadtFkLjZrLqXIw8bbeqxIh2znVXLMe2KNhbuIwt6XaVI-AH9x-dkemMZAb_ZdB50-145SujIDuYVdVnx7CQ-w-Qemc" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
                    </div>
                    <div className="relative h-full max-w-container-max mx-auto px-margin-desktop flex items-center">
                        <div className="max-w-xl text-white">
                            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md mb-6 uppercase tracking-widest text-[12px]">Seasonal Offer</span>
                            <h2 className="font-headline-xl text-headline-xl mb-4">Summer AC Guard</h2>
                            <p className="font-body-lg text-body-lg mb-8 opacity-90">Prevent breakdowns with our comprehensive 24-point AC inspection and cleaning service starting at $49.</p>
                            <div className="flex items-center gap-6">
                                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-body-md hover:bg-secondary-fixed transition-all shadow-lg">Book Your Inspection</button>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-8 h-1.5 rounded-full bg-secondary-container"></div>
                        <div className="w-2 h-1.5 rounded-full bg-white/50"></div>
                        <div className="w-2 h-1.5 rounded-full bg-white/50"></div>
                    </div>
                </section>

                {/* Page Title */}
                <section className="bg-white py-16 border-b border-outline-variant">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="max-w-3xl">
                            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">Our Services</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">Experience premium home maintenance with our curated selection of professional services. Transparent, reliable, and expert-led care for your living space.</p>
                        </div>
                    </div>
                </section>

                {/* Filters & Tools */}
                <section className="sticky top-20 z-40 bg-surface/90 backdrop-blur-sm border-b border-outline-variant py-6">
                    <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-3">
                            <button className="px-6 py-2.5 rounded-full bg-primary text-white font-label-md shadow-sm">All Services</button>
                            <button className="px-6 py-2.5 rounded-full bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md">Maintenance</button>
                            <button className="px-6 py-2.5 rounded-full bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md">Cleaning</button>
                            <button className="px-6 py-2.5 rounded-full bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md">Installation</button>
                            <button className="px-6 py-2.5 rounded-full bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md">Specialized</button>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-outline-variant text-label-md hover:bg-surface-container transition-colors">
                                <span className="material-symbols-outlined text-[20px]">sort</span>
                                <span>Popularity</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="flex border border-outline-variant rounded-full overflow-hidden bg-white">
                                <button className="p-2.5 bg-primary-container/10 text-primary"><span className="material-symbols-outlined">grid_view</span></button>
                                <button className="p-2.5 text-on-surface-variant hover:bg-surface-container"><span className="material-symbols-outlined">list</span></button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Grid */}
                <section className="py-16 max-w-container-max mx-auto px-margin-desktop">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {/* Service Card 1 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">ac_unit</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">AC Service</h3>
                            <p className="text-sm text-on-surface-variant">Maintenance & Cleaning</p>
                        </div>
                        {/* Service Card 2 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">plumbing</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Plumbing</h3>
                            <p className="text-sm text-on-surface-variant">Leak Fix & Installation</p>
                        </div>
                        {/* Service Card 3 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">electrical_services</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Electrical</h3>
                            <p className="text-sm text-on-surface-variant">Wiring & Repair</p>
                        </div>
                        {/* Service Card 4 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">cleaning_services</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Cleaning</h3>
                            <p className="text-sm text-on-surface-variant">Full Home Deep Clean</p>
                        </div>
                        {/* Service Card 5 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">pest_control</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Pest Control</h3>
                            <p className="text-sm text-on-surface-variant">Residential Safety</p>
                        </div>
                        {/* Service Card 6 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">format_paint</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Painting</h3>
                            <p className="text-sm text-on-surface-variant">Interior & Exterior</p>
                        </div>
                        {/* Service Card 7 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">carpentry</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Carpentry</h3>
                            <p className="text-sm text-on-surface-variant">Furniture & Woodwork</p>
                        </div>
                        {/* Service Card 8 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">handyman</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Handyman</h3>
                            <p className="text-sm text-on-surface-variant">General Home Tasks</p>
                        </div>
                        {/* Service Card 9 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">security</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Security</h3>
                            <p className="text-sm text-on-surface-variant">CCTV & Alarms</p>
                        </div>
                        {/* Service Card 10 */}
                        <div className="service-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-primary cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">yard</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Gardening</h3>
                            <p className="text-sm text-on-surface-variant">Landscape Maintenance</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Services;