import Navbar from "../components/Navbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar role="student" />
      {/* Container below nav */}
      <main className="pt-24 min-h-screen bg-gray-50">{children}</main>
    </>
  );
}