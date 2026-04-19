import Navbar from "../components/Navbar";

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar role="instructor" />
      {/* Container below nav */}
      <main className="pt-24 min-h-screen bg-gray-50">{children}</main>
    </>
  );
}