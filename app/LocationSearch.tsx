"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const SL_DISTRICTS = [
  "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo",
  "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara",
  "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar",
  "Matale", "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya",
  "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya",
];

const AVAILABLE_DISTRICTS = ["Colombo"];

type Status = "idle" | "available" | "unavailable";

export default function LocationSearch() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter districts as user types
  useEffect(() => {
    if (query.trim().length === 0) {
      setFiltered(SL_DISTRICTS);
    } else {
      setFiltered(
        SL_DISTRICTS.filter((d) =>
          d.toLowerCase().startsWith(query.toLowerCase())
        )
      );
    }
    setDropdownIndex(-1);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(district: string) {
    setSelected(district);
    setQuery(district);
    setShowDropdown(false);
    setStatus("idle");
  }

  function handleGetStarted() {
    if (!selected) return;
    if (AVAILABLE_DISTRICTS.includes(selected)) {
      setStatus("available");
    } else {
      setStatus("unavailable");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setDropdownIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setDropdownIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && dropdownIndex >= 0) {
      e.preventDefault();
      handleSelect(filtered[dropdownIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  }

  const isReady = selected.length > 0;

  return (
    <div className="flex flex-col gap-3 w-full max-w-[480px]" ref={wrapperRef}>

      {/* ── Input row ── */}
      <div className="relative">
        <div className={`flex w-full items-stretch rounded-xl h-14 md:h-16 border transition-all duration-200 shadow-lg shadow-black/20
          ${showDropdown
            ? "border-[#0ea5e9] ring-2 ring-[#0ea5e9]/20"
            : "border-[#334155] hover:border-[#475569]"
          }`}
        >
          {/* Location icon */}
          <div className="flex bg-[#1e293b] items-center justify-center pl-4 rounded-l-xl">
            <span className={`material-symbols-outlined transition-colors duration-200 ${showDropdown ? "text-[#0ea5e9]" : "text-[#94a3b8]"}`}>
              location_on
            </span>
          </div>

          {/* Text input */}
          <input
            ref={inputRef}
            className="flex w-full min-w-0 flex-1 bg-[#1e293b] text-white placeholder:text-[#94a3b8]/50 px-3 text-sm md:text-base focus:outline-none"
            placeholder="Enter your district in Sri Lanka"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected("");
              setStatus("idle");
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />

          {/* Clear button */}
          {query.length > 0 && (
            <button
              className="flex items-center justify-center bg-[#1e293b] pr-2 text-[#475569] hover:text-[#94a3b8] transition-colors"
              onClick={() => {
                setQuery("");
                setSelected("");
                setStatus("idle");
                setShowDropdown(false);
                inputRef.current?.focus();
              }}
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}

          {/* Get Started button */}
          <div className="flex items-center justify-center rounded-r-xl bg-[#1e293b] pr-2">
            {isReady ? (
              <button
                onClick={handleGetStarted}
                className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 md:h-12 px-5 bg-[#0ea5e9] hover:bg-[#0284c7] text-[#0f172a] text-sm font-bold transition-all active:scale-95"
              >
                <span className="truncate">Get Started</span>
              </button>
            ) : (
              <Link href="#subscription-plan">
                <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 md:h-12 px-5 bg-[#1e3a4a] text-[#475569] text-sm font-bold cursor-not-allowed select-none">
                  <span className="truncate">Get Started</span>
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* ── Dropdown ── */}
        {showDropdown && filtered.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#1e293b] border border-[#334155] rounded-xl overflow-hidden shadow-2xl shadow-black/40 z-50 max-h-[260px] overflow-y-auto">
            {/* Header */}
            <div className="px-4 py-2 border-b border-[#334155]/60">

            </div>

            {filtered.map((district, i) => {
              const isAvailable = AVAILABLE_DISTRICTS.includes(district);
              const isHighlighted = i === dropdownIndex;
              return (
                <button
                  key={district}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-100
                    ${isHighlighted ? "bg-[#0ea5e9]/10" : "hover:bg-[#334155]/40"}
                  `}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelect(district);
                  }}
                  onMouseEnter={() => setDropdownIndex(i)}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined text-[16px] ${isAvailable ? "text-[#0ea5e9]" : "text-[#334155]"}`}>
                      {isAvailable ? "location_on" : "location_off"}
                    </span>
                    <span className={`text-sm font-medium ${isAvailable ? "text-white" : "text-[#64748b]"}`}>
                      {district}
                    </span>
                  </div>
                  {isAvailable && (
                    <span className="text-[10px] font-bold text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-0.5 rounded-full tracking-wider">
                      AVAILABLE
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Status banners ── */}

      {/* Available */}
      {status === "available" && (
        <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
          </div>
          <div>
            <p className="text-emerald-400 font-bold text-sm">
              We&apos;re in your area! 🎉
            </p>
            <p className="text-emerald-400/70 text-xs mt-0.5 leading-relaxed">
              WashXpress is available in <span className="font-semibold text-emerald-300">Colombo</span>. Choose a plan below and book your first wash today.
            </p>
            <Link href="#subscription-plan">
              <button className="mt-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors">
                View plans
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Unavailable */}
      {status === "unavailable" && (
        <div className="flex items-start gap-3 bg-[#1e293b] border border-[#334155] rounded-xl px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">schedule</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">
              Coming soon to {selected}
            </p>
            <p className="text-[#94a3b8] text-xs mt-0.5 leading-relaxed">
              We&apos;re expanding fast across Sri Lanka. Be the first to know when WashXpress arrives in your district.
            </p>
            <button className="mt-2 text-xs font-bold text-[#0ea5e9] hover:text-[#38bdf8] flex items-center gap-1 transition-colors">
              Notify me when available
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
