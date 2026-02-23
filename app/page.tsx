import Footer from "./footer";
import NavBar from "./navBar";
import TeamSection from "./teamSection";
import LocationSearch from "./LocationSearch";
import Link from "next/link";
import HowItWorks from "./popup";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="flex justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
          <div className="flex flex-col gap-6 py-10 md:gap-8 md:flex-row items-center">
            <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 order-2 md:order-1 flex-1">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:leading-[1.1]">
                  Showroom Shine, <span className="text-[#0ea5e9]">Right in Your Driveway.</span>
                </h1>
                <h2 className="text-[#94a3b8] text-base font-normal leading-relaxed max-w-md">
                  Sri Lanka's first smart subscription-based car wash service.
                </h2>
              </div>

              {/* ── Location search with district dropdown ── */}
              <LocationSearch />
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
            <h2 className="text-white text-3xl font-black mb-12 text-left">OUR SERVICES</h2>
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
            <h2 className="text-white text-3xl font-black mb-6 text-center">ABOUT WashXpress</h2>
            <p className="text-[#94a3b8] text-base leading-relaxed max-w-3xl mx-auto text-center">
              WashXpress is Sri Lanka's first smart subscription-based car wash service, designed to bring convenience and efficiency to every vehicle owner. Our mission is to save you time while providing high-quality car care using modern technology. With flexible subscription plans and a team of skilled professionals, we ensure your car stays spotless, no matter how busy your schedule.
            </p>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Choose Section */}
      <section className="py-12">
        <div className="flex justify-center px-4 md:px-10">
          <div className="flex flex-col max-w-[900px] flex-1 items-center text-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black flex flex-wrap justify-center gap-2">
              <span className="text-white">Why Choose</span>
              <span className="brand-animated">WashXpress</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              <strong className="text-white">Tired of wasting time in long car wash queues?</strong> With WashXpress, you can wash your car right at home! Sri Lanka’s first smart subscription-based car wash service offers flexible plans and professional care—bringing a fast, convenient, and premium car wash experience to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="subscription-plan" className="py-12">
        <div className="flex justify-center px-4 md:px-10">
          <div className="flex flex-col max-w-[1200px] flex-1">
            <h2 className="text-white text-3xl font-black mb-12 text-left">SUBSCRIPTION PLANS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {/* Basic Plan */}
              <div className="sub-display-card w-full max-w-[400px] md:max-w-[300px] h-auto min-h-[420px] md:h-[500px] bg-[#1e293b] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-2xl mb-6">Basic Plan</h3>
                  <div className="space-y-4 text-[#94a3b8]">
                    {["2 washes per month", "Exterior only", "Standard cleaning products"].map(f => (
                      <div key={f} className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-1">✓</span><p>{f}</p></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white text-3xl font-bold mb-4">LKR 2,500<span className="text-[#94a3b8] text-sm font-normal">/month</span></p>
                  <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">Subscribe</button>
                </div>
              </div>

              {/* Premium Plan - Featured */}
              <div className="sub-display-card popular-highlight w-full max-w-[400px] md:max-w-[300px] h-auto min-h-[420px] md:h-[500px] bg-gradient-to-br from-[#0ea5e9]/20 to-[#1e293b] border-2 border-[#0ea5e9] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#0ea5e9] text-[#0f172a] px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-6">Premium Plan</h3>
                  <div className="space-y-4 text-[#94a3b8]">
                    {["4 washes per month", "Exterior + Interior cleaning", "Premium products", "Priority scheduling"].map(f => (
                      <div key={f} className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-1">✓</span><p>{f}</p></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white text-3xl font-bold mb-4">LKR 4,000<span className="text-[#94a3b8] text-sm font-normal">/month</span></p>
                  <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">Subscribe</button>
                </div>
              </div>

              {/* Elite Plan */}
              <div className="sub-display-card w-full max-w-[400px] md:max-w-[300px] h-auto min-h-[420px] md:h-[500px] bg-[#1e293b] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-2xl mb-6">Elite Plan</h3>
                  <div className="space-y-4 text-[#94a3b8]">
                    {["6 washes per month", "All services included", "Premium detailing products", "VIP support", "Free wax treatment"].map(f => (
                      <div key={f} className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-1">✓</span><p>{f}</p></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white text-3xl font-bold mb-4">LKR 6,000<span className="text-[#94a3b8] text-sm font-normal">/month</span></p>
                  <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <TeamSection />

      <Footer />
    </div>
  );
}
