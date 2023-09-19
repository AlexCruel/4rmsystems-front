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
import {getCookie} from "cookies-next";

export const getServerSideProps = async ({resolvedUrl, req, res}) => {
    const lang = getCookie('lang', {req, res});

    const page = await getPageData("main");
    const info = await getInfoData(lang);
    const banner = await getBannerData(lang);
    const about = await getAboutData(lang);
    const information = await getInformationData("main", lang);
    const partner = await getPartnerData(lang);
    const catalog = await getCatalogData(lang);
    const projectsComponent = await getProjectsComponentData(lang);
    const blogsComponent = await getBlogsCompData(lang);
    const newsComponent = await getNewsCompData(lang);
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
            modalCall,
            resolvedUrl
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
              <meta property="og:title" content={props.page.seo_h1} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
              {/*<meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />*/}
              <meta property="og:description" content={props.page.seo_description} />
              <meta property="og:site_name" content="4RM Systems" />
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