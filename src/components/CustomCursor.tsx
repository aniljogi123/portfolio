import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-enabled desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('clickable'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let animationId: number;
    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationId = requestAnimationFrame(updateTrailing);
    };

    animationId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central crisp glowing dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] transition-transform duration-75"
        style={{
          width: isPointer ? 12 : 6,
          height: isPointer ? 12 : 6,
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Trailing anti-gravity ring/aura */}
      <div
        className="fixed pointer-events-none z-50 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px] transition-all duration-300 ease-out"
        style={{
          width: isPointer ? 56 : 38,
          height: isPointer ? 56 : 38,
          left: trailing.x,
          top: trailing.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: isPointer
            ? '0 0 25px rgba(0, 240, 255, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.3)'
            : '0 0 15px rgba(0, 240, 255, 0.2)',
        }}
      />
    </>
  );
};
