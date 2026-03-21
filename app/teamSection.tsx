import Image from "next/image";

const teamMembers = [
  {
    name: "Lahiru Indrajith",
    role: "Full-Stack Developer",
    image: "/lahiru.jpg",
  },
  {
    name: "Nidula Ekanayake",
    role: "Full-Stack Developer",
    image: "/nidula.jpg?v=1",
  },
  {
    name: "Yasiru Anupama",
    role: "Full-Stack Developer",
    image: "/yasiru.png",
  },
  { name: "Kavindu Banuja", role: "Front-end Developer", image: "/banuja.jpg" },
  {
    name: "Chathil Karunarathne",
    role: "Front-end Developer",
    image: "/chathil.jpeg",
  },
  {
    name: "Bimsara Rathnayake",
    role: "Full-Stack Developer",
    image: "/bimsara.jpg",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-full max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-12 px-4 md:px-10">
            <span className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase">
              Our Experts
            </span>
            <h2 className="text-white text-3xl font-black mb-2 mt-2">
              MEET THE TEAM
            </h2>
            <p className="text-[#94a3b8] mt-2 max-w-2xl mx-auto">
              The passionate people behind your vehicle&apos;s showroom shine.
            </p>
          </div>

          {/* Scrolling Cards */}
          <div 
            className="w-full flex lg:justify-between overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-4 xl:gap-6 px-4 md:px-10 pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch"
          >
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex-shrink-0 lg:flex-1 snap-center flex flex-col items-center justify-between text-center group w-[260px] lg:w-[160px] xl:w-[180px] h-[320px] lg:h-[280px] xl:h-[300px] bg-[#1e293b] p-6 lg:p-4 xl:p-6 rounded-2xl border border-transparent hover:border-[#0ea5e9] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden mb-5 lg:mb-4 xl:mb-6 border-2 border-transparent group-hover:border-[#0ea5e9] transition-colors bg-[#0f172a] flex items-center justify-center relative">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-[#94a3b8] text-5xl lg:text-3xl xl:text-4xl">
                        person
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-xl lg:text-sm xl:text-base whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {member.name}
                  </h3>
                  <p className="text-[#0ea5e9] text-sm xl:text-sm lg:text-[11px] font-semibold mt-2 lg:mt-1 xl:mt-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
