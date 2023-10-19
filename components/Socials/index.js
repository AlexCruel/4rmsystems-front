import Image from "next/image";
import Link from "next/link";
import linkedin_1 from "@/public/icons/social/linkedin_1.svg";
import facebook_1 from "@/public/icons/social/facebook_1.svg";
import vk_1 from "@/public/icons/social/vk_1.svg";
import twitter_1 from "@/public/icons/social/twitter_1.svg";
import cn from "./styles.module.scss";

const Socials = ({ lang, socials, resolvedUrl, text }) => {
    const locale = lang === "RU" ? "" : "/en";

    return (
        <div className={cn.container}>
            <div className={cn.container__title}>
                {
                    lang === "RU"
                        ? "Поделиться в социальных сетях"
                        : "Share on social networks"
                }
            </div>
            <div className={cn.container__social}>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_DOMAIN}${locale}${resolvedUrl}`} target="_blank">
                    <Image src={facebook_1} alt="Facebook" />
                </Link>
                <Link href={`https://twitter.com/intent/tweet?text=${text}&url=${process.env.NEXT_PUBLIC_SITE_DOMAIN}${locale}${resolvedUrl}`} target="_blank">
                    <Image src={twitter_1} alt="Twitter" />
                </Link>
                <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_DOMAIN}${locale}${resolvedUrl}&title=${text}`} target="_blank">
                    <Image src={linkedin_1} alt="LinkedIn" />
                </Link>
                <Link href={`https://vk.com/share.php?url=${process.env.NEXT_PUBLIC_SITE_DOMAIN}${locale}${resolvedUrl}&title=${text}`} target="_blank">
                    <Image src={vk_1} alt="VK" />
                </Link>
            </div>
        </div>
    );
}

export default Socials;