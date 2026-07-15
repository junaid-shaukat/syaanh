import { Navbar, Footer } from "../components";

function Offers() {
    return (
        <>
            <Navbar currentPage="offers" />
            <main className="min-h-screen mt-20">
                {/* Hero Section */}
                <section className="relative h-[480px] w-full flex items-center overflow-hidden bg-primary-container">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmLxhIwqkBz2Sb5zRI7dSC_6qTc_qbk2ZZnKKOtu-f_XV-DV9s9CpIdykvYiG9n7EiZ5eW1924XmD2wABIbnvxab--LSkWQh3PdwymFG6LrbTK_SpIKDDFdZhWuG5EQcdpvLKUGBy-L7FJe_HKfy2Sfwa5jL2fqjq53wn9R_3QA7qxqr1jez6X9_ceIoGAgTWbsjexjbBfbRxd5-LZ009VbYeW2uLBxA8pRc4ikQUyJDgLm7jPm-xXOVWG8G2N_TSpBLe-toqlYLHQ')" }}></div>
                    </div>
                    <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
                        <div className="max-w-2xl">
                            <h1 className="font-headline-xl text-headline-xl text-white mb-4">Exclusive Savings for Your Home</h1>
                            <p className="font-body-lg text-body-lg text-on-primary-container mb-8">Discover the best deals on expert maintenance and daily essentials. Professional service at prices that make sense.</p>
                            <div className="flex gap-4">
                                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:scale-105 transition-transform">Explore All Deals</button>
                                <button className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all">Join Premium</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter Bar */}
                <section className="sticky top-20 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant">
                    <div className="px-margin-desktop max-w-container-max mx-auto py-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center p-1 bg-surface-container rounded-xl">
                            <button className="px-6 py-2 rounded-lg font-label-md text-label-md bg-white shadow-sm text-primary transition-all">All Deals</button>
                            <button className="px-6 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-white/50 transition-all">Maintenance</button>
                            <button className="px-6 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-white/50 transition-all">Shopping</button>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                            <span className="material-symbols-outlined">filter_list</span>
                            <span>Sort by: Trending</span>
                        </div>
                    </div>
                </section>

                {/* Maintenance Deals */}
                <section className="py-12 px-margin-desktop max-w-container-max mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-headline-lg text-headline-lg text-primary">Top Deals on Services</h2>
                        <a className="text-primary font-label-md text-label-md flex items-center gap-1 group" href="#">View all services <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                        {/* Service Card 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-lg transition-shadow group">
                            <div className="relative h-48">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-1BcxF9QW0kD81F1i9mRpWR3FNQLYzFdq9KNdnWz0gae-f6k_oEJ4s9wpuoVeN9KSdEYshZ5_965QdHf0Fb16hj-w5cHag876jujAMv1NN_nWmwLd2S5tYQPuJHcaYj0Xc_sOdGPb_TxqSVbwCN83_N70aJW6ObdwZ5gCOUEEOXKZT4MQ7XIdVAnN2QYYFjcyAsLn6Oyj2_IEIehT6lhcDCZCC7Tidn5C7K0D74txokAPoFMAQA5bfEATE0bacAi3tGeQ00MFBHJd')" }}></div>
                                <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">Save 30%</div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">AC Deep Clean</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Complete sanitization and filter cleaning for peak efficiency.</p>
                                <div className="flex items-end justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-on-surface-variant line-through text-label-sm font-label-sm">QR 350.00</span>
                                        <span className="text-primary font-headline-md text-headline-md">QR 245.00</span>
                                    </div>
                                    <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-container transition-colors">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Service Card 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-lg transition-shadow group">
                            <div className="relative h-48">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmmA6MelOuxgjiMqvITnROFLEsreXbKRGRV8F_NfTBHM02PLOQJYdAd80Z2vv2TgosO5mmSgQ4lZoXjnYyF0Bl_us6XppgdH-T-6w28aOakCdMB7icQurwgwuEgyox4pPOvAXkDcdx1GMBSvOqG-LB0Ch3Fqk2XcpjMjkcTJD4V53X5fXCgrK_8hSthCmQhrvYmOeO9S0CEVm6PChf8FcoYmToI1qTF42JroAP4JPofM3CvMrB40993fXfKeWJOD8a75yb_E_og-Ui')" }}></div>
                                <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">Save 20%</div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Plumbing Checkup</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Preventive leak detection and pressure testing for your home.</p>
                                <div className="flex items-end justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-on-surface-variant line-through text-label-sm font-label-sm">QR 200.00</span>
                                        <span className="text-primary font-headline-md text-headline-md">QR 160.00</span>
                                    </div>
                                    <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-container transition-colors">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Service Card 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-lg transition-shadow group">
                            <div className="relative h-48">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzOL7s0AIVYr8GZXQ8iqRoOfMTIUchh8LPsJU1b0RppUQpA-eK6j7qDIRSIAM3UthfIZPgzPdzvL69dffju5bMl7WgwHkOWsr6ZLpY4ycEZ95wP6kdzRKeY1ItcnxdjZ90zavexQmaxdlsngK5xvdsLJnjJaRyuHWBbS0pCNDqYsO3oeEiXYGcJN53x1F-nLxbWaUDMijEQKMiWk69I7znl3GXTrkB9-ZT2i7paQGYFhdJgE2NrWAdTo7DLG5l04qFq1ppqGU-hW6U')" }}></div>
                                <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">Save 25%</div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Electrical Audit</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Full safety inspection of your home's wiring and load distribution.</p>
                                <div className="flex items-end justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-on-surface-variant line-through text-label-sm font-label-sm">QR 450.00</span>
                                        <span className="text-primary font-headline-md text-headline-md">QR 337.50</span>
                                    </div>
                                    <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-container transition-colors">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shopping Deals Section */}
                <section className="py-12 bg-surface-container-low px-margin-desktop">
                    <div className="max-w-container-max mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-headline-lg text-headline-lg text-on-surface">Shopping Essentials Offers</h2>
                            <a className="text-secondary font-label-md text-label-md flex items-center gap-1 group" href="#">Browse shop <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Product 1 */}
                            <div className="bg-white p-4 rounded-2xl border border-outline-variant flex flex-col hover:shadow-md transition-all group">
                                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe2DwsqsTSWPsvlxBSnht49oTB5tGAmbpH7x-0g09vOwXbXiqr9fmGE2xiow2bqd78Rrp2QiHrAlbrdmTMZZhOIovfvAmgfPzuEYS-cvWAUAvJX7ZYeiXsoVWhGx_TlTsoQvBKEN-OOn5lsGeZ4kIx3xtS1ZSRFKsqrRGFQTs310wBavuCPQyKfDRUHYWgWaunI_n7I_8KOS76sfEdLPRsmcMy8reZ00UQt9Ivq_Yot9tQWHWXuiiMYbtl2NAVcs3mQ4vQ8nQ2RL9u')" }}></div>
                                </div>
                                <h4 className="font-label-md text-label-md text-on-surface mb-1">Household Cleaning Kit</h4>
                                <p className="text-label-sm text-on-surface-variant mb-3">5 Premium eco-friendly products</p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-primary font-bold">QR 85.00</span>
                                        <span className="text-on-surface-variant line-through text-label-sm">QR 120.00</span>
                                    </div>
                                    <button className="w-full bg-secondary-container text-on-secondary-container py-2 rounded-lg font-label-md text-label-md font-bold hover:brightness-95 active:scale-95 transition-all">Add to Cart</button>
                                </div>
                            </div>
                            {/* Product 2 */}
                            <div className="bg-white p-4 rounded-2xl border border-outline-variant flex flex-col hover:shadow-md transition-all group">
                                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9w4iqbu8WZbqxq5XDi2D-QNYtX9D8O9XcKBjN2C8Le8gYCkpzvb3mwDngX2EA_Z89GCZbctOzZMAdQKnByNawQ1jwFHXKacaBFL0Zh2b9t96gxI5kVmNOmLDL1aj3VhWHRdSmxTXbVfNSzyUFXYbFEhjDc6bF0Q-kx9iL7kz7ar7iGQlEiZVIN1Ibi7vphFuqL4t_hUf-fgqkSF0L9quSgOWvuuiVNEI0CBKxkla7XKmLESmy8tbNZ_pf7kSCjWiuPujVbfVcGp1p')" }}></div>
                                </div>
                                <h4 className="font-label-md text-label-md text-on-surface mb-1">Fresh Fruit Box</h4>
                                <p className="text-label-sm text-on-surface-variant mb-3">Weekly seasonal selection (5kg)</p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-primary font-bold">QR 110.00</span>
                                        <span className="text-on-surface-variant line-through text-label-sm">QR 145.00</span>
                                    </div>
                                    <button className="w-full bg-secondary-container text-on-secondary-container py-2 rounded-lg font-label-md text-label-md font-bold hover:brightness-95 active:scale-95 transition-all">Add to Cart</button>
                                </div>
                            </div>
                            {/* Product 3 */}
                            <div className="bg-white p-4 rounded-2xl border border-outline-variant flex flex-col hover:shadow-md transition-all group">
                                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrMoPEuNUsWhYPyYaRC_VKnYZpMh8jZ3wTPcP0adKAyoFlaiABm3hgesGAQS3KLb-8KyBjLOW0_VkjoTT9Cx_OYemEabRDpj8vbekwuKMGbX9ZNse_d1Gc0KKC_5WlKY_BU1wvvLhtWW2VlvUcdKcM-XUKZxCCqlFL5-PSisoC6Cpewxycf42JmDM-Uu_2DL5tiYLgtaATZdEkSLkAGHjwhlJH7OmsX-2YedQgSxxOtvBOLBSspkheGLCYnykIJX_XD7crvP-ddEDC')" }}></div>
                                </div>
                                <h4 className="font-label-md text-label-md text-on-surface mb-1">HVAC Filter Pack</h4>
                                <p className="text-label-sm text-on-surface-variant mb-3">Set of 4 high-efficiency filters</p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-primary font-bold">QR 180.00</span>
                                        <span className="text-on-surface-variant line-through text-label-sm">QR 220.00</span>
                                    </div>
                                    <button className="w-full bg-secondary-container text-on-secondary-container py-2 rounded-lg font-label-md text-label-md font-bold hover:brightness-95 active:scale-95 transition-all">Add to Cart</button>
                                </div>
                            </div>
                            {/* Product 4 */}
                            <div className="bg-white p-4 rounded-2xl border border-outline-variant flex flex-col hover:shadow-md transition-all group">
                                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_0s_tpU-IAolqeLJBLKnnjU9kZ4cg2lIMX6t1FsVz0Phb01xDzi16W4ujVEJjPhL1lZuj4fYZqLHlz-UJDmDsh6VLDCH_HaBXlMADPI_rtzrg0h9O9Mow2a0evBs4AMQA9KVovcDx7lWUgsWwaFo6JWTKQ4ULtc1HcMPk2W2GXLdw9w0-NkrlYzHBh4L3zv0K_FNCJ7-hNv9474YXzfGcxrJ_uFTMi7tk4KoN0fJ01l76bHfMi5pZ_ZCezS6_iDs_Oo5f_wNQkqmR')" }}></div>
                                </div>
                                <h4 className="font-label-md text-label-md text-on-surface mb-1">Smart Security Kit</h4>
                                <p className="text-label-sm text-on-surface-variant mb-3">Starter pack with 3 sensors</p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-primary font-bold">QR 450.00</span>
                                        <span className="text-on-surface-variant line-through text-label-sm">QR 599.00</span>
                                    </div>
                                    <button className="w-full bg-secondary-container text-on-secondary-container py-2 rounded-lg font-label-md text-label-md font-bold hover:brightness-95 active:scale-95 transition-all">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promotional Banner */}
                <section className="py-16 px-margin-desktop">
                    <div className="max-w-container-max mx-auto bg-primary rounded-[2rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                            <svg fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="200" cy="200" r="180" stroke="white" strokeDasharray="10 20" strokeWidth="40" />
                            </svg>
                        </div>
                        <div className="relative z-10 max-w-xl">
                            <h2 className="font-headline-lg text-headline-lg text-white mb-4">Syaanh Gold Membership</h2>
                            <p className="font-body-lg text-body-lg text-on-primary-container mb-6">Join our premium tier for an additional 15% off on all services and priority scheduling during emergencies.</p>
                            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-label-md text-label-md font-extrabold hover:scale-105 transition-transform shadow-xl">Join Now for QR 99/yr</button>
                        </div>
                        <div className="relative z-10 hidden md:block">
                            <span className="material-symbols-outlined text-[160px] text-secondary-fixed/20 select-none">military_tech</span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Offers;