import Head from "next/head";
import Home from "../components/Home";
import Navigation from "../components/navigation/Navigation";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Layout from "../components/Layout";
import Contact from "../components/Contact";

function Index() {
  return (
    <Layout>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
    </Layout>
  )
}

export default Index
