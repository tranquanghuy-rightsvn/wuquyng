import { cn } from "../../utils/cn";

export default function Sunburst({
  className,
  color = "currentColor",
  children,
}) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5 
             L56.9 33.4 L81.8 18.2 
             L66.6 43.1 L95 50 
             L66.6 56.9 L81.8 81.8 
             L56.9 66.6 L50 95 
             L43.1 66.6 L18.2 81.8 
             L33.4 56.9 L5 50 
             L33.4 43.1 L18.2 18.2 
             L43.1 33.4 Z"
          fill={color}
          stroke={color}
          strokeWidth="10"
          strokeLinejoin="round"
        />
      </svg>

      {children && (
        <div className="absolute inset-0 flex items-center justify-center text-center font-bold">
          {children}
        </div>
      )}
    </div>
  );
}
