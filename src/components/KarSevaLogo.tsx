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
  // 'light' is for dark backgrounds (header, etc.) -> white text & lines, orange accents
  // 'dark' is for light backgrounds (footer, white cards, etc.) -> navy text & lines, orange accents
  const primaryColor = variant === 'light' ? '#FFFFFF' : '#0B3D5C'; // Navy or White
  const orangeColor = '#E8891A'; // Exact orange from user's brand logo
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem SVG from the exact SVG vector path provided by the user */}
      <svg
        width={size}
        height={(size * 336) / 407} // Maintain exact aspect ratio of 407:336
        viewBox="0 0 407 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 overflow-visible transform hover:scale-105 transition-transform duration-300"
      >
        {/* Orange Parts (Circle frame, happy human, right cradling hand) */}
        <path 
          d="M 344.0,228.0 L 343.0,228.0 L 335.0,236.0 L 335.0,237.0 L 330.0,242.0 L 330.0,243.0 L 326.0,247.0 L 322.0,253.0 L 305.0,270.0 L 293.0,277.0 L 291.0,277.0 L 287.0,279.0 L 284.0,279.0 L 283.0,280.0 L 279.0,280.0 L 278.0,281.0 L 271.0,281.0 L 270.0,282.0 L 265.0,282.0 L 264.0,281.0 L 264.0,279.0 L 270.0,274.0 L 274.0,272.0 L 276.0,272.0 L 281.0,269.0 L 283.0,269.0 L 293.0,263.0 L 296.0,259.0 L 296.0,254.0 L 293.0,252.0 L 288.0,252.0 L 285.0,254.0 L 280.0,255.0 L 275.0,258.0 L 270.0,259.0 L 267.0,261.0 L 247.0,267.0 L 234.0,274.0 L 225.0,282.0 L 217.0,294.0 L 217.0,296.0 L 215.0,299.0 L 215.0,301.0 L 213.0,305.0 L 213.0,308.0 L 212.0,309.0 L 211.0,319.0 L 210.0,320.0 L 210.0,328.0 L 219.0,322.0 L 225.0,319.0 L 227.0,319.0 L 230.0,317.0 L 232.0,317.0 L 236.0,315.0 L 239.0,315.0 L 240.0,314.0 L 243.0,314.0 L 244.0,313.0 L 247.0,313.0 L 248.0,312.0 L 252.0,312.0 L 253.0,311.0 L 257.0,311.0 L 258.0,310.0 L 262.0,310.0 L 263.0,309.0 L 267.0,309.0 L 268.0,308.0 L 272.0,308.0 L 273.0,307.0 L 276.0,307.0 L 280.0,305.0 L 283.0,305.0 L 301.0,296.0 L 317.0,281.0 L 317.0,280.0 L 321.0,276.0 L 327.0,267.0 L 333.0,255.0 L 335.0,253.0 L 338.0,247.0 L 338.0,245.0 L 342.0,238.0 L 342.0,236.0 L 344.0,232.0 Z M 301.0,91.0 L 291.0,91.0 L 290.0,92.0 L 285.0,92.0 L 284.0,93.0 L 277.0,94.0 L 276.0,95.0 L 268.0,97.0 L 263.0,100.0 L 261.0,100.0 L 255.0,103.0 L 253.0,105.0 L 250.0,106.0 L 248.0,108.0 L 242.0,111.0 L 234.0,118.0 L 233.0,118.0 L 208.0,142.0 L 206.0,142.0 L 198.0,129.0 L 183.0,113.0 L 182.0,113.0 L 179.0,110.0 L 178.0,110.0 L 173.0,106.0 L 170.0,106.0 L 175.0,115.0 L 176.0,121.0 L 178.0,125.0 L 178.0,129.0 L 179.0,130.0 L 179.0,134.0 L 180.0,135.0 L 180.0,144.0 L 181.0,145.0 L 181.0,156.0 L 180.0,157.0 L 180.0,164.0 L 179.0,165.0 L 178.0,173.0 L 175.0,179.0 L 175.0,182.0 L 181.0,179.0 L 184.0,179.0 L 185.0,178.0 L 190.0,178.0 L 191.0,177.0 L 201.0,178.0 L 207.0,181.0 L 291.0,97.0 L 292.0,97.0 L 294.0,95.0 Z M 209.0,77.0 L 208.0,78.0 L 206.0,78.0 L 205.0,79.0 L 203.0,79.0 L 201.0,81.0 L 200.0,81.0 L 198.0,83.0 L 198.0,84.0 L 196.0,86.0 L 196.0,87.0 L 195.0,88.0 L 195.0,89.0 L 194.0,90.0 L 194.0,93.0 L 193.0,94.0 L 193.0,96.0 L 194.0,97.0 L 194.0,101.0 L 195.0,102.0 L 195.0,104.0 L 197.0,106.0 L 197.0,107.0 L 201.0,111.0 L 202.0,111.0 L 203.0,112.0 L 204.0,112.0 L 205.0,113.0 L 207.0,113.0 L 208.0,114.0 L 216.0,114.0 L 217.0,113.0 L 219.0,113.0 L 220.0,112.0 L 221.0,112.0 L 223.0,110.0 L 224.0,110.0 L 226.0,108.0 L 226.0,107.0 L 228.0,105.0 L 228.0,104.0 L 229.0,103.0 L 229.0,101.0 L 230.0,100.0 L 230.0,90.0 L 229.0,89.0 L 229.0,88.0 L 228.0,87.0 L 228.0,86.0 L 226.0,84.0 L 226.0,83.0 L 224.0,81.0 L 223.0,81.0 L 222.0,80.0 L 221.0,80.0 L 220.0,79.0 L 219.0,79.0 L 218.0,78.0 L 216.0,78.0 L 215.0,77.0 Z M 67.0,132.0 L 64.0,152.0 L 64.0,173.0 L 69.0,199.0 L 66.0,180.0 L 66.0,158.0 L 70.0,135.0 L 77.0,114.0 L 86.0,96.0 L 103.0,73.0 L 115.0,61.0 L 135.0,46.0 L 167.0,31.0 L 201.0,24.0 L 239.0,26.0 L 264.0,33.0 L 288.0,45.0 L 307.0,59.0 L 330.0,84.0 L 342.0,104.0 L 352.0,131.0 L 356.0,154.0 L 356.0,177.0 L 353.0,195.0 L 358.0,167.0 L 355.0,129.0 L 347.0,104.0 L 332.0,77.0 L 312.0,54.0 L 293.0,39.0 L 264.0,24.0 L 239.0,17.0 L 202.0,15.0 L 177.0,19.0 L 149.0,29.0 L 124.0,44.0 L 102.0,64.0 L 88.0,82.0 L 74.0,109.0 Z" 
          fill={orangeColor} 
          fillRule="evenodd"
        />
        {/* Navy/White Parts ('K' letterform stem, diagonal leg, left cradling hand) */}
        <path 
          d="M 75.0,228.0 L 75.0,233.0 L 76.0,234.0 L 77.0,239.0 L 89.0,265.0 L 101.0,283.0 L 110.0,292.0 L 111.0,292.0 L 120.0,299.0 L 133.0,305.0 L 136.0,305.0 L 137.0,306.0 L 143.0,307.0 L 144.0,308.0 L 147.0,308.0 L 148.0,309.0 L 158.0,310.0 L 159.0,311.0 L 163.0,311.0 L 164.0,312.0 L 168.0,312.0 L 169.0,313.0 L 176.0,314.0 L 177.0,315.0 L 188.0,318.0 L 205.0,327.0 L 205.0,315.0 L 204.0,314.0 L 203.0,306.0 L 202.0,305.0 L 201.0,300.0 L 199.0,297.0 L 199.0,295.0 L 193.0,285.0 L 182.0,274.0 L 166.0,266.0 L 154.0,263.0 L 151.0,261.0 L 143.0,259.0 L 140.0,257.0 L 138.0,257.0 L 133.0,254.0 L 131.0,254.0 L 127.0,252.0 L 122.0,252.0 L 120.0,254.0 L 119.0,258.0 L 124.0,264.0 L 135.0,270.0 L 137.0,270.0 L 147.0,275.0 L 152.0,279.0 L 152.0,281.0 L 151.0,282.0 L 137.0,281.0 L 136.0,280.0 L 132.0,280.0 L 131.0,279.0 L 123.0,277.0 L 114.0,272.0 L 104.0,263.0 L 104.0,262.0 L 93.0,250.0 L 82.0,234.0 L 76.0,228.0 Z M 113.0,91.0 L 120.0,99.0 L 123.0,107.0 L 123.0,245.0 L 130.0,246.0 L 149.0,254.0 L 157.0,256.0 L 156.0,254.0 L 157.0,250.0 L 157.0,218.0 L 169.0,206.0 L 179.0,205.0 L 186.0,211.0 L 229.0,270.0 L 234.0,266.0 L 244.0,261.0 L 261.0,256.0 L 262.0,254.0 L 215.0,189.0 L 208.0,183.0 L 197.0,179.0 L 188.0,179.0 L 180.0,181.0 L 172.0,185.0 L 159.0,198.0 L 156.0,197.0 L 156.0,189.0 L 157.0,188.0 L 156.0,183.0 L 156.0,103.0 L 153.0,97.0 L 150.0,94.0 L 144.0,91.0 L 137.0,91.0 L 136.0,90.0 L 133.0,91.0 L 127.0,91.0 L 126.0,90.0 Z " 
          fill={primaryColor} 
          fillRule="evenodd"
        />
      </svg>

      {/* Brand typography exactly replicating the logo styling from the PDF */}
      {showText && (
        <div className="flex flex-col justify-center" style={{ gap: `${Math.max(1, Math.round(2 * (size / 44)))}px` }}>
          {/* Logo Main Text */}
          <div className="flex items-baseline leading-none">
            {/* "कर" in beautiful Devanagari */}
            <span
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: `${Math.round(24 * (size / 44))}px`,
                fontWeight: 900,
                marginRight: `${Math.round(1 * (size / 44))}px`
              }}
              className={`${
                variant === 'light' ? 'text-white' : 'text-[#0B3D5C]'
              }`}
            >
              कर
            </span>
            {/* "seva" in lowercase serif */}
            <span
              style={{ 
                fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                fontSize: `${Math.round(24 * (size / 44))}px`,
                fontWeight: 500
              }}
              className={`${
                variant === 'light' ? 'text-white' : 'text-[#0B3D5C]'
              }`}
            >
              seva
            </span>
            {/* Domain suffix ".in" */}
            <span 
              style={{ 
                fontSize: `${Math.round(11 * (size / 44))}px`,
                marginLeft: `${Math.round(2 * (size / 44))}px`
              }}
              className="font-black text-[#E8891A]"
            >
              .in
            </span>
          </div>

          {/* Thin separator line with golden-orange dot in the middle */}
          <div 
            style={{ height: `${Math.round(6 * (size / 44))}px` }}
            className="relative w-full my-[2px] flex items-center justify-center"
          >
            {/* Horizontal line */}
            <div className={`w-full h-[1px] ${variant === 'light' ? 'bg-slate-500/50' : 'bg-slate-300'}`} />
            {/* Center Orange Dot */}
            <div 
              style={{ 
                width: `${Math.max(3, Math.round(4 * (size / 44)))}px`, 
                height: `${Math.max(3, Math.round(4 * (size / 44)))}px` 
              }}
              className="absolute bg-[#E8891A] rounded-full" 
            />
          </div>

          {/* Subtext tagline "WORK • WITH • PURPOSE" */}
          <span
            style={{ 
              letterSpacing: '0.18em',
              fontSize: `${Math.max(6, 7.5 * (size / 44))}px`
            }}
            className={`font-bold uppercase whitespace-nowrap text-center ${
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
