import Banner from "components/Banner";
import About from "@/components/About";
import Information from "@/components/Information";
import ContactForm from "@/components/Forms/ContactForm";
import Partner from "@/components/Partner";
import ProjectsSlider from "@/components/Projects/ProjectsSlider";
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
    getCatalogData, getProjectsComponentData, getBlogsCompData, getNewsCompData
} from "@/utils/functions";
import {useState} from "react";
import BlogComponent from "@/components/Blog";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const banner = await getBannerData();
    const about = await getAboutData();
    const information = await getInformationData("main");
    const partner = await getPartnerData();
    const catalog = await getCatalogData();
    const projectsComponent = await getProjectsComponentData();
    const blogsComponent = await getBlogsCompData();
    const newsComponent = await getNewsCompData();

    return {
        props: {
            ...info,
            ...banner,
            ...about,
            ...information,
            ...partner,
            ...catalog,
            ...projectsComponent,
            ...blogsComponent,
            ...newsComponent
        }
    }
};

const Home = ({ ...props }) => {
    const [blogState, setBlogState] = useState('news');

    const blogStateHandler = (type) => {
        setBlogState(type);
    }

    return (
      <>
          <Head>
              <title>Главная</title>
              <meta name="keywords" content="" />
              <meta name="description" content="" />
          </Head>
          <Header phones={props.info.phone_items} />
          <Banner banners={props.banner} />
          <Catalog catalog={props.catalog} />
          <About about={props.about} />
          <BlogComponent
              blogState={blogState}
              blogStateHandler={blogStateHandler}
              blogsComponent={props.blogsComponent}
              newsComponent={props.newsComponent}
          />
          <Information info={props.information} />
          <Partner partner={props.partner} />
          <ProjectsSlider projects={props.projectsComponent} />
          <Map />
          <ContactForm />
          <Footer info={props.info} menu={props.menu} socials={props.socials} />
      </>
  );
}

export default Home;