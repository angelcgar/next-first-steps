import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center mt-1">
        <h1>Hello Root Layout About</h1>
        {children}
      </main>
    </>
  );
}
