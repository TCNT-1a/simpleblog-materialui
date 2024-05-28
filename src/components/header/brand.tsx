import Link from "next/link";
import logo from "./logo.jpg";
import Image from "next/image";
export default function Brand({ branchName }: { branchName: string }) {
  return (
    <div className=" p-2">
      <Link href="/" className="flex flex-row items-center space-x-2">
        <Logo></Logo>
        <h1 className="bg-primary text-gray-100 font-bold">{branchName}</h1>
      </Link>
    </div>
  );
}

function Logo() {
  return (
    <div className="w-fit h-fit">
      <Image
        src={logo}
        alt="logo"
        width={30}
        height={30}
        className="rounded-full"
      />
    </div>
  );
}
