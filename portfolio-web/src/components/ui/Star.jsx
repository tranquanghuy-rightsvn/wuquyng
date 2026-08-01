import { cn } from "../../utils/cn";

// Đổi color mặc định thành "currentColor"
export default function Star({ className, color = "currentColor", children }) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm">
        <path
          d="M60 15 L73 45 L105 45 L79 65 L89 95 L60 76 L31 95 L41 65 L15 45 L47 45 Z"
          fill={color}
          stroke={color}
          strokeWidth="28"
          strokeLinejoin="round"
          strokeLinecap="round"
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
