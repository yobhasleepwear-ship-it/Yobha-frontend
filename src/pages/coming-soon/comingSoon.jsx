import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const launchDate = new Date("2025-10-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-premium-cream via-premium-beige to-premium-warm-white relative overflow-hidden">
      {/* Main Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/second final render.mp4" type="video/mp4" />
        </video>
        
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-premium-white/40"></div>
      </div>

      {/* Mobile Layout - Stacked vertically */}
      <div className="absolute bottom-4 left-4 right-4 z-10 md:hidden">
        {/* Countdown Timer for Mobile */}
        <div className="flex justify-center gap-2 mb-4">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="group">
              <div className="bg-premium-white/90 backdrop-blur-sm border border-luxury-gold/50 rounded-lg p-2 hover:border-luxury-gold/70 hover:bg-premium-white/95 transition-all duration-300 shadow-lg">
                <div className="text-lg font-helvetica font-light text-luxury-gold mb-1 text-center">
                  {String(timeLeft[unit]).padStart(2, '0')}
                </div>
                <div className="text-xs text-text-medium font-helvetica font-light tracking-wider uppercase text-center">
                  {unit}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Description for Mobile */}
        <p className="text-xs text-text-dark font-helvetica font-light tracking-wide leading-relaxed drop-shadow-lg bg-premium-white/80 backdrop-blur-sm rounded-lg p-3 border border-luxury-gold/30 text-center">
          A new era of timeless elegance awaits. We're crafting something extraordinary that will redefine luxury and sophistication.
        </p>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden md:block">
        {/* Countdown Timer - Positioned at bottom right */}
        <div className="absolute bottom-8 right-8 z-10">
          <div className="flex gap-4">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="group">
                <div className="bg-premium-white/90 backdrop-blur-sm border border-luxury-gold/50 rounded-lg p-4 hover:border-luxury-gold/70 hover:bg-premium-white/95 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-helvetica font-light text-luxury-gold mb-1 text-center">
                    {String(timeLeft[unit]).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-text-medium font-helvetica font-light tracking-wider uppercase text-center">
                    {unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Description - Positioned at bottom left */}
        <div className="absolute bottom-8 left-8 z-10 max-w-md">
          <p className="text-base lg:text-lg text-text-dark font-helvetica font-light tracking-wide leading-relaxed drop-shadow-lg bg-premium-white/80 backdrop-blur-sm rounded-lg p-4 border border-luxury-gold/30">
            A new era of timeless elegance awaits. We're crafting something extraordinary that will redefine luxury and sophistication.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-16 bg-gradient-to-b from-luxury-gold/60 to-transparent shadow-lg"></div>
      <div className="absolute top-1/3 right-8 w-1 h-12 bg-gradient-to-b from-luxury-rose-gold/60 to-transparent shadow-lg"></div>
      <div className="absolute bottom-1/4 left-12 w-1 h-20 bg-gradient-to-b from-luxury-cream/60 to-transparent shadow-lg"></div>
      <div className="absolute bottom-1/3 right-12 w-1 h-14 bg-gradient-to-b from-luxury-gold/60 to-transparent shadow-lg"></div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>
    </div>
  );
};

export default ComingSoon;
