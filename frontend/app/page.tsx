"use client";

import Footer from "./footer";
import NavBar from "./navBar";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
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
        setTimeout(() => setShowCursor(false), 1000);
      }
    }
  }, [displayedText, displayedHighlight, isTypingMain]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="flex justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
          <div className="flex flex-col gap-6 py-10 md:gap-8 md:flex-row items-center">
            <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 order-2 md:order-1 flex-1">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:leading-[1.1] min-h-[2.4em]">
                  {displayedText}
                  <span className="text-[#0ea5e9]">{displayedHighlight}</span>
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-[#0ea5e9] transition-opacity`}>|</span>
                </h1>
                <h2 className="text-[#94a3b8] text-base font-normal leading-relaxed max-w-md">
                  Sri Lanka's first smart subscription-based car wash service. Eco-friendly, on-demand, and convenient.
                </h2>
              </div>
              
              <label className="flex flex-col h-14 w-full max-w-[480px] md:h-16 shadow-lg shadow-black/20 rounded-xl">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-[#334155] focus-within:border-[#0ea5e9] transition-colors">
                  <div className="text-[#94a3b8] flex bg-[#1e293b] items-center justify-center pl-4 rounded-l-xl">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 bg-[#1e293b] placeholder:text-[#94a3b8]/50 px-4 text-sm font-normal md:text-base" 
                    placeholder="Enter your location in Sri Lanka" 
                  />
                  <div className="flex items-center justify-center rounded-r-xl bg-[#1e293b] pr-2">
                    <Link href="#subscription-plan">
                      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 md:h-12 bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] text-sm font-bold transition-all">
                        <span className="truncate">Get Started</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </label>
              
              <div className="flex gap-4 items-center mt-2">
                <div className="flex -space-x-3">
                  <div className="size-8 rounded-full border-2 border-[#0f172a] bg-gray-500"></div>
                  <div className="size-8 rounded-full border-2 border-[#0f172a] bg-gray-400"></div>
                  <div className="size-8 rounded-full border-2 border-[#0f172a] bg-gray-600"></div>
                  <div className="size-8 rounded-full border-2 border-[#0f172a] bg-[#1e293b] flex items-center justify-center text-[10px] text-white font-bold">
                    +500
                  </div>
                </div>
                <p className="text-sm text-[#94a3b8]">Trusted by 500+ car owners in Sri Lanka</p>
              </div>
            </div>
            
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl md:h-auto md:min-w-[400px] md:w-full order-1 md:order-2 shadow-2xl border border-[#334155] relative overflow-hidden group hero-back">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12">
        <div className="flex justify-center px-4 md:px-10">
          <div className="flex flex-col max-w-[1200px] flex-1">
            <h2 className="text-white text-3xl font-black mb-12 text-left">
              OUR SERVICES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <div className="service-display-card card-one flex items-end justify-center">
                <h3 className="relative text-white font-bold text-xl mb-4 z-10">Exterior Wash</h3>
              </div>
              
              <div className="service-display-card card-two flex items-end justify-center">
                <h3 className="relative text-white font-bold text-xl mb-4 z-10">Interior Cleaning</h3>
              </div>
              
              <div className="service-display-card card-three flex items-end justify-center">
                <h3 className="relative text-white font-bold text-xl mb-4 z-10">Full Detailing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="flex justify-center px-4 md:px-10">
          <div className="flex flex-col max-w-[1200px] flex-1">
            <h2 className="text-white text-3xl font-black mb-6 text-center">
              ABOUT WashXpress
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed max-w-3xl mx-auto text-center">
              WashXpress is Sri Lanka's first smart subscription-based car wash service, designed to bring convenience and efficiency to every vehicle owner. Our mission is to save you time while providing high-quality car care using modern technology. With flexible subscription plans and a team of skilled professionals, we ensure your car stays spotless, no matter how busy your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-[#1e293b]/30">
        <div className="flex justify-center px-4 md:px-10">
          <div className="flex flex-col max-w-[1200px] flex-1">
            <h2 className="text-white text-3xl font-black mb-12 text-center">
              HOW IT WORKS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center text-[#0f172a] font-black text-2xl">
                  1
                </div>
                <h3 className="text-white font-bold text-lg">Choose Your Plan</h3>
                <p className="text-[#94a3b8] text-sm">Select a subscription plan that fits your needs and budget.</p>
              </div>
              
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center text-[#0f172a] font-black text-2xl">
                  2
                </div>
                <h3 className="text-white font-bold text-lg">Schedule Your Wash</h3>
                <p className="text-[#94a3b8] text-sm">Book a convenient time through our app or website.</p>
              </div>
              
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center text-[#0f172a] font-black text-2xl">
                  3
                </div>
                <h3 className="text-white font-bold text-lg">Relax & Enjoy</h3>
                <p className="text-[#94a3b8] text-sm">Our team arrives and makes your car shine while you focus on your day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="subscription-plan" className="py-12">
        <div className="flex justify-center px-4 md:px-10">
          <div className="flex flex-col max-w-[1200px] flex-1">
            <h2 className="text-white text-3xl font-black mb-12 text-left">
              SUBSCRIPTION PLANS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {/* Basic Plan */}
              <div className="sub-display-card w-full max-w-[300px] h-[500px] bg-[#1e293b] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-2xl mb-6">Basic Plan</h3>
                  <div className="space-y-4 text-[#94a3b8]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>2 washes per month</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>Exterior only</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>Standard cleaning products</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-3xl font-bold mb-4">LKR 2,500<span className="text-[#94a3b8] text-sm font-normal">/month</span></p>
                  <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Premium Plan - Featured */}
              <div className="sub-display-card w-full max-w-[300px] h-[500px] bg-gradient-to-br from-[#0ea5e9]/20 to-[#1e293b] border-2 border-[#0ea5e9] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#0ea5e9] text-[#0f172a] px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-6">Premium Plan</h3>
                  <div className="space-y-4 text-[#94a3b8]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>4 washes per month</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>Exterior + Interior cleaning</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>Premium products</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>Priority scheduling</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-3xl font-bold mb-4">LKR 4,000<span className="text-[#94a3b8] text-sm font-normal">/month</span></p>
                  <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Elite Plan */}
              <div className="sub-display-card w-full max-w-[300px] h-[500px] bg-[#1e293b] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-2xl mb-6">Elite Plan</h3>
                  <div className="space-y-4 text-[#94a3b8]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>6 washes per month</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>All services included</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>Premium detailing products</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>VIP support</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-1">✓</span>
                      <p>Free wax treatment</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-3xl font-bold mb-4">LKR 6,000<span className="text-[#94a3b8] text-sm font-normal">/month</span></p>
                  <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer /> 
    </div>
  );
}
