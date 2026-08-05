import { useState, useEffect } from "react"; // <-- Nhớ import thêm useEffect
import { motion, AnimatePresence } from "framer-motion";
import Star from "../ui/Star";
import Sunburst from "../ui/Sunburst";
import ChatBubble from "../ui/ChatBubble";
import ProjectDetail from "./ProjectDetail";
import logoPhuc from "../../assets/images/phuc/logo.png";
import logoFoxy from "../../assets/images/foxy/Logo.png";
import logoDog from "../../assets/images/dog/Logo.png";
import logoDrp from "../../assets/images/drp/Logo_LMTL.png";

const PROJECTS_DATA = {
  phuc: {
    title: "Phuc Long",
    projectName: "Phuc Long",
    logo: logoPhuc,
    date: "2026",
    descriptions: [
      "A collaborative packaging redesign project for Phuc Long, focused on reimagining the brand's tea gift box packaging.",
      "After exploring three design directions, we selected and refined a final concept featuring a soft, youthful, and feminine visual style.",
    ],
  },
  personal: {
    title: "Personal Projects",
    projectName: "Various",
    date: "2022 - 2026",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    ],
  },
  dogout: {
    title: "Dog Out!",
    projectName: "Dog Out",
    logo: logoDog,
    date: "2026",
    descriptions: [
      "A collaborative game development project focused on creating Dog Out, a 2D platform runner inspired by the gameplay mechanics of Google Chrome's Dinosaur Game.",
    ],
  },
  foxy: {
    title: "Foxy",
    projectName: "Foxy",
    logo: logoFoxy,
    date: "2026",
    descriptions: [
      "A collaborative UX/UI project focused on creating a friendly English-learning mobile application for Vietnamese users.",
      "My contribution centered on the visual design aspects of the project, including the user interface, mascot design, emoji system.",
    ],
  },
  cjj: {
    title: "CJJ",
    projectName: "Phuc Long",
    date: "2026",
    descriptions: [
      "Citadel Jazz Jam is a branding project for a jazz music festival inspired by the fusion of jazz and Vietnamese cultural heritage.",
      "The branding system is applied across stationery, social media, wayfinding signage, and floor plans, creating a consistent experience.",
    ],
  },
  drp: {
    title: "DRP",
    projectName: "DRP System",
    logo: logoDrp,
    date: "2026",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    ],
  },
};

// THÊM MỚI: Nhận prop initialProject từ App.jsx truyền xuống
export default function WorksSection({ onClose, initialProject, onNavigate }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  // THÊM MỚI: Dùng useEffect để tự động bật chi tiết Project nếu có initialProject
  useEffect(() => {
    if (initialProject && PROJECTS_DATA[initialProject]) {
      setSelectedProject(PROJECTS_DATA[initialProject]);
    }
  }, [initialProject]);

  const defaultTextStyle =
    "text-[1.1rem] sm:text-2xl md:text-[2rem] font-display font-black tracking-wide px-2 md:px-4 text-center leading-none";

  const handleNextProject = () => {
    const keys = Object.keys(PROJECTS_DATA);
    // Tìm vị trí của bài hiện tại
    const currentIndex = keys.findIndex(
      (k) => PROJECTS_DATA[k].title === selectedProject.title,
    );
    // Tăng lên 1 (nếu đến cuối thì quay vòng về 0)
    const nextIndex = (currentIndex + 1) % keys.length;
    setSelectedProject(PROJECTS_DATA[keys[nextIndex]]);
  };
  return (
    <section
      id="works"
      className="relative min-h-[140vh] md:min-h-[100vh] w-full bg-brand-cream overflow-hidden"
    >
      {!selectedProject && (
        <div
          onClick={onClose}
          className="absolute top-8 right-8 md:top-12 md:right-12 cursor-pointer z-50 hover:scale-110 transition-transform"
        >
          <Star className="w-12 h-12 md:w-16 md:h-16 text-brand-blue drop-shadow-md transition-transform duration-300">
            <div className="w-4 h-1 md:w-5 md:h-1.5 bg-brand-yellow rounded-full"></div>
          </Star>
        </div>
      )}

      <div className="absolute inset-0 w-full h-full">
        {/* ======================= 1. PHUC ======================= */}
        <div
          className={`absolute top-[3%] left-[5%] md:top-[12%] md:left-[12%] w-32 h-32 md:w-[18rem] md:h-[18rem] transition-all cursor-pointer ${hoveredProject === "phuc" ? "z-50" : "z-10"}`}
          onMouseEnter={() => setHoveredProject("phuc")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.phuc)}
        >
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

        {/* ======================= 2. PERSONAL PROJECT ======================= */}
        <div
          className={`absolute top-[18%] right-[5%] md:top-[12%] md:right-auto md:left-[32%] w-36 h-36 md:w-[18rem] md:h-[18rem] transition-all cursor-pointer ${hoveredProject === "personal" ? "z-50" : "z-20"}`}
          onMouseEnter={() => setHoveredProject("personal")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.personal)}
        >
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

        {/* ======================= 3. DOG OUT! ======================= */}
        <div
          className={`absolute top-[33%] left-[5%] md:top-[15%] md:left-auto md:right-[8%] w-32 h-32 md:w-[18rem] md:h-[18rem] transition-all cursor-pointer ${hoveredProject === "dogout" ? "z-50" : "z-20"}`}
          onMouseEnter={() => setHoveredProject("dogout")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.dogout)}
        >
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

        {/* ======================= 4. FOXY ======================= */}
        <div
          className={`absolute top-[48%] right-[5%] md:top-auto md:bottom-[10%] md:right-auto md:left-[15%] w-40 h-40 md:w-[21rem] md:h-[21rem] transition-all cursor-pointer ${hoveredProject === "foxy" ? "z-50" : "z-20"}`}
          onMouseEnter={() => setHoveredProject("foxy")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.foxy)}
        >
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

        {/* ======================= 5. CJJ ======================= */}
        <div
          className={`absolute top-[65%] left-[5%] md:top-auto md:bottom-[12%] md:left-[38%] w-44 h-44 md:w-[23rem] md:h-[23rem] transition-all cursor-pointer ${hoveredProject === "cjj" ? "z-50" : "z-30"}`}
          onMouseEnter={() => setHoveredProject("cjj")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.cjj)}
        >
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

        {/* ======================= 6. DRP ======================= */}
        <div
          className={`absolute top-[82%] right-[5%] md:top-auto md:bottom-[20%] md:right-[18%] w-36 h-36 md:w-[22rem] md:h-[22rem] transition-all cursor-pointer ${hoveredProject === "drp" ? "z-50" : "z-40"}`}
          onMouseEnter={() => setHoveredProject("drp")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(PROJECTS_DATA.drp)}
        >
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
            onNextProject={handleNextProject}
            onNavigate={onNavigate}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
