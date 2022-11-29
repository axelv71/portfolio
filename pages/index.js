import Head from "next/head";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import About from "../components/About";

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
            <About />
        </main>
    </>
  )
}

export default Index
