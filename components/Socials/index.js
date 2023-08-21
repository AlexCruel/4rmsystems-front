import Image from "next/image";
import Link from "next/link";
import linkedin_1 from "@/public/icons/social/linkedin_1.svg";
import facebook_1 from "@/public/icons/social/facebook_1.svg";
import vk_1 from "@/public/icons/social/vk_1.svg";
import twitter_1 from "@/public/icons/social/twitter_1.svg";
import cn from "./styles.module.scss";

const Socials = ({ socials }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__title}>Поделиться в социальных сетях</div>
            <div className={cn.container__social}>
                <Link href={`${socials.facebook}`}><Image src={facebook_1} alt="Facebook" /></Link>
                <Link href={`${socials.twitter}`}><Image src={twitter_1} alt="Twitter" /></Link>
                <Link href={`${socials.linkedin}`}><Image src={linkedin_1} alt="LinkedIn" /></Link>
                <Link href={`${socials.vk}`}><Image src={vk_1} alt="VK" /></Link>
            </div>
        </div>
    );
}

export default Socials;