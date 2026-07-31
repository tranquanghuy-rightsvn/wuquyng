import BentoItem from "./BentoItem";

// 1. Import 6 File GIF (.gif)
import gifCenter1 from "../../assets/images/foxy/gif-center-1.gif";
import gifCenter2 from "../../assets/images/foxy/gif-center-2.gif";
import gifCenter3 from "../../assets/images/foxy/gif-center-3.gif";
import gifCenter4 from "../../assets/images/foxy/gif-center-4.gif";
import gifCenter5 from "../../assets/images/foxy/gif-center-5.gif";
import gifFoxWalk from "../../assets/images/foxy/gif-fox-walk.gif";

// 2. Import 6 File ảnh tĩnh (.jpg hoặc .png)
import img1 from "../../assets/images/foxy/img-1.jpg";
import img2 from "../../assets/images/foxy/img-2.jpg";
import img3 from "../../assets/images/foxy/img-3.jpg";
import img4 from "../../assets/images/foxy/img-4.jpg";
import img5 from "../../assets/images/foxy/img-5.jpg";
import img6 from "../../assets/images/foxy/img-6.jpg";

// 3. Import 1 File Video (.mp4)
import foxyVideo from "../../assets/videos/foxy-video.mp4";

export default function FoxyShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* =========================================
          BLOCK 1: 6 HÌNH GIF
          ========================================= */}

      <BentoItem
        index={0}
        imgSrc={gifCenter1}
        title="Center GIF 1"
        isGif={true}
        spanClass="col-span-1 md:col-span-2 lg:col-span-2 aspect-video"
      />
      <BentoItem
        index={1}
        imgSrc={gifCenter2}
        title="Center GIF 2"
        isGif={true}
        spanClass="col-span-1 md:col-span-2 lg:col-span-2 aspect-video"
      />

      <BentoItem
        index={2}
        imgSrc={gifCenter3}
        title="Center GIF 3"
        isGif={true}
        spanClass="col-span-1 md:col-span-2 lg:col-span-2 aspect-video"
      />
      <BentoItem
        index={3}
        imgSrc={gifCenter4}
        title="Center GIF 4"
        isGif={true}
        spanClass="col-span-1 md:col-span-2 lg:col-span-2 aspect-video"
      />

      <BentoItem
        index={4}
        imgSrc={gifCenter5}
        title="Center GIF 5"
        isGif={true}
        spanClass="col-span-1 md:col-span-2 lg:col-start-2 aspect-video"
      />

      {/* ĐIỂM NHẤN: GIF Cáo đi từ phải sang trái (Kéo full 4 cột) */}
      <BentoItem
        index={5}
        imgSrc={gifFoxWalk}
        title="Fox Walking (R -> L)"
        isGif={true}
        spanClass="col-span-1 md:col-span-2 lg:col-span-4 aspect-[21/9]"
      />

      {/* =========================================
          BLOCK 2: 6 HÌNH ẢNH (Tỉ lệ 4/3)
          ========================================= */}

      <BentoItem
        index={6}
        imgSrc={img1}
        title="Foxy Image 1"
        spanClass="col-span-1 md:col-span-2 aspect-[4/3]"
      />
      <BentoItem
        index={7}
        imgSrc={img2}
        title="Foxy Image 2"
        spanClass="col-span-1 md:col-span-2 aspect-[4/3]"
      />

      <BentoItem
        index={8}
        imgSrc={img3}
        title="Foxy Image 3"
        spanClass="col-span-1 md:col-span-2 aspect-[4/3]"
      />
      <BentoItem
        index={9}
        imgSrc={img4}
        title="Foxy Image 4"
        spanClass="col-span-1 md:col-span-2 aspect-[4/3]"
      />

      <BentoItem
        index={10}
        imgSrc={img5}
        title="Foxy Image 5"
        spanClass="col-span-1 md:col-span-2 aspect-[4/3]"
      />
      <BentoItem
        index={11}
        imgSrc={img6}
        title="Foxy Image 6"
        spanClass="col-span-1 md:col-span-2 aspect-[4/3]"
      />
      <BentoItem
        index={12}
        videoSrc={foxyVideo}
        title="Foxy Final Trailer"
        spanClass="col-span-1 md:col-span-2 lg:col-span-4 aspect-video mt-8"
      />
    </div>
  );
}
