import Footer from "components/layouts/footer";
import IntroHeader from "components/layouts/introHeader";
import { ReactNode } from "react";

export default function IntroLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="w-full h-full max-h-screen overflow-y-auto">
      <IntroHeader />
      {children}
      <Footer />
    </section>
  );
}
