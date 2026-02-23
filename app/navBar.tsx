"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

<<<<<<< HEAD
=======
  const closeMenu = () => setMenuOpen(false);
  
>>>>>>> origin/main
  return (
    <nav className="w-full border-b border-[#334155] bg-[#0f172a]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="px-4 md:px-10 py-3 max-w-[1200px] mx-auto">
        <header className="flex items-center justify-between whitespace-nowrap">
          <Link href="/">
            <Image
              src="/WashXpress_logo.svg"
              alt="WashXpress"
              width={200}
              height={50}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                href="/"
                className="text-white text-sm font-medium leading-normal hover:text-[#0ea5e9] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-white text-sm font-medium leading-normal hover:text-[#0ea5e9] transition-colors"
                onClick={(e) => handleScroll(e, "services")}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-white text-sm font-medium leading-normal hover:text-[#0ea5e9] transition-colors"
                onClick={(e) => handleScroll(e, "about")}
              >
                About
              </Link>
              <Link
                href="/#team"
                className="text-white text-sm font-medium leading-normal hover:text-[#0ea5e9] transition-colors"
                onClick={(e) => handleScroll(e, "team")}
              >
                Team
              </Link>
              <Link
                href="/#subscription-plan"
                className="text-white text-sm font-medium leading-normal hover:text-[#0ea5e9] transition-colors"
                onClick={(e) => handleScroll(e, "subscription-plan")}
              >
                Pricing
              </Link>
            </div>
            <div className="flex gap-2">
              <Link href="/contact">
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#334155] hover:bg-slate-600 text-white text-sm font-bold transition-all">
                  <span className="truncate">Contact</span>
                </button>
              </Link>
              <Link href="/#subscription-plan" onClick={(e) => handleScroll(e, "subscription-plan")}>
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] text-sm font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                  <span className="truncate">Get Started</span>
                </button>
              </Link>
            </div>
          </div>
<<<<<<< HEAD

          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
=======
          
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
>>>>>>> origin/main
          </button>
        </header>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2 border-t border-[#334155] bg-[#0f172a]/95 backdrop-blur-sm">
          <Link
            href="/"
            className="text-white text-sm font-medium py-2 hover:text-[#0ea5e9] transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-white text-sm font-medium py-2 hover:text-[#0ea5e9] transition-colors"
            onClick={(e) => handleScroll(e, "services")}
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="text-white text-sm font-medium py-2 hover:text-[#0ea5e9] transition-colors"
            onClick={(e) => handleScroll(e, "about")}
          >
            About
          </Link>
          <Link
            href="/#subscription-plan"
            className="text-white text-sm font-medium py-2 hover:text-[#0ea5e9] transition-colors"
            onClick={(e) => handleScroll(e, "subscription-plan")}
          >
            Pricing
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            <Link href="/contact" onClick={closeMenu}>
              <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#334155] hover:bg-slate-600 text-white text-sm font-bold transition-all">
                Contact
              </button>
            </Link>
            <Link href="/#subscription-plan" onClick={(e) => handleScroll(e, "subscription-plan")}>
              <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] text-sm font-bold transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
