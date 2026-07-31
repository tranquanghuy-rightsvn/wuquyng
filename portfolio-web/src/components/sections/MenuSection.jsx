import { motion } from "framer-motion";
import Star from "../ui/Star";
import Sunburst from "../ui/Sunburst";

export default function MenuSection({ onNavigate, onClose }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-full bg-brand-orange overflow-hidden"
    >
      <div
        onClick={onClose}
        className="absolute top-8 right-8 md:top-12 md:right-12 cursor-pointer z-50 hover:scale-110 transition-transform"
      >
        <Star className="w-16 h-16 text-brand-blue">
          <span className="text-brand-yellow font-display font-black text-3xl mb-1">
            x
          </span>
        </Star>
      </div>

      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[20%] left-[10%] md:left-[15%] z-10">
          <div
            className="relative inline-block cursor-pointer group hover:scale-105 transition-transform"
            onClick={() => onNavigate("home")}
          >
            <Sunburst className="absolute -left-[3.25rem] -top-[2.25rem] md:-top-[3.25rem] w-28 h-28 md:w-40 md:h-40 text-brand-yellow -z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-20 text-[3rem] md:text-[4rem] font-display font-black text-brand-blue uppercase tracking-widest leading-none [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:1.5px_currentColor]">
              HOME
            </span>
          </div>
        </div>

        <div className="absolute top-[40%] right-[15%] md:right-[25%] z-10">
          <div
            className="relative inline-block cursor-pointer group hover:scale-105 transition-transform"
            onClick={() => onNavigate("works")}
          >
            <Sunburst className="absolute -left-[3.25rem] -top-[2.25rem] md:-top-[3.25rem] w-28 h-28 md:w-40 md:h-40 text-brand-yellow -z-10 group-hover:-rotate-12 transition-transform duration-300" />
            <span className="relative z-20 text-[3rem] md:text-[4rem] font-display font-black text-brand-blue uppercase tracking-widest leading-none [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:1.5px_currentColor]">
              WORKS
            </span>
          </div>
        </div>

        <div className="absolute bottom-[35%] left-[15%] md:left-[20%] z-10">
          <div
            className="relative inline-block cursor-pointer group hover:scale-105 transition-transform"
            onClick={() => onNavigate("about")}
          >
            <Star className="absolute -right-[3.25rem] -top-[2.25rem] md:-top-[3.25rem] w-28 h-28 md:w-40 md:h-40 text-white -z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-20 text-[3rem] md:text-[4rem] font-display font-black text-brand-blue uppercase tracking-widest leading-none [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:1.5px_currentColor]">
              ABOUT
            </span>
          </div>
        </div>

        <div className="absolute bottom-[15%] right-[10%] md:right-[20%] z-10">
          <div
            className="relative inline-block cursor-pointer group hover:scale-105 transition-transform"
            onClick={() => onNavigate("contact")}
          >
            <Star className="absolute -right-[3.25rem] -top-[2.25rem] md:-top-[3.25rem] w-28 h-28 md:w-40 md:h-40 text-white -z-10 group-hover:-rotate-12 transition-transform duration-300" />
            <span className="relative z-20 text-[3rem] md:text-[4rem] font-display font-black text-brand-blue uppercase tracking-widest leading-none [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:1.5px_currentColor]">
              CONTACT
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
