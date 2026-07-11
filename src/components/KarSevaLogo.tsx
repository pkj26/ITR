import React from 'react';

interface KarSevaLogoProps {
  className?: string;
  size?: number; // Size of the icon
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function KarSevaLogo({
  className = '',
  size = 44,
  showText = true,
  variant = 'light'
}: KarSevaLogoProps) {
  // Color configuration based on background (variant)
  // 'light' is for dark backgrounds (header, etc.) -> white/slate text & lines, orange accents
  // 'dark' is for light backgrounds (footer, white cards, etc.) -> navy text & lines, orange accents
  const primaryColor = variant === 'light' ? '#FFFFFF' : '#1D3557'; // Navy or White
  const orangeColor = '#FFB400'; // Warm Amber/Gold
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem SVG mimicking the high-quality vector paths of the PDF logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 overflow-visible transform hover:scale-105 transition-transform duration-300"
      >
        {/* Elegant top circular frame in orange/gold */}
        <path
          d="M18 45C18 27.3269 32.3269 13 50 13C67.6731 13 82 27.3269 82 45"
          stroke={orangeColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* --- Stylized "K" Letter & Happy Human --- */}

        {/* 1. Left Vertical Stem of K (Navy/White) */}
        {/* Has a smooth, curved leaf/serif style at the top and meets the hand at bottom */}
        <path
          d="M38 27C38 25 40 24 43 24C45 24 46 25 46 27V56C46 58 44 59 41 59C39 59 38 58 38 56V27Z"
          fill={primaryColor}
        />

        {/* 2. Bottom-Right Leg of K (Navy/White) */}
        <path
          d="M44 44C47.5 44 54 49.5 58 57C59 58.5 57 60 55 60C51 60 47.5 54 44 48V44Z"
          fill={primaryColor}
        />

        {/* 3. Orange Happy Human Figure (Top-Right Arm of K) */}
        {/* Torso & Head */}
        <circle cx="61" cy="22" r="5" fill={orangeColor} />
        {/* Reaching torso and limbs of the figure */}
        <path
          d="M44 43C47 40 54 33.5 58 27C59.5 25.5 61.5 27 60 29C56 35 51.5 42 45.5 45.5L44 43Z"
          fill={orangeColor}
        />
        {/* Upward/rightward hand of the human figure */}
        <path
          d="M58 28C60 27 64.5 25 69 23C70 24.5 68 27 63 30.5L58 28Z"
          fill={orangeColor}
        />

        {/* --- Cradling Hands at the Bottom --- */}

        {/* 1. Left Cradling Hand (Navy/White) */}
        <path
          d="M21 44C21 44 23 54.5 31.5 59.5C37 62.5 44.5 61 48 55.5C43 57 36 55.5 31.5 50.5C28.5 47 27 42.5 27 39.5C26 40.5 24.5 42 21 44Z"
          fill={primaryColor}
        />

        {/* 2. Right Cradling Hand (Orange/Gold) */}
        <path
          d="M79 44C79 44 77 54.5 68.5 59.5C63 62.5 55.5 61 52 55.5C57 57 64 55.5 68.5 50.5C71.5 47 73 42.5 73 39.5C74 40.5 75.5 42 79 44Z"
          fill={orangeColor}
        />
      </svg>

      {/* Brand typography exactly replicating the logo styling from the PDF */}
      {showText && (
        <div className="flex flex-col">
          {/* Logo Main Text */}
          <div className="flex items-baseline leading-none">
            {/* "कर" in beautiful Devanagari */}
            <span
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              className={`text-2xl font-black tracking-normal mr-[1px] ${
                variant === 'light' ? 'text-white' : 'text-[#1D3557]'
              }`}
            >
              कर
            </span>
            {/* "seva" in lowercase serif */}
            <span
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              className={`text-2xl font-medium tracking-tight ${
                variant === 'light' ? 'text-white' : 'text-[#1D3557]'
              }`}
            >
              seva
            </span>
            {/* Domain suffix ".in" */}
            <span className="text-xs font-black text-[#FFB400] ml-[2px]">
              .in
            </span>
          </div>

          {/* Thin separator line with golden-orange dot in the middle */}
          <div className="relative w-full h-[6px] my-[2px] flex items-center justify-center">
            {/* Horizontal line */}
            <div className={`w-full h-[1px] ${variant === 'light' ? 'bg-slate-500/50' : 'bg-slate-300'}`} />
            {/* Center Orange Dot */}
            <div className="absolute w-[4px] h-[4px] bg-[#FFB400] rounded-full" />
          </div>

          {/* Subtext tagline "WORK • WITH • PURPOSE" */}
          <span
            style={{ letterSpacing: '0.18em' }}
            className={`text-[7.5px] font-bold uppercase whitespace-nowrap text-center ${
              variant === 'light' ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            WORK • WITH • PURPOSE
          </span>
        </div>
      )}
    </div>
  );
}
