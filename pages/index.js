import Banner from "components/Banner";
import About from "@/components/About";
import Information from "@/components/Information";
import ContactForm from "@/components/Forms/ContactForm";
import BlogNews from "@/components/Blog/BlogNews";
import Partner from "@/components/Partner";
import Projects from "@/components/Projects";
import Map from "@/components/Map";
import Catalog from "@/components/Catalog";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getInfo} from "@/store/Info/Info.action";

const Home = () => {
    const info = useSelector(store => store?.info?.info);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfo());
    }, [dispatch]);

    return (
      <>
        <Banner />
        <Catalog />
        <About />
        <BlogNews />
        <Information />
        <Partner />
        <Projects />
        <Map />
        <ContactForm />
      </>
  );
}

export default Home;