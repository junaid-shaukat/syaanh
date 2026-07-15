import { Navbar, Footer } from "../components";

function Shopping() {
    return (
        <>
            <Navbar currentPage="shopping" />
            <div className="max-w-container-max mx-auto w-full flex flex-1 px-margin-desktop gap-gutter pt-28 pb-16">
                {/* SideNavBar */}
                <aside className="w-64 sticky top-28 h-fit hidden lg:flex flex-col gap-6">
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Categories</h2>
                        <div className="h-1 w-12 bg-primary rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <a className="flex items-center justify-between group bg-primary-container text-on-primary-container rounded-xl px-4 py-3.5 font-label-md transition-all" href="#">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[22px]">shopping_basket</span>
                                <span>Grocery</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </a>
                        <a className="flex items-center justify-between group text-on-surface-variant hover:bg-surface-container rounded-xl px-4 py-3.5 font-label-md transition-all" href="#">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[22px]">restaurant</span>
                                <span>Fresh Meats</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </a>
                        <a className="flex items-center justify-between group text-on-surface-variant hover:bg-surface-container rounded-xl px-4 py-3.5 font-label-md transition-all" href="#">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[22px]">eco</span>
                                <span>Fruits & Vegetables</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </a>
                        <a className="flex items-center justify-between group text-on-surface-variant hover:bg-surface-container rounded-xl px-4 py-3.5 font-label-md transition-all" href="#">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[22px]">home_repair_service</span>
                                <span>Household Items</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </a>
                        <a className="flex items-center justify-between group text-on-surface-variant hover:bg-surface-container rounded-xl px-4 py-3.5 font-label-md transition-all" href="#">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[22px]">egg_alt</span>
                                <span>Dairy & Eggs</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </a>
                    </div>

                    <div className="mt-4 p-5 bg-surface-container rounded-2xl border border-outline-variant/50">
                        <p className="text-label-sm font-bold text-primary tracking-wider mb-2 uppercase">Member Benefit</p>
                        <p className="text-body-md text-on-surface-variant mb-4">Get free delivery on orders over QAR 200.</p>
                        <a href="#" className="text-label-md text-primary font-bold hover:underline">Learn more</a>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1">
                    {/* Enhanced Hero Section */}
                    <section className="mb-12 relative overflow-hidden rounded-[2rem] bg-primary group min-h-[400px] flex items-center shadow-2xl shadow-primary/10">
                        <div className="absolute inset-0 z-0">
                            <img alt="Professional Technician" className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida/AP1WRLskS-qdaK14RJScmBsTEZ_sC24T-lKjPXu-MsaprSb-_irxZGSm9efp_U6GHDMulYgKLgBB4gYlSX02dVU-gt5jdK5eVcErhQvGNWv2TwVZN9_d_GhtnZv1Ud-_r97osB2CUjQVh5kpRHWSGmEWqhr0fg3VqehjLXUMxXDwY0szHzKYU3PQw8U-H2c_cl1vByB-mrpBK5a8deCM0WzocWqJoX1P2ex-TbglCYz8Sv7JlmEO6u7DXbUyadg" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent"></div>
                        </div>
                        <div className="relative z-10 px-12 py-16 max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-secondary-container/90 backdrop-blur-sm text-on-secondary-container px-4 py-1.5 rounded-full text-label-sm font-extrabold mb-6 shadow-sm">
                                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                                LIMITED TIME OFFER
                            </div>
                            <h2 className="font-headline-xl text-headline-xl text-on-primary mb-4 leading-tight">Elevate Your Home Experience</h2>
                            <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-lg leading-relaxed">Discover premium tools, fresh essentials, and maintenance kits curated for the modern Qatari household.</p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold hover:bg-secondary-fixed-dim transition-all shadow-lg shadow-secondary-container/20 active:scale-95">Shop the Sale</button>
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-on-primary px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">View Catalogs</button>
                            </div>
                        </div>
                        {/* Carousel Indicators */}
                        <div className="absolute bottom-8 right-12 flex gap-2">
                            <div className="w-8 h-1.5 bg-on-primary rounded-full"></div>
                            <div className="w-2 h-1.5 bg-on-primary/30 rounded-full"></div>
                            <div className="w-2 h-1.5 bg-on-primary/30 rounded-full"></div>
                        </div>
                    </section>

                    {/* Page Header & Toolbar */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div>
                            <nav className="flex items-center gap-2 text-label-sm font-bold text-on-surface-variant mb-3 uppercase tracking-widest">
                                <a href="#" className="hover:text-primary transition-colors">Home</a>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-primary">Shopping</span>
                            </nav>
                            <h1 className="font-headline-xl text-headline-xl text-on-surface">Premium Essentials</h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
                                <input className="w-full md:w-80 pl-12 pr-4 py-3.5 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-body-md transition-all" placeholder="Search products..." type="text" />
                            </div>
                            <button className="flex items-center gap-2 px-5 py-3.5 bg-surface-container-low rounded-2xl text-label-md font-bold text-on-surface hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-[20px]">tune</span>
                                <span>Filter</span>
                            </button>
                            <div className="hidden sm:block h-10 w-px bg-outline-variant mx-1"></div>
                            <select className="px-5 py-3.5 bg-transparent border-none focus:ring-0 text-label-md font-bold text-on-surface-variant cursor-pointer">
                                <option>Sort: Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Latest Arrivals</option>
                            </select>
                        </div>
                    </div>

                    {/* Modern Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                        {/* Product 1 */}
                        <article className="bg-surface group flex flex-col h-full relative">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low mb-6">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdlH_2XWD4Lo4VDnsjrMJypMXPs3cwkh1MRdVsILVJtKvtsrD8SPDeQU1ZFopxVsfxhQUl10jm04hCkdGmvFcriyEL0C7rtscmnuIYO4rlL8bRjU7AomlWda_lW02TMVZOwZH0XpnZTceifKniQL57iQ-p-CX_o6mJ1cPl7lCIhfMqWigLY1x9GVYf1l5JnM-CjmswoYyh7fmxLN3ySs8v490hJk9Ea3tjsCsp3wnCbBsIBRMhSj5BNz9Ed_7djdBTVYUcvvrZ5B-S')" }}></div>
                                <div className="absolute top-5 left-5">
                                    <span className="bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">Fruits</span>
                                </div>
                                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-error transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                            <div className="px-2 flex flex-col flex-1">
                                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">Organic Mixed Fruit Box</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-6">Hand-picked seasonal organic fruits from local sustainable farms.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-label-sm font-bold text-on-surface-variant uppercase">Price</span>
                                        <span className="font-headline-md text-headline-md text-primary">QAR 45.00</span>
                                    </div>
                                    <button className="bg-secondary-container text-on-secondary-container w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-secondary-fixed-dim hover:shadow-lg hover:shadow-secondary-container/20 transition-all active:scale-95 group/btn">
                                        <span className="material-symbols-outlined text-[24px] group-hover/btn:scale-110 transition-transform">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Product 2 */}
                        <article className="bg-surface group flex flex-col h-full relative">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low mb-6">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC26BhVWUqIesr-Nw8NdG4ChZN0vCcQ7P6mdCVX3ta-9KhEZ8QwxrlR0YtQe6uJ55dpsCx5lUbqE7voInwA1ZLiXWYN_04G8uBepxBX2Vb0iKPCP0vYD7pmcF-Nr6a2u8yJiodu4-0w5cpl47fybXOhfoqazifc2V5MoUWu7T9-yFw_K6RmjL_mC1Aav14jX30N5SxLkDDqGoqrJmYdfImyXBgXkKiMYkMBvp9dL0L05TblhSzwEUEdwWGNBstwbZXG75aRvAS2wqCh')" }}></div>
                                <div className="absolute top-5 left-5">
                                    <span className="bg-primary-container/90 backdrop-blur-md text-on-primary-container px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">Fresh Meats</span>
                                </div>
                                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-error transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                            <div className="px-2 flex flex-col flex-1">
                                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">Australian Lamb Ribs (1kg)</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-6">Premium pasture-fed Australian lamb, tender and vacuum sealed for freshness.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-label-sm font-bold text-on-surface-variant uppercase">Price</span>
                                        <span className="font-headline-md text-headline-md text-primary">QAR 85.00</span>
                                    </div>
                                    <button className="bg-secondary-container text-on-secondary-container w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-secondary-fixed-dim hover:shadow-lg hover:shadow-secondary-container/20 transition-all active:scale-95 group/btn">
                                        <span className="material-symbols-outlined text-[24px] group-hover/btn:scale-110 transition-transform">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Product 3 */}
                        <article className="bg-surface group flex flex-col h-full relative">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low mb-6">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXnbkvuJwNIotY1mKn4XyJgp7lg65VcbFSLOixncU0YrpASg_mvNP7P7EvDNbcq33HUOwS8idEYFJ5cg7ciAE9qCSnKMFWAPPOX794W28LZYhKFfhlNUmoDRqzvMpIJMMb-yEwSZPrddArqEVnjTjoYxrQzUVAPYwD1UC-8AtrZ7YSFdl4LqwvTFbGxNbY5wz_2pxNdjul3NbRRkL5vIdp_1_OK3CrHb1e3nQgFJ03mG_eNAcHp2fId93pWl461guoYNKgHZUfB82n')" }}></div>
                                <div className="absolute top-5 left-5">
                                    <span className="bg-secondary-container/90 backdrop-blur-md text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">Household</span>
                                </div>
                                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-error transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                            <div className="px-2 flex flex-col flex-1">
                                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">Premium BBQ Kit</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-6">Everything you need for the perfect backyard grill experience. 12-piece set.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-label-sm font-bold text-on-surface-variant uppercase">Price</span>
                                        <span className="font-headline-md text-headline-md text-primary">QAR 299.00</span>
                                    </div>
                                    <button className="bg-secondary-container text-on-secondary-container w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-secondary-fixed-dim hover:shadow-lg hover:shadow-secondary-container/20 transition-all active:scale-95 group/btn">
                                        <span className="material-symbols-outlined text-[24px] group-hover/btn:scale-110 transition-transform">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Product 4 */}
                        <article className="bg-surface group flex flex-col h-full relative">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low mb-6">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI7nUonBo5QlHceW27N0jJB1QPN8WJu72aHdHOTe3HV4vOBpBES1heO9YgKNOv4J2faW3A27gZtZRmtZ9p7b3WILPUk0CiKJ08f48YagYgXfCymtMPe3oL5CP3hqVE4Uu3FALCQuAsaooCo9wiJxUItc20i9eTiESPTURCH8h9ySR9lIZGI3ANR-13dvfps68wYcpJmBbH-k1n9W5x7dcr0Qujmi9LC_K_JG42zTJs9HcaVqH3rqXx1Y6ySxV2c9RuOzfkf-hBrnn1')" }}></div>
                                <div className="absolute top-5 left-5">
                                    <span className="bg-primary-container/90 backdrop-blur-md text-on-primary-container px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">Dairy</span>
                                </div>
                                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-error transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                            <div className="px-2 flex flex-col flex-1">
                                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">Fresh Milk (2L)</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-6">Farm-fresh full cream milk, homogenized and pasteurized for quality.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-label-sm font-bold text-on-surface-variant uppercase">Price</span>
                                        <span className="font-headline-md text-headline-md text-primary">QAR 12.00</span>
                                    </div>
                                    <button className="bg-secondary-container text-on-secondary-container w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-secondary-fixed-dim hover:shadow-lg hover:shadow-secondary-container/20 transition-all active:scale-95 group/btn">
                                        <span className="material-symbols-outlined text-[24px] group-hover/btn:scale-110 transition-transform">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Product 5 */}
                        <article className="bg-surface group flex flex-col h-full relative">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low mb-6">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvwrcFc0nGVFkYXjv7ii1JWw4O-Bb0SlJbHVuMvCBWAAFuZipgv_gOWWIFcgzU1yifa63hdEE4LtE4To4dlb01B-7JuM5H4VF-d_qumHDVhfC8zRmhVWVXF4ez4DZKXtQPDaTHT_t3kJuusq7zuAuv-EJnel980c5nQb9Wq5RqNkHcm4FgZ61l3zMuIsIflQ776iLXqzJytB_qP6fN5aC6p_3YBt3xoloJSXxyo80i4FaeZ0s-oHcyy-R6j9K2ED-56bkBux8a0wnR')" }}></div>
                                <div className="absolute top-5 left-5">
                                    <span className="bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">Vegetables</span>
                                </div>
                                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-error transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                            <div className="px-2 flex flex-col flex-1">
                                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">Daily Vegetable Pack</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-6">An essential mix of daily cooking vegetables, portioned for a family of four.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-label-sm font-bold text-on-surface-variant uppercase">Price</span>
                                        <span className="font-headline-md text-headline-md text-primary">QAR 30.00</span>
                                    </div>
                                    <button className="bg-secondary-container text-on-secondary-container w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-secondary-fixed-dim hover:shadow-lg hover:shadow-secondary-container/20 transition-all active:scale-95 group/btn">
                                        <span className="material-symbols-outlined text-[24px] group-hover/btn:scale-110 transition-transform">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Pagination */}
                    <div className="mt-20 flex justify-center">
                        <button className="group px-12 py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-on-primary transition-all duration-500 flex items-center gap-2">
                            <span>Load More Products</span>
                            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">sync</span>
                        </button>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Shopping;