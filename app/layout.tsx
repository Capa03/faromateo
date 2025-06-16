import Footer from "../components/footer";
import Topbar from "../components/topbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col h-screen overflow-hidden"
      >
        <header className="flex-none">
          <Topbar />
        </header>
        <main className="flex-grow overflow-y-auto">
        {children}
        </main>
        <footer className="flex-none">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
