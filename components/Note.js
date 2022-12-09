import Link from "next/link";

export default function Note({ title }) {
  return (
    <Link href={"/notes/" + title}>
      <span>{title}</span>
    </Link>
  );
}
