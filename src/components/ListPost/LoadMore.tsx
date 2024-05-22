import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function LoadMore() {
  const classes = "bg-primary text-white hover:text-gray-200 rounded-lg p-1";
  return (
    <div className="flex flex-row flex-wrap justify-center space-x-2">
      <Link href="/post" className={classes}>
        <FontAwesomeIcon icon={faArrowLeft} width={20} />
      </Link>
      <Link href="/post" className={classes}>
        <FontAwesomeIcon icon={faArrowRight} width={20} />
      </Link>
    </div>
  );
}
