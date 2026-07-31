import { cn } from "../../utils/cn";

export default function ChatBubble({
  className,
  title,
  description,
  tailPosition = "bottom-right",
}) {
  return (
    // ĐỔI "absolute" thành "relative w-full" để bong bóng lấy lại chiều cao
    <div
      className={cn(
        "relative w-full bg-brand-orange p-6 md:p-8 rounded-[2rem] z-40 text-black drop-shadow-md",
        className,
      )}
    >
      <h4 className="font-display font-black text-lg md:text-xl mb-3 leading-tight tracking-wide">
        {title}
      </h4>
      <p className="text-sm md:text-base font-medium leading-snug">
        {description}
      </p>

      {/* Giữ nguyên logic CSS Triangle tạo mũi nhọn */}
      <div
        className={cn(
          "absolute w-0 h-0 border-solid",
          tailPosition === "bottom-right"
            ? "-bottom-[20px] right-10 border-t-[24px] border-t-brand-orange border-l-[24px] border-l-transparent border-r-0 border-b-0"
            : tailPosition === "bottom-left"
              ? "-bottom-[20px] left-10 border-t-[24px] border-t-brand-orange border-r-[24px] border-r-transparent border-l-0 border-b-0"
              : tailPosition === "top-left"
                ? "-top-[20px] left-10 border-b-[24px] border-b-brand-orange border-r-[24px] border-r-transparent border-l-0 border-t-0"
                : "",
        )}
      ></div>
    </div>
  );
}
