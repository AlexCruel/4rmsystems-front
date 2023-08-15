import Banner from "components/Banner";
import About from "@/components/About";
import Information from "@/components/Information";
import ContactForm from "@/components/Forms/ContactForm";
import BlogNews from "@/components/Blog/BlogNews";
import Partner from "@/components/Partner";
import Projects from "@/components/Projects";
import Map from "@/components/Map";
import Catalog from "@/components/Catalog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getFooterMenu, getInfo, getSocials} from "@/pages/api/hello";

export const getStaticProps = async () => {
    const info = await getInfo();
    const menu = await getFooterMenu();
    const socials = await getSocials();

    return {
        props: {
            info,
            menu,
            socials
        }
    }
}

const Home = ({ ...props }) => {
    return (
      <>
          <Header phones={props.info.phone_items} />
        <Banner />
        <Catalog />
        <About />
        <BlogNews />
        <Information />
        <Partner />
        <Projects />
        <Map />
        <ContactForm />
          <Footer info={props.info} menu={props.menu} socials={props.socials} />
      </>
  );
}

export default Home;