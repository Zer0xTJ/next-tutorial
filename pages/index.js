import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";
import Note from "../components/Note";
import { getNotesTitles } from "../utils/notes";

export function getServerSideProps() {
  const notes = getNotesTitles();
  return { props: { notes } };
}

export default function Home({ notes }) {
  const notesElements = notes.map((note, i) => <Note key={i} title={note} />);
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="container">
        <h1>My Notes!</h1>
        <section className="notes-container">{notes.length == 0 ? "No Notes!" : notesElements}</section>
      </div>
    </>
  );
}
