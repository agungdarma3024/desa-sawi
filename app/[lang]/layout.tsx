import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desa Wisata Sawai",
  description: "Jelajahi pesona keindahan laut dan tebing karst di Desa Sawai, Maluku Tengah.",
};

// PERBAIKAN: Menghapus 'Readonly' dan menggunakan parameter 'props' langsung
// agar lolos dari pengecekan tipe data validator Next.js
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Tunggu params untuk mendapatkan bahasa saat ini
  const { lang } = await props.params;

  return (
    <html lang={lang}> 
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* === NAVBAR TRANSPARAN === */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/10 backdrop-blur-sm text-white border-b border-white/10">
          <div className="text-2xl font-bold tracking-widest">
            <Link href={`/${lang}`}>SAWAI</Link>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href={`/${lang}#destinasi`} className="hover:text-gray-300 transition hidden md:block">Destinasi</Link>
            <Link href={`/${lang}#aktivitas`} className="hover:text-gray-300 transition hidden md:block">Aktivitas</Link>
            
            <div className="flex items-center gap-2 border-l border-white/40 pl-4 ml-2">
              <Link 
                href="/id" 
                className={lang === 'id' ? 'font-bold text-white underline underline-offset-4' : 'text-gray-300 hover:text-white transition'}
              >
                ID
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/en" 
                className={lang === 'en' ? 'font-bold text-white underline underline-offset-4' : 'text-gray-300 hover:text-white transition'}
              >
                EN
              </Link>
            </div>
          </div>
        </nav>

        {/* Gunakan props.children di sini */}
        {props.children}
        
      </body>
    </html>
  );
}