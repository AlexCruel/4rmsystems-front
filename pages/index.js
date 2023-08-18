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
import Head from "next/head";
import {
    getInfoData,
    getBannerData,
    getAboutData,
    getInformationData,
    getPartnerData,
    getCatalogData
} from "@/utils/functions";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const banner = await getBannerData();
    const about = await getAboutData();
    const information = await getInformationData("main");
    const partner = await getPartnerData();
    const catalog = await getCatalogData();

    return {
        props: {
            ...info,
            ...banner,
            ...about,
            ...information,
            ...partner,
            ...catalog
        }
    }
};

const Home = ({ ...props }) => {
    return (
      <>
          <Head>
              <title></title>
              <meta name="keywords" content="" />
              <meta name="description" content="" />
          </Head>
          <Header phones={props.info.phone_items} />
              <Banner banners={props.banner} />
              <Catalog catalog={props.catalog} />
              <About about={props.about} />
              <BlogNews />
              <Information info={props.information} />
              <Partner partner={props.partner} />
              <Projects />
              <Map />
              <ContactForm />
          <Footer info={props.info} menu={props.menu} socials={props.socials} />
      </>
  );
}

export default Home;