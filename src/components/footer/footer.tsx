import { classesBlock, classesBlockChild } from "@/styles/styles";
import { link } from "fs";
import Link from "next/link";

export default function Footer() {
  const link = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Our Us", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <div
      className={" text-white p-4 flex flex-row space-x-2 mt-2 " + classesBlock}
    >
      <div className={"w-6/12 flex flex-col " + classesBlockChild}>
        <FooterPart links={link} />
      </div>
      <div className={"w-6/12 flex flex-col " + classesBlockChild}>
        <FooterPart links={link} />
      </div>
    </div>
  );
}

function FooterPart({ links }: { links: any[] }) {
  return (
    <>
      {links.map((item) => (
        <Link href={item.link} key={item.name} className="text-black">
          {item.name}
        </Link>
      ))}
    </>
  );
}
