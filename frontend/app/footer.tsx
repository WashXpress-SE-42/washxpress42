import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-[#334155] pt-16 pb-8">
      <div className="flex justify-center px-4 md:px-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <div className="flex flex-col gap-4 max-w-xs">
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined text-[#0ea5e9] text-3xl">local_car_wash</span>
                <h3 className="text-xl font-bold">WashXpress</h3>
              </div>
              <p className="text-[#94a3b8] text-sm">
                Sri Lanka's first smart subscription-based car wash service. Fast, eco-friendly, and always at your service.
              </p>
            </div>
            
            <div className="flex gap-16 flex-wrap">
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
                <Link href="/" className="text-[#94a3b8] text-sm hover:text-[#0ea5e9] transition-colors">
                  Home
                </Link>
                <Link href="/#services" className="text-[#94a3b8] text-sm hover:text-[#0ea5e9] transition-colors">
                  Services
                </Link>
                <Link href="/#about" className="text-[#94a3b8] text-sm hover:text-[#0ea5e9] transition-colors">
                  About
                </Link>
                <Link href="/#subscription-plan" className="text-[#94a3b8] text-sm hover:text-[#0ea5e9] transition-colors">
                  Pricing Plans
                </Link>
              </div>
              
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Support</h4>
                <a className="text-[#94a3b8] text-sm hover:text-[#0ea5e9] transition-colors cursor-pointer">
                  Help Center
                </a>
                <a className="text-[#94a3b8] text-sm hover:text-[#0ea5e9] transition-colors cursor-pointer">
                  Terms of Service
                </a>
                <a className="text-[#94a3b8] text-sm hover:text-[#0ea5e9] transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </div>
              
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h4>
                <p className="text-[#94a3b8] text-sm">📍 Colombo, Sri Lanka</p>
                <p className="text-[#94a3b8] text-sm">📞 +94 77 123 4567</p>
                <p className="text-[#94a3b8] text-sm">📧 washxpress.lk@gmail.com</p>
                <div className="flex gap-3 mt-2">
                  <a className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:bg-[#0ea5e9] hover:text-[#0f172a] transition-all cursor-pointer" href="#">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:bg-[#0ea5e9] hover:text-[#0f172a] transition-all cursor-pointer" href="#">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94a3b8] text-xs">
              © {new Date().getFullYear()} WashXpress. All rights reserved.
            </p>
            <p className="text-[#94a3b8] text-xs">Designed for car lovers in Sri Lanka.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
