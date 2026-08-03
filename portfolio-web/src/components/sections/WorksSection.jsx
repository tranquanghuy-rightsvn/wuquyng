import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Star from "../ui/Star";
import Sunburst from "../ui/Sunburst";
import ChatBubble from "../ui/ChatBubble";
import ProjectDetail from "./ProjectDetail";
import logoPhuc from "../../assets/images/phuc/logo.png";

const PROJECTS_DATA = {
  phuc: {
    title: "Phuc Long",
    projectName: "Phuc Long",
    logo: logoPhuc,
    date: "2023",
    descriptions: [
      "A collaborative packaging redesign project for Phuc Long, focused on reimagining the brand's tea gift box packaging.",
      "After exploring three design directions, we selected and refined a final concept featuring a soft, youthful, and feminine visual style.",
    ],
  },
  personal: {
    title: "Personal Projects",
    projectName: "Various",
    date: "2022 - 2023",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    ],
  },
  dogout: {
    title: "Dog Out!",
    projectName: "Dog Out",
    date: "2023",
    descriptions: [
      "A collaborative game development project focused on creating Dog Out, a 2D platform runner inspired by the gameplay mechanics of Google Chrome's Dinosaur Game.",
    ],
  },
  foxy: {
    title: "Foxy",
    projectName: "Phuc Long",
    date: "2023",
    descriptions: [
      "A collaborative UX/UI project focused on creating a friendly English-learning mobile application for Vietnamese users.",
      "My contribution centered on the visual design aspects of the project, including the user interface, mascot design, emoji system.",
    ],
  },
  cjj: {
    title: "CJJ",
    projectName: "Phuc Long",
    date: "2023",
    descriptions: [
      "Citadel Jazz Jam is a branding project for a jazz music festival inspired by the fusion of jazz and Vietnamese cultural heritage.",
      "The branding system is applied across stationery, social media, wayfinding signage, and floor plans, creating a consistent experience.",
    ],
  },
  drp: {
    title: "DRP",
    projectName: "DRP System",
    date: "2023",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    ],
  },
};

