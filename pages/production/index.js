import {getInfoData, getInformationData, getPageData, getPartnerData} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import cn from "./styles.module.scss";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import link from "@/public/icons/link.svg";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import PageContactForm from "@/components/Forms/PageContactForm";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const partner = await getPartnerData();
    const page = await getPageData("production");

    return {
        props: {
            ...info,
            ...partner,
            ...page
        }
    }
};

const Production = ({ ...props }) => {
    return (
        <>
            <Head>
                <title>{props.page.seo_title}</title>
                <meta name="keywords" content={props.page.seo_key} />
                <meta name="description" content={props.page.seo_description} />
            </Head>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.page.name}</h1>
                </div>
                <div className={cn.container__text}>
                    {parse(props.page.pre_content)}
                </div>
                <Image
                    src={`http://localhost:8888/4rmsystems-server/storage/app/media${props.page.banner}`}
                    layout="responsive"
                    width={1000}
                    height={300}
                    alt="Banner" />
                <div className={cn.container__text}>
                    {parse(props.page.content)}
                </div>
                <Partner partner={props.partner} />
                <div className={cn.container__text}>
                    <ul>
                        {props.page.links.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={`${item.link}`}>{item.name}
                                        <Image src={link} alt="Link" />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Production;