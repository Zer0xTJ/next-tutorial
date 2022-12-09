import Image from "next/image";

export default function MainLayout({ children }) {
  return (
    <div className="container">
      <Image src="/images/pic.jpg" alt="pic" width={75} height={75} />
      <h6>Zer0xTJ</h6>
      <main>{children}</main>
    </div>
  );
}
