import { LanguageProvider } from "../context/LanguageContext";
import "../index.css";

export const metadata = {
  title: "No Limits",
  description: "High-performance training ritual engineered for the disciplined.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-[#f4efe7] antialiased">
        <LanguageProvider>
          <div className="min-h-screen relative overflow-x-hidden" id="app-root">
            {/* Prime grainy atmospheric noise layer over the whole app */}
            <div
              className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] mix-blend-overlay"
              style={{
                backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
              }}
              id="noise-overlay"
            />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
