import Head from "next/head";
import Link from "next/link";
import { getNoteByTitle, getNotesTitles } from "../../utils/notes";

export function getStaticProps({ params: { title } }) {
  return { props: { note: getNoteByTitle(title) } };
}

export function getStaticPaths() {
  const paths = getNotesTitles().map((title) => ({ params: { title } }));
  return {
    paths,
    fallback: "blocking",
  };
}

export default function NotePage({ note }) {
  return (
    <>
      <Head>
        <title>Note Page</title>
      </Head>
      <div className="container">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <Link href="/">back to home</Link>
      </div>
    </>
  );
}
