import Head from "next/head";
import Home from "../components/section/Home";
import Navigation from "../components/navigation/Navigation";
import About from "../components/section/About";
import Experiences from "../components/section/Experiences";
import Projects from "../components/section/Projects";
import Layout from "../components/Layout";
import Contact from "../components/section/Contact";

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
