import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "HiveCRM",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-slate-50">
        <Navbar />
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
