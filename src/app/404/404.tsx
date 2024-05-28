import Image from "next/image";
import svg from "./website-not-found.svg";
export default function Custom404() {
  return (
    <div className="mx-auto text-center">
      <h1>404 - Page Not Found</h1>
      <div>
        <Image src={svg} alt="404" width={400} height={400} />
        <h4>Không tìm thấy dữ liệu</h4>
      </div>
    </div>
  );
}
export function HeadingTag404() {
  return { title: "404 Not Found" };
}
