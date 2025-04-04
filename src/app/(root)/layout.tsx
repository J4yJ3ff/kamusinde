import Header from "@/components/Header";
import "../globals.css"; // Keep global styles import
import Footer from "@/components/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Removed <html> and <body> tags, they belong in the root layout
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
