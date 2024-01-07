import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({children}) {
    return (
         <>
            <section className="bg-slate-50 w-full h-screen">
                <Header />
                {children}
            </section>
         </>
  )
}