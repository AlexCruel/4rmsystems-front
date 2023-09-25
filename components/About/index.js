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
    const [showChevron, setShowChevron] = useState(true);

    useEffect(() => {
        if (about.description.length > 1500) {
            setSlicedDescription(prevState => about.description.slice(0, 1500));
        } else {
            setSlicedDescription(about.description);
            setShowChevron(false);
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
                <h1 className={cn.container_title} suppressHydrationWarning>{lang === "ENG" ? "About company 4RM Systems" : "О компании 4RM Systems"}</h1>
                <Image
                    width="552"
                    height="400"
                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${about.banner.url}`}
                    alt={about.banner.alt} />
                { showChevron ?
                    chevronState
                        ? parse(slicedDescription.toString())
                        : parse(`${slicedDescription}...`)
                    : parse(slicedDescription.toString())
                }
            </div>
            <div className={cn.chevron}>
                { showChevron ?
                    chevronState
                        ? <Image onClick={clickSliceHandler} src={chevron_main_up} alt="Chevron" />
                        : <Image onClick={clickSliceHandler} src={chevron_main_down} alt="Chevron" />
                    : ""
                }
            </div>
        </div>
    );
}

export default About;