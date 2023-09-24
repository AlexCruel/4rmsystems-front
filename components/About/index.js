import cn from "./styles.module.scss";
import Image from "next/image";
import parse from "html-react-parser";
import {getCookie} from "cookies-next";
import {useEffect, useState} from "react";
import chevron_main_up from "@/public/icons/chevron_main_up.svg";
import chevron_main_down from "@/public/icons/chevron_main_down.svg";

const About = ({ about }) => {
    const lang = getCookie('lang');
    const [slicedDescription, setSlicedDescription] = useState([]);
    const [chevronState, setChevronState] = useState(false);

    useEffect(() => {
        if (about.description.length > 1500) {
            setSlicedDescription(prevState => about.description.slice(0, 1500));
        }
    }, [about]);

    const clickSliceHandler = () => {
        if (chevronState) {
            setSlicedDescription(prevState => about.description.slice(0, 1500));
        } else {
            setSlicedDescription(prevState => about.description);
        }
        setChevronState(!chevronState);
    }

    return (
        <div className={cn.container}>

            <div className={cn.content}>
                <div className={cn.container_title} suppressHydrationWarning>{lang === "ENG" ? "About company" : "О компании"}</div>
                <Image
                    width="552"
                    height="400"
                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${about.banner.url}`}
                    alt={about.banner.alt} />
                {
                    chevronState
                        ? parse(slicedDescription.toString())
                        : parse(`${slicedDescription}...`)
                }
            </div>
            <div className={cn.chevron}>
                {
                    chevronState
                        ? <Image onClick={clickSliceHandler} src={chevron_main_up} alt="Chevron" />
                        : <Image onClick={clickSliceHandler} src={chevron_main_down} alt="Chevron" />
                }
            </div>
        </div>
    );
}

export default About;