import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import ChatWidget from "@/src/components/ui/ChatWidget";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ChatWidget />
    </>
  );
}
