import { cn } from "../../utils/cn";

export default function Sparkle({ className }) {
  return (
    <>
      <style>{`
        @keyframes sparkle-pulse {
          0%   { transform: scale(1); opacity: 1; }
          50%  { transform: scale(1.5); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        .sparkle-anim {
          animation: sparkle-pulse 0.8s ease-in-out infinite;
          transform-origin: center;
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
