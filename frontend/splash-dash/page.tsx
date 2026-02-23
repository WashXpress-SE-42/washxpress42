"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const metadata = {
  title: "WashXpress",
  description: "Showroom shine, right in your driveway.",
};

export default function SplashDashPage() {
  const fullText = "Showroom Shine, ";
  const highlightText = "Right in Your Driveway.";
  const [displayedText, setDisplayedText] = useState("");
  const [displayedHighlight, setDisplayedHighlight] = useState("");
  const [isTypingMain, setIsTypingMain] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isTypingMain) {
      if (displayedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setIsTypingMain(false);
      }
    } else {
      if (displayedHighlight.length < highlightText.length) {
        const timeout = setTimeout(() => {
          setDisplayedHighlight(highlightText.slice(0, displayedHighlight.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Stop cursor blinking after typing is done
        setTimeout(() => setShowCursor(false), 1000);
      }
    }
  }, [displayedText, displayedHighlight, isTypingMain]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);
  // This page is a React/Next.js version of the HTML you shared.
  // It uses project Tailwind (not CDN) and a small Tailwind config extension (see tailwind.config.js).
  return (
    <div className="dark font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Top Nav */}
        <div className="w-full border-b border-border-dark bg-background-dark/95 backdrop-blur-sm sticky top-0 z-50">
          <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10 py-3">
            <header className="flex items-center justify-between whitespace-nowrap">
              <div className="flex items-center gap-4 text-white">
                <div className="size-8 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">local_car_wash</span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Splash &amp; Dash
                </h2>
              </div>

              <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a
                    className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#how-it-works"
                  >
                    How it Works
                  </a>
                  <a
                    className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                  <a
                    className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#reviews"
                  >
                    Reviews
                  </a>
                </div>

                <div className="flex gap-2">
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-border-dark hover:bg-slate-600 text-white text-sm font-bold transition-all">
                    <span className="truncate">Login</span>
                  </button>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-[#0284c7] text-[#0f172a] text-sm font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                    <span className="truncate">Sign Up</span>
                  </button>
                </div>
              </div>

              <button className="md:hidden text-white" aria-label="Open menu">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </header>
          </div>
        </div>

        {/* Hero */}
        <div className="flex flex-col justify-center py-5">
          <div className="flex justify-center px-4 md:px-10">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-col gap-6 py-10 md:gap-8 md:flex-row items-center">
                <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 order-2 md:order-1 flex-1">
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] md:leading-[1.1] min-h-[2.4em]">
                      {displayedText}
                      <span className="text-primary">{displayedHighlight}</span>
                      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-primary transition-opacity`}>|</span>
                    </h1>
                    <h2 className="text-text-secondary text-base font-normal leading-relaxed max-w-md">
                      The mobile car wash subscription that saves you time and keeps your ride pristine.
                      Eco-friendly, on-demand, and contact-free.
                    </h2>
                  </div>

                  <label className="flex flex-col h-14 md:h-16 w-full max-w-[480px] shadow-lg shadow-black/20 rounded-xl">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-border-dark focus-within:border-primary transition-colors">
                      <div className="text-text-secondary flex bg-surface-dark items-center justify-center pl-4 rounded-l-xl">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <input
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 bg-surface-dark placeholder:text-text-secondary/50 px-4 text-sm md:text-base"
                        placeholder="Enter your zip code"
                        defaultValue=""
                      />
                      <div className="flex items-center justify-center rounded-r-xl bg-surface-dark pr-2">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 md:h-12 px-6 bg-primary hover:bg-[#0284c7] text-[#0f172a] text-sm font-bold transition-all">
                          <span className="truncate">Get Started</span>
                        </button>
                      </div>
                    </div>
                  </label>

                  <div className="flex gap-4 items-center mt-2">
                    <div className="flex -space-x-3">
                      <div
                        className="size-8 rounded-full border-2 border-background-dark bg-gray-500 bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4Hu4671VuEe2HIkW3Jjnbhao8QSdSWWcuysVHKGb4a__acgvCJjZyEsVozeoCdOLkmcsFcePz0-cdLYCNT45OJI_tl0FmnaZkBs4T7ONPzOUGMHcbgny-Y45TBKPqM538hwAwjGMERFfUpJyjU3_K0--jLzRg548fGqjL3ZNWWUumaMDaDm3CVBmSiOieyjdjdAcCVOXI7xWHz8dJaLgnz6mXv2hlWB97JN-3Go38xhupwqIehYDdjc_Ia9Y3GQLnFR9sz1S9nfM")',
                        }}
                      />
                      <div
                        className="size-8 rounded-full border-2 border-background-dark bg-gray-500 bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFTMxtbacM87GKWbD2NznDIu0Q-7vaWRV9NlzSHq_Thqr7P-r4suO8b1TrquQPexUqMP2aKr-owg-2-oTee8Zg8e8PvhrZdmJnLSaFlx3KjycS7_6z5DlleglUZ9Sx5DobhZqyKrp4ul_D2z2yNIf5htAV1dRn40IhY_35fl2rUklKoQq1rqmvUYJDlJH47lAtAPJOK8SSlohkd4omspkoIN1XEJ7bvytHxak8LbrtzKGnZeVlhsBRIYPrV76cUJQFkzTPhTDfDr4")',
                        }}
                      />
                      <div
                        className="size-8 rounded-full border-2 border-background-dark bg-gray-500 bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyFe16O0aDkhBARi6mx-FSdjvtlehPtbl4qeQ9FO2pDI7hDmixjpfTgF0gJxIKcEWXtIfOUMFoUr2dT2bLF0i0dOGof27XiCKILaq1vOqD71_sE6DSE3BC4JlHxejhIRLBEcpQLlmeSxtIzmOottE13sadZDDLUlzc-m0s0F394D6-oHj8Cl4y3Gqxj5_uYaSOlZfVE13JVQDSXoUm-ZvnT8CyUMZ8l965Xr0VPkfYQCu0XSMCqJ312OxbEtgdb9pSlpsyuJOqv8U")',
                        }}
                      />
                      <div className="size-8 rounded-full border-2 border-background-dark bg-surface-dark flex items-center justify-center text-[10px] text-white font-bold">
                        +2k
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">Trusted by 2,000+ car owners</p>
                  </div>

                  <div className="text-xs text-text-secondary">
                    Want the WashXpress site instead?{" "}
                    <Link href="/" className="text-primary hover:underline">
                      Go to WashXpress
                    </Link>
                  </div>
                </div>

                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl md:min-w-[400px] md:w-full order-1 md:order-2 shadow-2xl border border-border-dark relative overflow-hidden"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDf3V9v1e0xrL2E06HfEQ6Zjm8VuPIV-lItjtmFraexIg-BjD47AIzRzfXQ78h9huwhc3r4I44Nac5EzXnIbEvNErNAm8r7RnB3HI7--nX5EZS3l35EWHDkqFZtYHE6L0OAJOPKgTNgVVomPwKpGzcCzfH8CXKOaGCyohtAMc_OVB_Z9kNc1eA1NCCNKFwA42hSSUFZXmWImsRosh8Qg1grG4m_dcWtTuXBUr7XTPW4r2Os385HFhSljjrm8JZfoEJOEGCSogpz2I8")',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hidden md:flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                    <div>
                      <p className="text-white font-bold text-sm">Premium Wash Completed</p>
                      <p className="text-xs text-text-secondary">2 mins ago in Austin, TX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="flex flex-col justify-center py-10 bg-surface-dark/30 border-y border-border-dark" id="how-it-works">
          <div className="flex justify-center px-4 md:px-10">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-4 text-center items-center">
                  <span className="text-primary font-bold tracking-wider text-sm uppercase">Easy Process</span>
                  <h2 className="text-white tracking-light text-[32px] md:text-4xl font-bold leading-tight max-w-[720px]">
                    Effortless Shine in 3 Steps
                  </h2>
                  <p className="text-text-secondary text-base font-normal leading-normal max-w-[500px]">
                    We handle the dirty work while you relax. Here is why thousands of car owners trust us with their rides.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-1 gap-6 rounded-2xl border border-border-dark bg-surface-dark p-6 flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-xl font-bold leading-tight">We Come to You</h3>
                      <p className="text-text-secondary text-base font-normal leading-relaxed">
                        Book a time in our app and we arrive at your driveway or office. No more waiting in lines.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 gap-6 rounded-2xl border border-border-dark bg-surface-dark p-6 flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">eco</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-xl font-bold leading-tight">Eco-Friendly Tech</h3>
                      <p className="text-text-secondary text-base font-normal leading-relaxed">
                        Our water-saving technology uses less than a gallon per wash, saving the planet one car at a time.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 gap-6 rounded-2xl border border-border-dark bg-surface-dark p-6 flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">calendar_month</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-xl font-bold leading-tight">Monthly Flexibility</h3>
                      <p className="text-text-secondary text-base font-normal leading-relaxed">
                        Pause or cancel your subscription anytime with zero fees. You are in full control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex flex-col justify-center py-16" id="pricing">
          <div className="flex justify-center px-4 md:px-10">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="text-center mb-12">
                <h2 className="text-white text-[32px] font-bold leading-tight tracking-[-0.015em] pb-3">Choose Your Tier</h2>
                <p className="text-text-secondary">Simple pricing. No hidden fees. Cancel anytime.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Cruiser */}
                <div className="flex flex-col p-6 rounded-2xl border border-border-dark bg-surface-dark/50 gap-6">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">Cruiser</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">$29</span>
                      <span className="text-text-secondary">/mo</span>
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Perfect for the casual driver.</p>
                  </div>
                  <button className="w-full py-3 px-4 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-background-dark transition-colors">
                    Select Plan
                  </button>
                  <ul className="flex flex-col gap-3">
                    {[
                      "1 Exterior Hand Wash",
                      "Tire Shine",
                      "Window Cleaning (Ext)",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-white">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sport */}
                <div className="flex flex-col p-6 rounded-2xl border-2 border-primary bg-surface-dark gap-6 relative shadow-[0_0_30px_rgba(14,165,233,0.1)] md:-translate-y-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">Sport</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">$49</span>
                      <span className="text-text-secondary">/mo</span>
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Our best-selling package.</p>
                  </div>
                  <button className="w-full py-3 px-4 rounded-full bg-primary text-[#0f172a] font-bold hover:bg-[#0284c7] transition-colors shadow-lg shadow-primary/20">
                    Select Plan
                  </button>
                  <ul className="flex flex-col gap-3">
                    {[
                      "2 Full Washes",
                      "Interior Vacuum",
                      "Dashboard Wipe Down",
                      "Rim Detailing",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-white">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exotic */}
                <div className="flex flex-col p-6 rounded-2xl border border-border-dark bg-surface-dark/50 gap-6">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">Exotic</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">$79</span>
                      <span className="text-text-secondary">/mo</span>
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Showroom quality, always.</p>
                  </div>
                  <button className="w-full py-3 px-4 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-background-dark transition-colors">
                    Select Plan
                  </button>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Unlimited Washes",
                      "Full Interior Detail",
                      "Leather Conditioning",
                      "Priority Booking",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-white">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="flex flex-col justify-center py-16 bg-surface-dark/30 border-t border-border-dark" id="reviews">
          <div className="flex justify-center px-4 md:px-10">
            <div className="flex flex-col max-w-[960px] flex-1">
              <h2 className="text-white text-[28px] font-bold leading-tight text-center mb-10">Drivers Love Us</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    quote:
                      '"I used to spend hours on weekends washing my truck. Now I just tap a button and it\'s done while I\'m at work. Absolute game changer."',
                    name: "Michael R.",
                    location: "Dallas, TX",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu3dUuU4azwe0SIXKd0QkPSeBvPpZP_AEZO1DUI4tsxEW3futHMxHJQXfX_aKUmwIrsArqOheqN0bYHxnCbBkOJ-KFvs1ZfOY_olyv4vTU89gx6VY2yxXe14-YVICa2RDFZONrQdvyndxg4Pj57nbUwVs0XP0PTe2ZrJcE-1lPPudvDIgfiUYuu6h6SnxOq6RNuLpvcKmkbL7qa9hOGnSMYkpNj1fQcT06sELKKHz-_YpJ70rTsADjAZAuJj-fBUsKuu7-snLoRfM",
                  },
                  {
                    quote:
                      '"The eco-friendly aspect was huge for me. My car looks brand new and I don\'t feel guilty about water usage. Highly recommend the Sport plan."',
                    name: "Sarah L.",
                    location: "Austin, TX",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDZe7jGRC8oIc4z48Xq6ghyjlyWnmJkc5eYvDFFEnGhZeHz2eMGo5ZcR3FrYp5_MqrVy87NMmbOtOlSglMxKuWT4IglnPF3JiRQQ8vQNDP2LUJqGk_vTYeCAZn4SbJM6NoyN4whmj45hr6NsDP1HYh8n5vm_sybZFDjjohJ_c5SxYDj1FLBoYmd2eIoiSVZTAQyDjhFVS-fdheLLOsreAai4SykML6LgCS_kXJxmXqbUplPoh66Rk3UcNzX4uzjxgzzhPiZ5yEYOA",
                  },
                  {
                    quote:
                      '"Super convenient and professional. They show up on time, communicate well, and my Tesla has never looked better. Worth every penny."',
                    name: "David K.",
                    location: "San Jose, CA",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZEiOltmMHZHCDU5aXXrkNueZOR7XmMS3XrsbsOD0E0pcA-bBcTP0aq8bYmeNs5Vh7U8kIO06qLi3mV8WWIkqhIx1mfdi_MrMKzt4R7_yfR7rYivmyyHN2ugDK6lZqxq5GJCvAjwh5rSvDRf6zhKXMul5rS8p6PuvkfxO10sOtTYhK7g99mJU4LMD01FlCOZR0zLdG36Jta2ZxV94c4GGGq6AAFIO6oNmnSogEo2a-trlfLGY8Moepu5le8makxIOFaMfgpo7tkvs",
                  },
                ].map((r) => (
                  <div key={r.name} className="bg-background-dark p-6 rounded-2xl border border-border-dark flex flex-col gap-4">
                    <div className="flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-white text-sm leading-relaxed">{r.quote}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div
                        className="w-10 h-10 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url("${r.img}")` }}
                      />
                      <div>
                        <p className="text-white text-sm font-bold">{r.name}</p>
                        <p className="text-text-secondary text-xs">{r.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-background-dark border-t border-border-dark pt-16 pb-8">
          <div className="flex justify-center px-4 md:px-10">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
                <div className="flex flex-col gap-4 max-w-xs">
                  <div className="flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-primary text-3xl">local_car_wash</span>
                    <h3 className="text-xl font-bold">Splash &amp; Dash</h3>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Reinventing car care for the modern driver. Fast, eco-friendly, and always at your service.
                  </p>
                </div>

                <div className="flex gap-16 flex-wrap">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
                    {[
                      "About Us",
                      "Careers",
                      "Press",
                    ].map((t) => (
                      <a key={t} className="text-text-secondary text-sm hover:text-primary transition-colors" href="#">
                        {t}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">Support</h4>
                    {[
                      "Help Center",
                      "Terms of Service",
                      "Privacy Policy",
                    ].map((t) => (
                      <a key={t} className="text-text-secondary text-sm hover:text-primary transition-colors" href="#">
                        {t}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">Social</h4>
                    <div className="flex gap-3">
                      {/* Icons are inline SVG, same as your HTML */}
                      <a
                        className="w-8 h-8 rounded-full bg-surface-dark flex items-center justify-center text-text-secondary hover:bg-primary hover:text-background-dark transition-all"
                        href="#"
                        aria-label="Twitter"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a
                        className="w-8 h-8 rounded-full bg-surface-dark flex items-center justify-center text-text-secondary hover:bg-primary hover:text-background-dark transition-all"
                        href="https://www.instagram.com/washxpress_lk?igsh=MTE3MGZxOXR1N2k3cA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-text-secondary text-xs">© 2024 Splash &amp; Dash. All rights reserved.</p>
                <p className="text-text-secondary text-xs">Designed for car lovers.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <button
            className="w-14 h-14 rounded-full bg-primary text-[#0f172a] shadow-lg flex items-center justify-center"
            aria-label="Book"
          >
            <span className="material-symbols-outlined text-3xl">calendar_month</span>
          </button>
        </div>
      </div>
    </div>
  );
}
