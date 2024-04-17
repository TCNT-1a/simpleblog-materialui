import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}></main>
    </>
  );
}
