import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar, Footer } from "../components";
import { logout } from "../app/preferenceSlice";

function Profile() {
    const [activeTab, setActiveTab] = useState("profile");
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const dispatch = useDispatch();

    const switchTab = (tab) => {
        if (tab === "logout") {
            setShowLogoutModal(true);
            return;
        }
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const closeLogoutModal = () => {
        setShowLogoutModal(false);
        setIsLoggingOut(false);
    };

    const handleLogout = () => {
        setIsLoggingOut(true);
        setTimeout(() => {
            dispatch(logout());
            alert("Successfully logged out of Syaanh.");
            closeLogoutModal();
        }, 800);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeLogoutModal();
        }
    };

    // Escape key to close modal
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeLogoutModal();
        };
        if (showLogoutModal) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [showLogoutModal]);

    const navClass = (tab) =>
        tab === activeTab
            ? "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-label-md text-label-md active-nav"
            : "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low";

    const breadcrumbLabel = {
        profile: "Profile Info",
        orders: "My Orders",
        bookings: "My Bookings",
        addresses: "Saved Addresses",
        settings: "Settings",
    };

    return (
        <>
            <style>{`
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    display: inline-block;
                    line-height: 1;
                }
                .address-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .address-card:hover {
                    transform: translateY(-4px);
                }
                .address-card:hover .action-buttons {
                    opacity: 1;
                    transform: translateY(0);
                }
                .toggle-switch:checked + .toggle-slider {
                    background-color: #004751;
                }
                .toggle-switch:checked + .toggle-slider:after {
                    transform: translateX(20px);
                }
                input[type="password"],
                select {
                    border: 1px solid var(--outline-variant, #bec8cb);
                }
            `}</style>
            <Navbar currentPage="profile" />
            <main className="flex-grow max-w-container-max mx-auto w-full px-margin-desktop py-10 flex flex-col md:flex-row gap-8 mt-20">
                {/* Side Navigation Menu */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
                        <nav className="space-y-2">
                            <button className={navClass("profile")} id="nav-profile" onClick={() => switchTab("profile")}>
                                <span className="material-symbols-outlined">person</span>
                                Profile Info
                            </button>
                            <button className={navClass("orders")} id="nav-orders" onClick={() => switchTab("orders")}>
                                <span className="material-symbols-outlined">assignment</span>
                                My Orders
                            </button>
                            <button className={navClass("bookings")} id="nav-bookings" onClick={() => switchTab("bookings")}>
                                <span className="material-symbols-outlined">calendar_today</span>
                                My Bookings
                            </button>
                            <button className={navClass("addresses")} id="nav-addresses" onClick={() => switchTab("addresses")}>
                                <span className="material-symbols-outlined">location_on</span>
                                Saved Addresses
                            </button>
                            <button className={navClass("settings")} id="nav-settings" onClick={() => switchTab("settings")}>
                                <span className="material-symbols-outlined">settings</span>
                                Settings
                            </button>
                        </nav>
                        <div className="mt-8 pt-4 border-t border-outline-variant">
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-error font-label-md text-label-md hover:bg-error-container/20 transition-colors" onClick={() => switchTab("logout")}>
                                <span className="material-symbols-outlined">logout</span>
                                Logout
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <section className="flex-grow">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 mb-6 text-on-surface-variant font-label-sm text-label-sm">
                        <span>Account</span>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="text-primary font-semibold" id="breadcrumb-active">{breadcrumbLabel[activeTab]}</span>
                    </div>

                    {/* Content: Profile Info */}
                    {activeTab === "profile" && (
                        <div className="space-y-8" id="content-profile">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Profile Info</h1>
                                    <p className="text-on-surface-variant font-body-md text-body-md">Update your personal details and contact information.</p>
                                </div>
                                <button className="flex items-center gap-2 px-6 py-2.5 bg-secondary-container text-on-secondary-container rounded-lg font-label-md shadow-sm hover:shadow-md transition-shadow">
                                    <span className="material-symbols-outlined text-[20px]">edit</span>
                                    Edit Profile
                                </button>
                            </div>
                            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-8 flex flex-col md:flex-row gap-12 items-center">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                                        <img className="w-full h-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjunoUNePThIbPUow_qAeMQ6RSaQiKgaC5ajvWwr_9qbZGvfecbtMPqGnS6wG_3UKV7mW7340QPOqjPK7tUkGB7XeFhKMePq-42zLSHJtUuZvx5U9VWYHCBs0PJ6h94-3wCT6Gnyg992gOmYiburRprVmYUV92kefNSUYeqaIVOeDXPj2hMUNlCpddgwi37mnOr3siBfLAUkgYaIYhWfyBEbqaskE1_0d8paeNw6owv1BHbS-71i8kijO3GwnXDD2MwqTrTDdTSpl1" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white cursor-pointer">
                                        <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 flex-grow w-full">
                                    <div className="space-y-1">
                                        <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Full Name</label>
                                        <p className="font-headline-md text-headline-md text-on-surface">Ahmed Khalid Al-Mansour</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Email Address</label>
                                        <p className="font-body-lg text-body-lg text-on-surface">ahmed.khalid@example.com</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Phone Number</label>
                                        <p className="font-body-lg text-body-lg text-on-surface">+974 5512 3456</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Member Since</label>
                                        <p className="font-body-lg text-body-lg text-on-surface">January 2023</p>
                                    </div>
                                </div>
                            </div>
                            {/* Account Statistics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-primary-container p-6 rounded-xl text-on-primary-container">
                                    <span className="material-symbols-outlined text-[32px] mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                    <p className="text-label-sm uppercase font-bold opacity-80">Loyalty Status</p>
                                    <h4 className="text-headline-md font-bold">Gold Member</h4>
                                </div>
                                <div className="bg-surface-container-high p-6 rounded-xl">
                                    <span className="material-symbols-outlined text-[32px] mb-2 text-primary">handyman</span>
                                    <p className="text-label-sm uppercase font-bold text-on-surface-variant">Services Used</p>
                                    <h4 className="text-headline-md font-bold text-primary">24 Jobs</h4>
                                </div>
                                <div className="bg-surface-container-high p-6 rounded-xl">
                                    <span className="material-symbols-outlined text-[32px] mb-2 text-secondary">wallet</span>
                                    <p className="text-label-sm uppercase font-bold text-on-surface-variant">Syaanh Credits</p>
                                    <h4 className="text-headline-md font-bold text-secondary">QAR 450.00</h4>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Content: My Orders */}
                    {activeTab === "orders" && (
                        <div className="space-y-6" id="content-orders">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h1 className="font-headline-lg text-headline-lg text-on-surface">My Orders</h1>
                                    <p className="text-on-surface-variant font-body-md text-body-md">Track and manage your maintenance service requests.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low">
                                        <span className="material-symbols-outlined">filter_list</span>
                                    </button>
                                    <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low">
                                        <span className="material-symbols-outlined">search</span>
                                    </button>
                                </div>
                            </div>
                            {/* Orders Bento Grid / List */}
                            <div className="grid grid-cols-1 gap-4">
                                {/* Order Card 1: In Progress */}
                                <div className="order-card bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row">
                                    <div className="w-full md:w-48 h-32 md:h-auto overflow-hidden">
                                        <img className="w-full h-full object-cover" alt="AC Deep Cleaning" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf5uA09_-fpQK3A4KcIV9bgGbPKrh867cLaT-5DsGwqEoGZgx0REw6jfiRFE0koAMYX4Gxtap7PaYx0Vsq1ilMWcK6KOHT7rhVQkt3btIuExZ-s1z5oUXH5-v3SygAlc43WqP2PU3tm_ab54Jf4Gu0sVgJnHm80OGM8FAL_Lsx9f16zPI0dMfoBwFItsoVDIHNpcmNqwTdTFKPxHOj6CzOAMP0kJc7K0ZATcvHB4oqpit8P2Ap-ef9YDkHlOLSvRi0S_2jl0ZhCyJE" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-headline-md text-headline-md text-primary">AC Deep Cleaning</h3>
                                                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm uppercase tracking-wider">In Progress</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                                Scheduled: Oct 24, 2024 • 10:00 AM
                                            </p>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">person_outline</span>
                                                Technician: Mohammad Salem
                                            </p>
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-all">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                {/* Order Card 2: Completed */}
                                <div className="order-card bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row">
                                    <div className="w-full md:w-48 h-32 md:h-auto overflow-hidden opacity-80">
                                        <img className="w-full h-full object-cover" alt="Plumbing Repair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnVeVvnmcsCIIpYvBXPthFhtBozBLm3poqt6l3pqil44eYBnHOsA7vilUxXbpw38a9XNnN9f98Vtweyb-xvbbeXSZxMHJI_lUHEt4d-IqfULPhUfxkI7RaHmEO4jawFuqSbTDueAx6cqkBj0Kw-0KVnYyxHOPFDRXD6vSpCjFXjynzWWnRJrtbihJ0IY4jnDRx3GkldvSx6woDj0ApQfJgCypeBmMmCOjB2y1EYplJ1rVepWD1JEgOuqwXAxodfJKC78tPgRC-op0" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-headline-md text-headline-md text-primary">Plumbing Repair</h3>
                                                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full font-label-sm text-label-sm uppercase tracking-wider">Completed</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                                Finished: Oct 18, 2024
                                            </p>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">person_outline</span>
                                                Technician: Khaled Ibrahim
                                            </p>
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-2.5 border-2 border-primary text-primary rounded-lg font-label-md hover:bg-surface-container-low transition-all">
                                            Rebook Service
                                        </button>
                                    </div>
                                </div>
                                {/* Order Card 3: Cancelled */}
                                <div className="order-card bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row opacity-70">
                                    <div className="w-full md:w-48 h-32 md:h-auto overflow-hidden grayscale">
                                        <img className="w-full h-full object-cover" alt="Electrical Inspection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1QDcmh7mXk4Xlz_1wrbbWDzI6U7ptRPRYG0ZMe5E6Tb2d0djzoi5-b8CQQeMtbKzqCXvb_VHxe-82Crm4iKTbUw-938-Z3hHcH1knYb8DRBWHxl9MGe7PugcogZjGUPsqtabJ4nZgR4BYBAdLeydhn-MVyz30LZorVSfHHHFBxyntgYHjRS3d_ySsZhfBV8DaJIeBrbH52bxz6VLvOkN4UZ0MJgqmF-p3hzo1XFMc7wlgdS0uPjLeR9hDcl2G6yC2kcAds8lW2QUz" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-headline-md text-headline-md text-on-surface-variant">Electrical Inspection</h3>
                                                <span className="px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm uppercase tracking-wider">Cancelled</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                                Date: Oct 12, 2024
                                            </p>
                                            <p className="text-on-surface-variant font-body-md text-body-md">Reason: Client Request</p>
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-2.5 border border-outline text-on-surface-variant rounded-lg font-label-md">
                                            View Logs
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Content: Saved Addresses */}
                    {activeTab === "addresses" && (
                        <div className="flex-1">
                            {/* Page Content */}
                            <div className="max-w-container-max mx-auto py-4">
                                {/* Action Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                    <div>
                                        <h2 className="font-headline-lg text-headline-lg text-primary">Saved Addresses</h2>
                                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1">
                                            Manage your home and office locations for quicker service bookings. Your dependability starts with knowing where to go.
                                        </p>
                                    </div>
                                    <button className="bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-md active:scale-95 transition-all">
                                        <span className="material-symbols-outlined">add_location</span>
                                        Add New Address
                                    </button>
                                </div>
                                {/* Address Cards Bento-style Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Primary Address: Home */}
                                    <div className="address-card relative bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-3 py-1 rounded-full">Default</span>
                                        </div>
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                                            </div>
                                            <div>
                                                <h3 className="font-headline-md text-headline-md text-on-surface">Home</h3>
                                                <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Personal Residence</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3 mb-8">
                                            <div className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-outline text-lg mt-0.5">location_on</span>
                                                <p className="font-body-md text-body-md text-on-surface">Villa 124, Al-Khobar North, Street 4B, Zone 7</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-outline text-lg mt-0.5">near_me</span>
                                                <p className="font-body-md text-body-md text-on-surface">Eastern Province, Saudi Arabia</p>
                                            </div>
                                        </div>
                                        <div className="h-40 rounded-lg overflow-hidden relative mb-6">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                            <div className="w-full h-full bg-surface-container" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGJnczXABMrKslAALLuomay8U6HcEOMs3Ur8RQZp0OZrso-SMN910K52TqN2tQAQYZEq_MNaFtVsXAGlk2iJM692_zv8IX-PC_-GWbJnJ2DJaBdNn1Ht-h7gpZxobsCWNte3_JufXIuVqB8bjwXG9tT0pCCzvUTTW8XjBZkXwvC4xU1ix6puQ4Ghq18T2g33NSrzQ1Kk2UllMFPTUasEfoA5qSEn3lDWbRtA_7gxiFBkHJAk0WyQoE0iwI1s_W6nSIwoBl6dBiCmqh')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex-1 border border-outline-variant hover:bg-surface-container text-on-surface-variant font-label-md text-label-md py-3 rounded-lg transition-colors">Edit</button>
                                            <button className="px-4 border border-outline-variant hover:bg-error-container hover:text-error hover:border-error text-on-surface-variant font-label-md text-label-md py-3 rounded-lg transition-all">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Address: Office */}
                                    <div className="address-card bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-3xl">business</span>
                                            </div>
                                            <div>
                                                <h3 className="font-headline-md text-headline-md text-on-surface">Office</h3>
                                                <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Work HQ</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3 mb-8">
                                            <div className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-outline text-lg mt-0.5">location_on</span>
                                                <p className="font-body-md text-body-md text-on-surface">Floor 12, Crystal Tower, King Fahd Road</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-outline text-lg mt-0.5">near_me</span>
                                                <p className="font-body-md text-body-md text-on-surface">Riyadh, Saudi Arabia</p>
                                            </div>
                                        </div>
                                        <div className="h-40 rounded-lg overflow-hidden relative mb-6">
                                            <div className="w-full h-full bg-surface-container" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7Twqlh-2MfqbG9hgBuSpgrpQeU3702Aq6O1E5nVOSzkixYLFAl2UVRceTpMYsVkE_hpSeUQeqMN3DKbu2NJP4JYatHt0N0USOWxOGqCcoq__KE-dpZmez_QiwMoPyG38XC3L9ekx0bs76TvpowF8HVgk7oHPTPjT8YzEa43n9lJOTE8XfengUDHAkSMURf0BjO7ewP1MbO3v2xbfVPrqmNsoZu7mBunKUWJmmpymS2kknBoAji9oJWB9mR_g-zFdSngeHa_rznxxJ')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex-1 border border-outline-variant hover:bg-surface-container text-on-surface-variant font-label-md text-label-md py-3 rounded-lg transition-colors">Edit</button>
                                            <button className="px-4 border border-outline-variant hover:bg-error-container hover:text-error hover:border-error text-on-surface-variant font-label-md text-label-md py-3 rounded-lg transition-all">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Address: Parent's House */}
                                    <div className="address-card bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-3xl">family_history</span>
                                            </div>
                                            <div>
                                                <h3 className="font-headline-md text-headline-md text-on-surface">Parents</h3>
                                                <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Family Home</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3 mb-8">
                                            <div className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-outline text-lg mt-0.5">location_on</span>
                                                <p className="font-body-md text-body-md text-on-surface">Apartment 4, Building B, Yasmin District</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-outline text-lg mt-0.5">near_me</span>
                                                <p className="font-body-md text-body-md text-on-surface">Jeddah, Saudi Arabia</p>
                                            </div>
                                        </div>
                                        <div className="h-40 rounded-lg overflow-hidden relative mb-6">
                                            <div className="w-full h-full bg-surface-container" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3m7ccX7DlNbbLmP3O_yzJJ4MkHONoA5jbG4evKVNbPu68sXOQ2GonRC7T3oJzM5PjzhErOstpBdMQ-ePGgjTU9BJNgrg7kAJZ2iruWCleg81XawkzAx-C-zWFVwaI1Scmnc5azyVaOyq-iXbdN_2Pj6RYgIDhlWuVu75DHdZMytuv_-m5Qqi5q39mgUWpftR2PFh-Ug40QskkVim1xv0OSsGTVGdrPhSKIdafjEbzHpepslIT0AuxI39G1gGR6LyvPzu-0vxRAeid')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex-1 border border-outline-variant hover:bg-surface-container text-on-surface-variant font-label-md text-label-md py-3 rounded-lg transition-colors">Edit</button>
                                            <button className="px-4 border border-outline-variant hover:bg-error-container hover:text-error hover:border-error text-on-surface-variant font-label-md text-label-md py-3 rounded-lg transition-all">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Quick Help / Information Section */}
                                <section className="mt-8 bg-surface-container-low rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary shrink-0">
                                        <span className="material-symbols-outlined text-4xl">verified</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-headline-md text-primary mb-2">Verified Accuracy</h4>
                                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                                            Our system verifies every address to ensure our experts arrive on time. Having multiple addresses saved allows you to quickly manage maintenance for all your properties with a single click.
                                        </p>
                                    </div>
                                    <div className="md:ml-auto">
                                        <button className="text-primary font-bold font-label-md text-label-md flex items-center gap-1 hover:underline">
                                            Learn more about reliability
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}

                    {/* Content: Settings */}
                    {activeTab === "settings" && (
                        <div className="max-w-[1000px] mx-auto py-4">
                            <div className="grid grid-cols-1 gap-8">
                                {/* Account Settings Section (Bento Card) */}
                                <section className="bg-surface-container-low rounded-xl p-8 border border-outline-variant shadow-sm transition-all hover:shadow-md">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="material-symbols-outlined text-primary text-3xl">manage_accounts</span>
                                        <h3 className="font-headline-md text-headline-md">Account Settings</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Change Password</label>
                                            <div className="space-y-4">
                                                <div className="relative">
                                                    <input className="w-full bg-surface-container-lowest border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg py-3 px-4 text-body-md outline-none transition-all" placeholder="Current Password" type="password" />
                                                </div>
                                                <div className="relative">
                                                    <input className="w-full bg-surface-container-lowest border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg py-3 px-4 text-body-md outline-none transition-all" placeholder="New Password" type="password" />
                                                </div>
                                                <button className="bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary-container transition-colors active:scale-95">
                                                    Update Password
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-6 bg-surface-container-lowest rounded-xl border border-dashed border-outline">
                                            <div className="w-20 h-20 rounded-full bg-surface-variant flex items-center justify-center mb-4">
                                                <span className="material-symbols-outlined text-on-surface-variant text-4xl">shield</span>
                                            </div>
                                            <p className="text-body-md text-center text-on-surface-variant">Your account security is our priority. Enable two-factor authentication for added safety.</p>
                                            <a className="mt-4 text-primary font-label-md text-label-md hover:underline" href="#">Manage 2FA</a>
                                        </div>
                                    </div>
                                </section>
                                {/* Two-Column Layout for Notifications and Localization */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Notifications Section */}
                                    <section className="bg-surface-container-low rounded-xl p-8 border border-outline-variant shadow-sm flex flex-col">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="material-symbols-outlined text-primary text-3xl">notifications</span>
                                            <h3 className="font-headline-md text-headline-md">Notifications</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-label-md text-label-md">Email Notifications</p>
                                                    <p className="text-label-sm text-on-surface-variant">Order updates and invoices</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input defaultChecked className="sr-only toggle-switch" type="checkbox" />
                                                    <div className="w-11 h-6 bg-outline-variant rounded-full toggle-slider transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                                </label>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-label-md text-label-md">Push Notifications</p>
                                                    <p className="text-label-sm text-on-surface-variant">Real-time technician tracking</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input defaultChecked className="sr-only toggle-switch" type="checkbox" />
                                                    <div className="w-11 h-6 bg-outline-variant rounded-full toggle-slider transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                                </label>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-label-md text-label-md">Marketing & Offers</p>
                                                    <p className="text-label-sm text-on-surface-variant">Seasonal discounts and news</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input className="sr-only toggle-switch" type="checkbox" />
                                                    <div className="w-11 h-6 bg-outline-variant rounded-full toggle-slider transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </section>
                                    {/* Language & Currency Section */}
                                    <section className="bg-surface-container-low rounded-xl p-8 border border-outline-variant shadow-sm flex flex-col">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="material-symbols-outlined text-primary text-3xl">public</span>
                                            <h3 className="font-headline-md text-headline-md">Localization</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Display Language</label>
                                                <div className="relative">
                                                    <select className="w-full bg-surface-container-lowest border-outline-variant focus:border-primary focus:ring-0 rounded-lg py-3 px-4 pr-10 text-body-md outline-none appearance-none cursor-pointer">
                                                        <option>English (US)</option>
                                                        <option>Arabic (العربية)</option>
                                                        <option>French (Français)</option>
                                                        <option>Spanish (Español)</option>
                                                        <option>German (Deutsch)</option>
                                                        <option>Urdu (اردو)</option>
                                                        <option>Hindi (हिन्दी)</option>
                                                    </select>
                                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Preferred Currency</label>
                                                <div className="relative">
                                                    <select className="w-full bg-surface-container-lowest border-outline-variant focus:border-primary focus:ring-0 rounded-lg py-3 px-4 pr-10 text-body-md outline-none appearance-none cursor-pointer">
                                                        <option>Qatari Riyal (QAR)</option>
                                                        <option>Saudi Riyal (SAR)</option>
                                                        <option>UAE Dirham (AED)</option>
                                                        <option>US Dollar (USD)</option>
                                                        <option>Euro (EUR)</option>
                                                        <option>British Pound (GBP)</option>
                                                        <option>Kuwaiti Dinar (KWD)</option>
                                                        <option>Omani Rial (OMR)</option>
                                                        <option>Bahraini Dinar (BHD)</option>
                                                    </select>
                                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
                                                </div>
                                            </div>
                                            <div className="pt-4 mt-auto">
                                                <button className="w-full border-2 border-primary text-primary font-label-md text-label-md px-6 py-2 rounded-lg hover:bg-primary-container/10 transition-colors">
                                                    Save Preferences
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                {/* Danger Zone */}
                                <section className="bg-error-container/20 rounded-xl p-8 border border-error/20 flex justify-between items-center">
                                    <div>
                                        <h4 className="font-headline-md text-headline-md text-on-error-container">Deactivate Account</h4>
                                        <p className="text-body-md text-on-surface-variant">Temporarily disable your account and hide your profile.</p>
                                    </div>
                                    <button className="text-error font-label-md text-label-md px-6 py-3 border border-error rounded-lg hover:bg-error hover:text-white transition-all">
                                        Deactivate
                                    </button>
                                </section>
                            </div>
                        </div>
                    )}

                    {/* Content: Generic placeholder for bookings */}
                    {activeTab === "bookings" && (
                        <div className="space-y-6" id="content-bookings">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h1 className="font-headline-lg text-headline-lg text-on-surface">My Bookings</h1>
                                    <p className="text-on-surface-variant font-body-md text-body-md">Track and manage your maintenance service requests.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low">
                                        <span className="material-symbols-outlined">filter_list</span>
                                    </button>
                                    <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low">
                                        <span className="material-symbols-outlined">search</span>
                                    </button>
                                </div>
                            </div>
                            {/* Orders Bento Grid / List */}
                            <div className="grid grid-cols-1 gap-4">
                                {/* Order Card 1: In Progress */}
                                <div className="order-card bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row">
                                    <div className="w-full md:w-48 h-32 md:h-auto overflow-hidden">
                                        <img className="w-full h-full object-cover" alt="AC Deep Cleaning" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf5uA09_-fpQK3A4KcIV9bgGbPKrh867cLaT-5DsGwqEoGZgx0REw6jfiRFE0koAMYX4Gxtap7PaYx0Vsq1ilMWcK6KOHT7rhVQkt3btIuExZ-s1z5oUXH5-v3SygAlc43WqP2PU3tm_ab54Jf4Gu0sVgJnHm80OGM8FAL_Lsx9f16zPI0dMfoBwFItsoVDIHNpcmNqwTdTFKPxHOj6CzOAMP0kJc7K0ZATcvHB4oqpit8P2Ap-ef9YDkHlOLSvRi0S_2jl0ZhCyJE" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-headline-md text-headline-md text-primary">AC Deep Cleaning</h3>
                                                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm uppercase tracking-wider">In Progress</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                                Scheduled: Oct 24, 2024 • 10:00 AM
                                            </p>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">person_outline</span>
                                                Technician: Mohammad Salem
                                            </p>
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-all">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                {/* Order Card 2: Completed */}
                                <div className="order-card bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row">
                                    <div className="w-full md:w-48 h-32 md:h-auto overflow-hidden opacity-80">
                                        <img className="w-full h-full object-cover" alt="Plumbing Repair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnVeVvnmcsCIIpYvBXPthFhtBozBLm3poqt6l3pqil44eYBnHOsA7vilUxXbpw38a9XNnN9f98Vtweyb-xvbbeXSZxMHJI_lUHEt4d-IqfULPhUfxkI7RaHmEO4jawFuqSbTDueAx6cqkBj0Kw-0KVnYyxHOPFDRXD6vSpCjFXjynzWWnRJrtbihJ0IY4jnDRx3GkldvSx6woDj0ApQfJgCypeBmMmCOjB2y1EYplJ1rVepWD1JEgOuqwXAxodfJKC78tPgRC-op0" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-headline-md text-headline-md text-primary">Plumbing Repair</h3>
                                                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full font-label-sm text-label-sm uppercase tracking-wider">Completed</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                                Finished: Oct 18, 2024
                                            </p>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">person_outline</span>
                                                Technician: Khaled Ibrahim
                                            </p>
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-2.5 border-2 border-primary text-primary rounded-lg font-label-md hover:bg-surface-container-low transition-all">
                                            Rebook Service
                                        </button>
                                    </div>
                                </div>
                                {/* Order Card 3: Cancelled */}
                                <div className="order-card bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row opacity-70">
                                    <div className="w-full md:w-48 h-32 md:h-auto overflow-hidden grayscale">
                                        <img className="w-full h-full object-cover" alt="Electrical Inspection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1QDcmh7mXk4Xlz_1wrbbWDzI6U7ptRPRYG0ZMe5E6Tb2d0djzoi5-b8CQQeMtbKzqCXvb_VHxe-82Crm4iKTbUw-938-Z3hHcH1knYb8DRBWHxl9MGe7PugcogZjGUPsqtabJ4nZgR4BYBAdLeydhn-MVyz30LZorVSfHHHFBxyntgYHjRS3d_ySsZhfBV8DaJIeBrbH52bxz6VLvOkN4UZ0MJgqmF-p3hzo1XFMc7wlgdS0uPjLeR9hDcl2G6yC2kcAds8lW2QUz" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-headline-md text-headline-md text-on-surface-variant">Electrical Inspection</h3>
                                                <span className="px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm uppercase tracking-wider">Cancelled</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                                Date: Oct 12, 2024
                                            </p>
                                            <p className="text-on-surface-variant font-body-md text-body-md">Reason: Client Request</p>
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-2.5 border border-outline text-on-surface-variant rounded-lg font-label-md">
                                            View Logs
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 animate-in fade-in duration-300" onClick={handleBackdropClick}>
                    <div className="bg-surface-container-lowest w-full max-w-md rounded-[16px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)] border border-outline-variant overflow-hidden">
                        {/* Modal Header */}
                        <div className="p-8 pb-4 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-6 ring-8 ring-error-container/20">
                                <span className="material-symbols-outlined text-error text-[32px]">logout</span>
                            </div>
                            <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Log Out</h2>
                        </div>
                        {/* Modal Body */}
                        <div className="px-8 pb-8 text-center">
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Are you sure you want to log out of your <span className="font-bold text-primary">Syaanh</span> account? You will need to sign in again to manage your bookings and orders.
                            </p>
                        </div>
                        {/* Modal Actions */}
                        <div className="px-8 pb-8 flex flex-col gap-3">
                            <button
                                className="w-full bg-error text-on-error py-3.5 rounded-lg font-bold text-body-md shadow-sm hover:bg-error/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                            >
                                {isLoggingOut ? (
                                    <>
                                        <span className="animate-spin material-symbols-outlined">progress_activity</span>
                                        Logging out...
                                    </>
                                ) : (
                                    "Log Out"
                                )}
                            </button>
                            <button
                                className="w-full bg-transparent text-on-surface-variant border border-outline-variant py-3.5 rounded-lg font-bold text-body-md hover:bg-surface-container transition-all active:scale-[0.98]"
                                onClick={closeLogoutModal}
                            >
                                Stay Logged In
                            </button>
                        </div>
                        {/* Security Trust Indicator */}
                        <div className="bg-surface-container-low py-4 px-8 border-t border-outline-variant flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">shield</span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-75">Your session is secure</span>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default Profile;