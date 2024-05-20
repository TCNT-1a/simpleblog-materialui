import logo from "./logo.jpg";
import Image from "next/image";
export default function Brand({ branchName }: { branchName: string }) {
  return (
    <div className="flex flex-col sm:flex-row ">
      <figure className="w-fit">
        <Image src={logo} alt="logo" width={30} height={30} />
      </figure>
      <div className="w-fit">
        <h1>{branchName}</h1>
      </div>
    </div>
  );
}
