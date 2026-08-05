import { useContext } from "react";
import { LightboxContext } from "../sections/ProjectDetail"; // Import context để phóng to ảnh
import BentoItem from "./BentoItem";

// Import Video
import personalVideo from "../../assets/videos/my-video.mp4";

// TODO: Import 2 hình ảnh của bạn vào đây (chỉnh lại đường dẫn cho đúng)
import personalImg1 from "../../assets/images/personal/Sofia_1.png";
import personalImg2 from "../../assets/images/personal/Sofia_2.png";

export default function PersonalShowcase() {
  const setLightboxImage = useContext(LightboxContext);

  return (
    // Thêm items-start để các khung ảnh tự do giữ đúng tỷ lệ chiều cao của mình
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
      {/* =========================================
          1. VIDEO: Kéo full 4 cột, tỉ lệ 16:9
          ========================================= */}
      <BentoItem
        index={0}
        title="Personal Project Reel"
        spanClass="col-span-1 md:col-span-2 lg:col-span-4 aspect-video"
        videoSrc={personalVideo}
      />

      {/* =========================================
          2. ẢNH 1: Tỉ lệ 16:9 (Chiếm 2 cột)
          ========================================= */}
      <div
        className="col-span-1 md:col-span-2 lg:col-span-2 cursor-zoom-in"
        onClick={() => setLightboxImage && setLightboxImage(personalImg1)}
      >
        <BentoItem
          index={1}
          title="Personal Image 1"
          imgSrc={personalImg1}
          // aspect-video tương đương aspect-[16/9]
          spanClass="w-full aspect-video"
        />
      </div>

      {/* =========================================
          3. ẢNH 2: Tỉ lệ 7:10 (Chiếm 2 cột)
          ========================================= */}
      <div
        className="col-span-1 md:col-span-2 lg:col-span-2 cursor-zoom-in"
        onClick={() => setLightboxImage && setLightboxImage(personalImg2)}
      >
        <BentoItem
          index={2}
          title="Personal Image 2"
          imgSrc={personalImg2}
          // Ép cứng tỷ lệ dọc 7:10
          spanClass="w-full aspect-[7/10]"
        />
      </div>
    </div>
  );
}
