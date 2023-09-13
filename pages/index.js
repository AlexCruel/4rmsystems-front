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
    getCatalogData, getProjectsComponentData, getBlogsCompData, getNewsCompData, getModalData, getPageData
} from "@/utils/functions";
import {useState} from "react";
import BlogComponent from "@/components/Blog";

export const getServerSideProps = async () => {
    const page = await getPageData("main");
    const info = await getInfoData();
    const banner = await getBannerData();
    const about = await getAboutData();
    const information = await getInformationData("main");
    const partner = await getPartnerData();
    const catalog = await getCatalogData();
    const projectsComponent = await getProjectsComponentData();
    const blogsComponent = await getBlogsCompData();
    const newsComponent = await getNewsCompData();
    const modalContact = await getModalData('contact_form');
    const modalCall = await getModalData('call_form');

    return {
        props: {
            ...page,
            ...info,
            ...banner,
            ...about,
            ...information,
            ...partner,
            ...catalog,
            ...projectsComponent,
            ...blogsComponent,
            ...newsComponent,
            modalContact,
            modalCall
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
              <title>{props.page.seo_title}</title>
              <meta name="keywords" content={props.page.seo_key} />
              <meta name="description" content={props.page.seo_description} />
          </Head>
          <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
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
          <ContactForm modal={props.modalContact.modal} />
          <Footer info={props.info} menu={props.menu} socials={props.socials} />
      </>
  );
}

export default Home;