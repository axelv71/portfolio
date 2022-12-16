import Head from "next/head";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Layout from "../components/Layout";

function Index() {
  return (
    <Layout>
        <Home />
        <About />
        <Experiences />
        <Projects />
    </Layout>
  )
}

export default Index
