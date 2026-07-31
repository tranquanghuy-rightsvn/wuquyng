import BentoItem from "./BentoItem";

// TODO: Lưu video MP4 của bạn vào thư mục assets và import vào đây
import personalVideo from "../../assets/videos/my-video.mp4";

export default function PersonalShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* 1 Khối duy nhất chứa Video, kéo full 4 cột, tỉ lệ 16:9 */}
      <BentoItem
        index={0}
        title="Personal Project Reel"
        spanClass="col-span-1 md:col-span-2 lg:col-span-4 aspect-video"
        videoSrc={personalVideo}
      />
    </div>
  );
}
