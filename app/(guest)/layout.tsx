import Navbar from "../components/Navbar";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar role="guest" />
      {children}
    </>
  );
}