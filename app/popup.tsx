"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: 1,
    title: "Choose Your Plan",
    description: "Select a subscription plan that fits your needs and budget.",
  },
  {
    number: 2,
    title: "Schedule Your Wash",
    description: "Book a convenient time through our app or website.",
  },
  {
    number: 3,
    title: "Relax & Enjoy",
    description:
      "Our team arrives and makes your car shine while you focus on your day.",
  },
];

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add delay based on index for sequential pop-up effect
            setTimeout(() => {
              setVisibleSteps((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }, index * 250);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.9 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-12 bg-[#1e293b]/30">
      <div className="flex justify-center px-4 md:px-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          <h2 className="text-white text-3xl font-black mb-12 text-center">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="flex flex-col items-center text-center gap-4"
                style={{
                  opacity: visibleSteps.includes(index) ? 1 : 0,
                  transform: visibleSteps.includes(index)
                    ? "translateY(0) scale(1)"
                    : "translateY(40px) scale(0.85)",
                  transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center text-[#0f172a] font-black text-2xl">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg">{step.title}</h3>
                <p className="text-[#94a3b8] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
