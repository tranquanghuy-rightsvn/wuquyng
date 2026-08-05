import { useContext } from "react";
import { LightboxContext } from "../sections/ProjectDetail"; // Import context để phóng to ảnh
import BentoItem from "./BentoItem"; // Import BentoItem để có hiệu ứng hover "View"

import drpMobile1 from "../../assets/images/drp/VL000427.JPG";
import drpMobile2 from "../../assets/images/drp/VL009886.JPG";
import drpMobile3 from "../../assets/images/drp/Chim.png";
import drpMobile4 from "../../assets/images/drp/Long.png";
import drpMobile5 from "../../assets/images/drp/Lân.png";
import drpMobile6 from "../../assets/images/drp/Rùa.png";

export default function DRPShowcase() {
  const setLightboxImage = useContext(LightboxContext);

  const images = [
    {
      src: drpMobile1,
      title: "DRP System Mobile Screen 1",
    },
    {
      src: drpMobile2,
      title: "DRP System Mobile Screen 2",
    },
    {
      src: drpMobile3,
      title: "DRP System Mobile Screen 3",
    },
    {
      src: drpMobile4,
      title: "DRP System Mobile Screen 4",
    },
    {
      src: drpMobile5,
      title: "DRP System Mobile Screen 5",
    },
    {
      src: drpMobile6,
      title: "DRP System Mobile Screen 6",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto pb-12">
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-zoom-in"
          onClick={() => setLightboxImage && setLightboxImage(image.src)}
        >
          <BentoItem
            index={index}
            imgSrc={image.src}
            title={image.title}
            // ĐÃ SỬA: Ép tất cả dùng chung tỷ lệ aspect-[4/5] (hoặc bạn có thể đổi thành aspect-[3/4] nếu muốn khung ngắn hơn) để đảm bảo chiều cao bằng nhau tăm tắp 100%
            spanClass="w-full aspect-[4/5]"
          />
        </div>
      ))}
    </div>
  );
}
