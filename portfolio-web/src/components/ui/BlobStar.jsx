import { cn } from "../../utils/cn";

export default function BlobStar({ className }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("absolute text-brand-orange", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vẫn dùng thủ thuật stroke tròn để làm mập hình khối */}
      <path
        d="M100 15 L120 45 L155 35 L150 70 L185 85 L155 105 L170 140 L135 135 L120 165 L95 135 L60 155 L70 120 L35 105 L65 85 L35 60 L70 55 L75 25 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="round"
      />
    </svg>
  );
}
