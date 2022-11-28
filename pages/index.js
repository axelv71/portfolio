import Head from "next/head";
import Home from "../components/Home";
import Navigation from "../components/Navigation";

function Index() {
  return (
    <>
        <Head>
            <title>Axel VION 🚀</title>
            <meta name="theme-color" content="#041A34" />
        </Head>
        <main className="bg-background">
            <Navigation />
            <Home />
        </main>
    </>
  )
}

export default Index
