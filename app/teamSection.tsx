const teamMembers = [
  { name: "Lahiru Indrajith", role: "Full-Stack Developer" },
  { name: "Nidula Ekanayake", role: "Full-Stack Developer" },
  { name: "Yasiru Anupama", role: "Full-Stack Developer" },
  { name: "Kavindu Banuja", role: "Front-end Developer" },
  { name: "Chathil Karunathilake", role: "Front-end Developer" },
  { name: "Bimsara Rathnayake", role: "Full-Stack Developer" },
];

export default function TeamSection() {
  return (
    <section id="team" className="team-scroll-container">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="flex justify-center px-4 md:px-10 w-full">
          <div className="flex flex-col max-w-[1200px] flex-1">

            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase">
                Our Experts
              </span>
              <h2 className="text-white text-3xl font-black leading-tight mt-2">
                MEET THE TEAM
              </h2>
              <p className="text-[#94a3b8] mt-2">
                The passionate people behind your vehicle&apos;s showroom shine.
              </p>
            </div>

            {/* Scrolling Cards */}
            <div className="relative w-full max-h-[420px] overflow-y-auto team-mask">
              <div className="flex flex-col items-center gap-10 py-10 team-scroll-inner">
                {teamMembers.map((member, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center group w-full max-w-[260px]"
                  >
                    {/* Avatar placeholder */}
                    <div className="w-40 h-40 rounded-2xl overflow-hidden mb-4 border border-[#334155] group-hover:border-[#0ea5e9] transition-colors bg-[#1e293b] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#94a3b8] text-6xl">
                        person
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                    <p className="text-[#0ea5e9] text-sm font-medium mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
