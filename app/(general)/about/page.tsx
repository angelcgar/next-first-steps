import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Title",
  description: "About Title",
};

export default function AboutPage() {
  return (
    <>
      <span className="text-center text-5xl">About page</span>
    </>
  );
}
