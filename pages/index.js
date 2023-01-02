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
        <div id="home" />
        <Home />
        <div id="about" />
        <About />
        <div id="experiences" />
        <Experiences />
        <div id="projects" />
        <Projects />
        <div id="contact" />
        <Contact />
    </Layout>
  )
}

export default Index
