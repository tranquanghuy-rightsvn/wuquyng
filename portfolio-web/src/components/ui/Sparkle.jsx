import { cn } from "../../utils/cn";

export default function Sparkle({ className }) {
  return (
    <>
      <style>{`
        @keyframes sparkle-pulse {
          0%   { transform: scale(0.6) rotate(0deg); opacity: 0.2; filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
          30%  { transform: scale(1.4) rotate(12deg); opacity: 1; filter: drop-shadow(0 0 12px rgba(255,255,255,0.9)); }
          60%  { transform: scale(0.8) rotate(-8deg); opacity: 0.5; filter: drop-shadow(0 0 6px rgba(255,255,255,0.4)); }
          80%  { transform: scale(1.2) rotate(5deg); opacity: 0.8; filter: drop-shadow(0 0 10px rgba(255,255,255,0.7)); }
          100% { transform: scale(0.6) rotate(0deg); opacity: 0.2; filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
        }
        .sparkle-anim {
          animation: sparkle-pulse 1.5s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, opacity, filter;
        }
      `}</style>
      <svg
        viewBox="0 0 100 100"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("absolute", "sparkle-anim", className)}
      >
        <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
      </svg>
    </>
  );
}
