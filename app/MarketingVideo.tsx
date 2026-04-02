export default function MarketingVideo() {
  const videoLink = "https://youtu.be/suEf_jYpuE8";

  return (
    <section className="py-12">
      <div className="flex justify-center px-4 md:px-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          <h2 className="text-white text-3xl font-black mb-8 text-center">
            See <span className="text-[#0ea5e9]">WashXpress</span> in Action
          </h2>
          <div className="relative w-full max-w-[900px] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            {/* Video Thumbnail Image */}
            <img
              src="/WashXpress_cover.png"
              alt="WashXpress Marketing Video"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

            {/* Play Button */}
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-[#0ea5e9] hover:bg-[#0284c7] rounded-full p-6 transition-all duration-300 group-hover:scale-110 shadow-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl border border-[#0ea5e9] pointer-events-none"></div>
          </div>

          <p className="text-[#94a3b8] text-center mt-6 max-w-2xl mx-auto">
            Watch how WashXpress brings showroom-quality car care right to your doorstep. Join Sri Lanka's first subscription-based on-demand car wash service.
          </p>
        </div>
      </div>
    </section>
  );
}
