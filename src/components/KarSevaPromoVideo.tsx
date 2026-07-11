import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, Shield, Gift, Sparkles, Send, FileCheck, DollarSign, Clock } from 'lucide-react';
import KarSevaLogo from './KarSevaLogo';

export default function KarSevaPromoVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0); // 0 to 5000 milliseconds
  const [activeSlide, setActiveSlide] = useState(0); // 0 to 4 (each represents 1 second)
  const timerRef = useRef<number | null>(null);

  const duration = 5000; // 5 seconds
  const step = 50; // update every 50ms

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime(prevTime => {
          const nextTime = prevTime + step;
          if (nextTime >= duration) {
            return 0; // loop back to 0
          }
          return nextTime;
        });
      }, step);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);

  // Update current slide index based on current time (each slide takes 1 second = 1000ms)
  useEffect(() => {
    const slide = Math.floor(currentTime / 1000);
    setActiveSlide(Math.min(4, Math.max(0, slide)));
  }, [currentTime]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentTime(0);
    setActiveSlide(0);
    setIsPlaying(true);
  };

  const progressPercentage = (currentTime / duration) * 100;
  const displayTime = (currentTime / 1000).toFixed(1);

  // Storyboard Slides definitions
  const slides = [
    {
      title: "टैक्स फाइलिंग हुआ सुपर आसान",
      subtitle: "Tax Filing Made Super Easy",
      desc: "KarSeva welcomes you to a world of stress-free e-filing with top CA experts.",
      icon: <Sparkles className="w-12 h-12 text-[#FFB400]" />,
      badge: "KARSEVA • INTRODUCTION",
      bgColor: "from-[#1D3557] to-[#12223a]",
    },
    {
      title: "सिर्फ Form 16 अपलोड करें",
      subtitle: "Just Upload Your Form 16",
      desc: "No complex tax portals. Just upload your documents & our CAs will do the rest.",
      icon: <FileCheck className="w-12 h-12 text-blue-400" />,
      badge: "SECURE • UPLOAD",
      bgColor: "from-[#112240] to-[#1a365d]",
    },
    {
      title: "अधिकतम Tax Refund की गारंटी",
      subtitle: "Maximum Tax Refund Guaranteed",
      desc: "We scan 30+ tax deductions to secure every single Rupee of your refund.",
      icon: <DollarSign className="w-12 h-12 text-emerald-400" />,
      badge: "REFUND • OPTIMIZATION",
      bgColor: "from-[#0a2e24] to-[#1D3557]",
    },
    {
      title: "कंपनी और GST रजिस्ट्रेशन",
      subtitle: "GST & Company Registration",
      desc: "Incorporate Private Limited, LLP, or register GST. End-to-end corporate support.",
      icon: <Shield className="w-12 h-12 text-[#FFB400]" />,
      badge: "BUSINESS • GROW",
      bgColor: "from-[#38260a] to-[#1D3557]",
    },
    {
      title: "5 मिनट में CAs से जुड़ें!",
      subtitle: "Get Assisted in Under 5 Minutes",
      desc: "Start filing now. Speak with a professional tax specialist right away.",
      icon: <Clock className="w-12 h-12 text-amber-400" />,
      badge: "GET STARTED • NOW",
      bgColor: "from-[#1D3557] to-[#1d3c6c]",
    }
  ];

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
      
      {/* Video Screen container (Aspect Ratio roughly 16:9) */}
      <div className="relative aspect-video w-full flex flex-col justify-between p-6 sm:p-8 select-none overflow-hidden">
        
        {/* Animated Background Gradients according to current active slide */}
        <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000 z-0 ${slides[activeSlide].bgColor}`} />
        
        {/* Abstract Floating visual particles for video effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden z-0">
          <div className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
          <div className="absolute w-64 h-64 bg-[#FFB400] rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Top Header Row of Video */}
        <div className="relative z-10 flex justify-between items-center w-full">
          <KarSevaLogo size={36} showText={true} variant="light" />
          <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold text-white flex items-center gap-1.5 border border-white/10">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-rose-500 animate-pulse' : 'bg-slate-400'}`} />
            {isPlaying ? 'PROMO PLAYING' : 'PAUSED'}
          </div>
        </div>

        {/* Video Storyboard Slides with Fades */}
        <div className="relative z-10 flex-grow flex items-center justify-center my-4 sm:my-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-xl mx-auto flex flex-col items-center space-y-3"
            >
              {/* Slide Icon */}
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 mb-1">
                {slides[activeSlide].icon}
              </div>

              {/* Tag Category */}
              <span className="text-[10px] font-black tracking-widest text-[#FFB400] uppercase font-mono">
                {slides[activeSlide].badge}
              </span>

              {/* Title Section (Devanagari Bold & English subtitle) */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-xs sm:text-base font-medium text-slate-300">
                  {slides[activeSlide].subtitle}
                </p>
              </div>

              {/* Narrative description */}
              <p className="text-[11px] sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                {slides[activeSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Player Footer / Controls overlay */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
          
          {/* Progress Seek Bar */}
          <div className="w-full h-1.5 bg-white/20 rounded-full mb-3.5 relative overflow-hidden cursor-pointer group">
            <div 
              className="h-full bg-gradient-to-r from-[#FFB400] to-orange-500 transition-all duration-75"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between w-full">
            {/* Play/Pause/Reset buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={togglePlay}
                className="bg-[#FFB400] hover:bg-[#e6a200] text-[#1D3557] p-2 rounded-full transition transform hover:scale-110 active:scale-95"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>
              <button 
                onClick={handleReset}
                className="text-slate-300 hover:text-white p-2 transition"
                title="Replay Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              
              {/* Simulated Audio Equalizer Visualizer */}
              <div className="hidden sm:flex items-end gap-1 h-4 px-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                  <div 
                    key={item}
                    className="w-0.75 bg-[#FFB400] rounded-t transition-all duration-300"
                    style={{ 
                      height: isPlaying ? `${Math.floor(Math.random() * 12) + 4}px` : '3px',
                      animation: isPlaying ? `bounce 0.8s ease-in-out infinite alternate` : 'none',
                      animationDelay: `${item * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Time code */}
            <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
              <span>0:0{Math.floor(currentTime / 1000)} / 0:05</span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline bg-white/10 px-2 py-0.5 rounded text-[10px] text-slate-300">
                1080p HD
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded CSS for custom bouncing keyframes */}
      <style>{`
        @keyframes bounce {
          0% { height: 3px; }
          100% { height: 16px; }
        }
      `}</style>
    </div>
  );
}
