import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center">
      <small>
        <Link href="/">
          Copyright &copy; 2024 by <em>TCN</em>
        </Link>
      </small>
    </div>
  );
}