export default function WorksSection({ onClose }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Thu nhỏ chữ trên mobile, giữ nguyên trên Desktop (md:text-[2rem])
  const defaultTextStyle =
    "text-[1.1rem] sm:text-2xl md:text-[2rem] font-display font-black tracking-wide px-2 md:px-4 text-center leading-none";

  return (
    <section
      id="works"
      // Kéo dài màn hình Mobile (140vh) để xếp Zig-zag, Desktop giữ nguyên (100vh)
      className="relative min-h-[140vh] md:min-h-[100vh] w-full bg-brand-cream overflow-hidden"
    >
      {/* Nút Dấu Trừ quay lại màn hình Menu */}
      {!selectedProject && (
        <div
          onClick={onClose}
          className="absolute top-8 right-8 md:top-12 md:right-12 cursor-pointer z-50 hover:scale-110 transition-transform"
        >
          {/* Thu nhỏ nút tắt trên mobile */}
          <Star className="w-12 h-12 md:w-16 md:h-16 text-brand-blue drop-shadow-md transition-transform duration-300">
            <div className="w-4 h-1 md:w-5 md:h-1.5 bg-brand-yellow rounded-full"></div>
          </Star>
        </div>
      )}

      <div className="absolute inset-0 w-full h-full">
        {/* ======================= 1. PHUC (Mobile: TRÁI) ======================= */}
        <div
          // Mobile: top-3% left-5% w-32 h-32 | Desktop: Giữ nguyên top-12% left-12%
          className={`absolute top-[3%] left-[5%] md:top-[12%] md:left-[12%] w-32 h-32 md:w-[18rem] md:h-[18rem] transition-all cursor-pointer ${hoveredProject === "phuc" ? "z-50" : "z-10"}`}
          onMouseEnter={() => setHoveredProject("phuc")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.phuc)}
        >
          {/* Thêm md:hover:rotate-[24deg] và duration-300 */}
          <Star className="w-full h-full text-brand-blue rotate-12 md:hover:scale-105 md:hover:rotate-[24deg] transition-transform duration-300 drop-shadow-md">
            <span className={`${defaultTextStyle} text-white`}>
              Phuc
              <br />
              ...
            </span>
          </Star>
          <AnimatePresence>
            {hoveredProject === "phuc" && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="hidden md:block absolute bottom-[65%] left-[45%] w-72 md:w-80 pointer-events-none"
              >
                <ChatBubble
                  title="Phuc Long"
                  description={PROJECTS_DATA.phuc.descriptions[0]}
                  tailPosition="bottom-left"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ======================= 2. PERSONAL PROJECT (Mobile: PHẢI) ======================= */}
        <div
          // Mobile: top-18% right-5% | Desktop: Reset right-auto, dùng left-32%
          className={`absolute top-[18%] right-[5%] md:top-[12%] md:right-auto md:left-[32%] w-36 h-36 md:w-[18rem] md:h-[18rem] transition-all cursor-pointer ${hoveredProject === "personal" ? "z-50" : "z-20"}`}
          onMouseEnter={() => setHoveredProject("personal")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.personal)}
        >
          {/* Thêm md:hover:rotate-12 và duration-300 */}
          <Sunburst className="w-full h-full text-brand-yellow -rotate-2 md:hover:scale-105 md:hover:rotate-12 transition-transform duration-300 drop-shadow-md">
            <span className={`${defaultTextStyle} text-brand-blue`}>
              Personal
              <br />
              Project
            </span>
          </Sunburst>
          <AnimatePresence>
            {hoveredProject === "personal" && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="hidden md:block absolute bottom-[75%] left-[45%] w-72 md:w-80 pointer-events-none"
              >
                <ChatBubble
                  title="Personal Projects"
                  description={PROJECTS_DATA.personal.descriptions[0]}
                  tailPosition="bottom-left"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ======================= 3. DOG OUT! (Mobile: TRÁI) ======================= */}
        <div
          // Mobile: top-33% left-5% | Desktop: Reset left-auto, dùng right-8%
          className={`absolute top-[33%] left-[5%] md:top-[15%] md:left-auto md:right-[8%] w-32 h-32 md:w-[18rem] md:h-[18rem] transition-all cursor-pointer ${hoveredProject === "dogout" ? "z-50" : "z-20"}`}
          onMouseEnter={() => setHoveredProject("dogout")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.dogout)}
        >
          {/* Thêm md:hover:-rotate-[24deg] và duration-300 */}
          <Star className="w-full h-full text-brand-blue -rotate-12 md:hover:scale-105 md:hover:-rotate-[24deg] transition-transform duration-300 drop-shadow-md">
            <span className={`${defaultTextStyle} text-white`}>Dog Out!</span>
          </Star>
          <AnimatePresence>
            {hoveredProject === "dogout" && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="hidden md:block absolute bottom-[65%] right-[45%] w-72 md:w-80 pointer-events-none"
              >
                <ChatBubble
                  title="Dog Out!"
                  description={PROJECTS_DATA.dogout.descriptions[0]}
                  tailPosition="bottom-right"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ======================= 4. FOXY (Mobile: PHẢI) ======================= */}
        <div
          // Mobile: top-48% right-5% | Desktop: Dùng bottom-10% left-15%
          className={`absolute top-[48%] right-[5%] md:top-auto md:bottom-[10%] md:right-auto md:left-[15%] w-40 h-40 md:w-[21rem] md:h-[21rem] transition-all cursor-pointer ${hoveredProject === "foxy" ? "z-50" : "z-20"}`}
          onMouseEnter={() => setHoveredProject("foxy")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.foxy)}
        >
          {/* Thêm md:hover:rotate-12 và duration-300 */}
          <Sunburst className="w-full h-full text-brand-yellow md:hover:scale-105 md:hover:rotate-12 transition-transform duration-300 drop-shadow-md">
            <span className={`${defaultTextStyle} text-brand-blue`}>Foxy</span>
          </Sunburst>
          <AnimatePresence>
            {hoveredProject === "foxy" && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="hidden md:block absolute bottom-[75%] left-[45%] w-72 md:w-80 pointer-events-none"
              >
                <ChatBubble
                  title="Foxy"
                  description={PROJECTS_DATA.foxy.descriptions[0]}
                  tailPosition="bottom-left"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ======================= 5. CJJ (Mobile: TRÁI) ======================= */}
        <div
          // Mobile: top-65% left-5% | Desktop: Dùng bottom-12% left-38%
          className={`absolute top-[65%] left-[5%] md:top-auto md:bottom-[12%] md:left-[38%] w-44 h-44 md:w-[23rem] md:h-[23rem] transition-all cursor-pointer ${hoveredProject === "cjj" ? "z-50" : "z-30"}`}
          onMouseEnter={() => setHoveredProject("cjj")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.cjj)}
        >
          {/* Thêm md:hover:rotate-[24deg] và duration-300 */}
          <Star className="w-full h-full text-brand-blue rotate-12 md:hover:scale-105 md:hover:rotate-[24deg] transition-transform duration-300 drop-shadow-md">
            <span className={`${defaultTextStyle} text-white`}>CJJ</span>
          </Star>
          <AnimatePresence>
            {hoveredProject === "cjj" && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="hidden md:block absolute bottom-[75%] right-[45%] w-80 md:w-[24rem] pointer-events-none"
              >
                <ChatBubble
                  title="Citadel Jazz Jam"
                  description={PROJECTS_DATA.cjj.descriptions[0]}
                  tailPosition="bottom-right"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ======================= 6. DRP (Mobile: PHẢI) ======================= */}
        <div
          // Mobile: top-82% right-5% | Desktop: Dùng bottom-20% right-18%
          className={`absolute top-[82%] right-[5%] md:top-auto md:bottom-[20%] md:right-[18%] w-36 h-36 md:w-[22rem] md:h-[22rem] transition-all cursor-pointer ${hoveredProject === "drp" ? "z-50" : "z-40"}`}
          onMouseEnter={() => setHoveredProject("drp")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.drp)}
        >
          {/* Thêm md:hover:-rotate-12 và duration-300 */}
          <Sunburst className="w-full h-full text-brand-yellow md:hover:scale-105 md:hover:-rotate-12 transition-transform duration-300 drop-shadow-md">
            <span className={`${defaultTextStyle} text-brand-blue`}>DRP</span>
          </Sunburst>
          <AnimatePresence>
            {hoveredProject === "drp" && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="hidden md:block absolute top-[75%] left-[45%] w-72 md:w-80 pointer-events-none"
              >
                <ChatBubble
                  title="DRP"
                  description={PROJECTS_DATA.drp.descriptions[0]}
                  tailPosition="top-left"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
