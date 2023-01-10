import Navigation from "./navigation/Navigation";
import Head from "next/head";
import Footer from "./section/Footer";

export default function Layout({ children }) {
    return (
        <div className="bg-background">
            <Head>
                <title>Axel VION 🚀</title>
                <meta name="theme-color" content="#041A34" />
            </Head>
            <main className="bg-background min-h-screen">
                <Navigation />
                {children}
                <Footer />
            </main>
        </div>
    )
}
