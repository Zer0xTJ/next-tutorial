import fs from "fs";
import path from "path";

const notesPath = path.join(process.cwd(), "Notes"); // path/Notes

export function getNotesTitles() {
  const titles = fs.readdirSync(notesPath);
  return titles.map((title) => title.split(".")[0]);
}

export function getNoteByTitle(title) {
  return {
    title,
    content: fs.readFileSync(path.join(notesPath, title + ".txt"), { encoding: "utf-8", flag: "r" }),
  };
}
