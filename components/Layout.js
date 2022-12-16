import Navigation from "./Navigation";
import Head from "next/head";

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
            </main>
        </div>
    )
}
