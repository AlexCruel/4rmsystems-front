import Header from "@/components/Header";
import Banner from "components/Banner";
import About from "@/components/About";
import Information from "@/components/Information";
import ContactForm from "@/components/Forms/ContactForm";
import Footer from "@/components/Footer";
import BlogNews from "@/components/Blog/BlogNews";
import Partner from "@/components/Partner";
import Projects from "@/components/Projects";

const Home = () => {
  return (
      <>
        <Header />
        <Banner />
        <About />
        <BlogNews />
        <Information />
        <Partner />
        <Projects />
        <ContactForm />
        <Footer />
      </>
  );
}

export default Home;