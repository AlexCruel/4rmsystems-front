import cn from "./styles.module.scss";
import Information from "@/components/Information";
import Partner from "@/components/Partner";
import BlogNews from "@/components/Blog/BlogNews";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import link from "../../public/icons/link.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    getInfoData,
    getInformationData, getModalData, getNewsCompData,
    getPageData,
    getPartnerData
} from "@/utils/functions";
import Head from "next/head";
import PageContactForm from "@/components/Forms/PageContactForm";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const information = await getInformationData("main");
    const partner = await getPartnerData();
    const page = await getPageData("company");
    const newsComponent = await getNewsCompData();
    const modalSubscription = await getModalData('subscription_form');
    const modalCall = await getModalData('call_form');
    const modalQuestion = await getModalData('question_form');

    return {
        props: {
            ...info,
            ...information,
            ...partner,
            ...page,
            ...newsComponent,
            modalSubscription,
            modalCall,
            modalQuestion
        }
    }
};

const Company = ({ ...props }) => {
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
                    src={props.page.banner.url}
                    layout="responsive"
                    width={1000}
                    height={300}
                    alt={props.page.banner.alt} />
                <div className={cn.container__text}>
                    {parse(props.page.content)}
                </div>
                <Information info={props.information} />
                <Partner partner={props.partner} />
                <BlogNews newsComponent={props.newsComponent} />
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
            <PageContactForm
                modalSubscription={props.modalSubscription.modal}
                modalCall={props.modalCall.modal}
                modalQuestion={props.modalQuestion.modal}
            />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Company;