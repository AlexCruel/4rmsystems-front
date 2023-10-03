import cn from "./styles.module.scss";
import Image from "next/image";
import {useEffect, useState} from "react";
import useResize from "@/hooks/useResize";
import chevron_main_down from "../../public/icons/chevron_main_down.svg";
import chevron_main_up from "../../public/icons/chevron_main_up.svg";

function renderLogoItems(size, setSlicedItems, partner, chevronState = false) {
    if (size[0] <= 999 && size[0] > 789 && chevronState !== true) {
        setSlicedItems((prevState) => partner.logo_items.slice(0, 12));
    } else if (size[0] <= 789 && size[0] > 579 && chevronState !== true) {
        setSlicedItems((prevState) => partner.logo_items.slice(0, 9));
    } else if (size[0] <= 579 && size[0] > 369 && chevronState !== true) {
        setSlicedItems((prevState) => partner.logo_items.slice(0, 6));
    }  else if (size[0] <= 369 && chevronState !== true) {
        setSlicedItems((prevState) => partner.logo_items.slice(0, 3));
    } else {
        setSlicedItems((prevState) => partner.logo_items.slice(0, 15));
    }
}

const Partner = ({ partner }) => {
    const [slicedItems, setSlicedItems] = useState([]);
    const [chevronState, setChevronState] = useState(false);
    const size = useResize();

    useEffect(() => {
        renderLogoItems(size, setSlicedItems, partner, chevronState);
    }, [partner, size]);

    const clickSliceHandler = () => {
        if (chevronState) {
            renderLogoItems(size, setSlicedItems, partner);
        } else {
            setSlicedItems(prevState => partner.logo_items);
        }
        setChevronState(!chevronState);
    }

    return (
        <div className={cn.partner_container}>
            <h2>{partner.title}</h2>
            <div className={cn.logo} itemScope itemType="https://schema.org/ImageObject">
                {slicedItems.map((item, index) => {
                    return (
                        <img
                            itemProp="contentUrl"
                            key={index}
                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.logo}`}
                            //width={110}
                            //height={110}
                            alt="Partner" />
                    );
                })}
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

export default Partner;