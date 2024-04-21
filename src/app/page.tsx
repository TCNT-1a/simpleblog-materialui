import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import { Main } from "next/document";
import MainLayout from "./MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>
    </MainLayout>
  );
}
