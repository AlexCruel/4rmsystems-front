import {
    getAbout,
    getBanner, getBlog, getBlogCards,
    getBlogComp, getBlogPage, getBlogSingle, getBlogTagName, getBlogTags, getBPinnedSec, getBSingleTags,
    getCatalog,
    getFooterMenu,
    getInfo,
    getInformation, getModal,
    getNews, getNewsCards,
    getNewsComp,
    getNewsPage, getNewsSingle, getNewsTags, getNPinnedSec, getNSingleTags,
    getPage,
    getPartner,
    getProject,
    getProjects,
    getProjectsCards,
    getProjectsComponent,
    getProjectsPage, getProjectsTagName,
    getProjectsTags,
    getProjectTags,
    getSocials, getTagBlogs, getTagBlogsPage, getTagNews, getTagNewsPage,
    getTagPage,
    getTagProjects,
    getTagsProjectsCount
} from "@/pages/api/content";

export const getInfoData = async (lang) => {
    const info = await getInfo(lang);
    const menu = await getFooterMenu(lang);
    const socials = await getSocials();

    return {
        info, menu, socials
    };
}

export const getBannerData = async () => {
    const banner = await getBanner();

    return {
        banner
    };
}

export const getAboutData = async () => {
    const about = await getAbout();

    return {
        about
    };
}

export const getInformationData = async (type) => {
    const information = await getInformation(type);

    return {
        information
    };
}

export const getPartnerData = async () => {
    const partner = await getPartner();

    return {
        partner
    };
}

export const getPageData = async (code, lang) => {
    const page = await getPage(code, lang);

    return {
        page
    };
}

export const getCatalogData = async () => {
    const catalog = await getCatalog();

    return {
        catalog
    };
}

export const getProjectsComponentData = async () => {
    const projectsComponent = await getProjectsComponent();

    return {
        projectsComponent
    };
}

export const getProjectsCardsData = async (lang) => {
    const projectsCards = await getProjectsCards(lang);

    return {
        projectsCards
    };
}

export const getProjectsData = async (lang) => {
    const projects = await getProjects(lang);

    return {
        projects
    };
}

export const getProjectData = async (slug, lang) => {
    const project = await getProject(slug, lang);

    return {
        project
    };
}

export const getProjectsPageData = async (id, lang) => {
    const projectsPage = await getProjectsPage(id, lang);

    return {
        projectsPage
    };
}

export const getProjectsTagsData = async (lang) => {
    const projectsTags = await getProjectsTags(lang);

    return {
        projectsTags
    };
}

export const getNewsTagsData = async () => {
    const newsTags = await getNewsTags();

    return {
        newsTags
    };
}

export const getTagPageData = async (tag_id, id, lang) => {
    const tagPage = await getTagPage(tag_id, id, lang);

    return {
        tagPage
    };
}

export const getTagProjectsData = async (tag_id, lang) => {
    const tagProjects = await getTagProjects(tag_id, lang);

    return {
        tagProjects
    };
}

export const getTagsProjectsCountData = async () => {
    const tagsProjectsCount = await getTagsProjectsCount();

    return {
        tagsProjectsCount
    };
}

export const getProjectTagsData = async (id) => {
    const projectTags = await getProjectTags(id);

    return {
        projectTags
    };
}

export const getBlogsCompData = async () => {
    const blogsComponent = await getBlogComp();

    return {
        blogsComponent
    };
}

export const getNewsCompData = async () => {
    const newsComponent = await getNewsComp();

    return {
        newsComponent
    };
}

export const getNewsData = async () => {
    const news = await getNews();

    return {
        news
    };
}

export const getNewsPageData = async (id) => {
    const newsPage = await getNewsPage(id);

    return {
        newsPage
    };
}

export const getNPinnedSecData = async () => {
    const nPinnedSec = await getNPinnedSec();

    return {
        nPinnedSec
    };
}

export const getNewsSingleData = async (slug) => {
    const newsSingle = await getNewsSingle(slug);

    return {
        newsSingle
    };
}

export const getNSingleTagsData = async (id) => {
    const nSingleTags = await getNSingleTags(id);

    return {
        nSingleTags
    };
}

export const getNewsCardsData = async () => {
    const newsCards = await getNewsCards();

    return {
        newsCards
    };
}

export const getTagNewsData = async (tag_id) => {
    const tagNews = await getTagNews(tag_id);

    return {
        tagNews
    };
}

export const getTagNewsPageData = async (tag_id, id) => {
    const tagNewsPage = await getTagNewsPage(tag_id, id);

    return {
        tagNewsPage
    };
}

export const getBPinnedSecData = async () => {
    const bPinnedSec = await getBPinnedSec();

    return {
        bPinnedSec
    };
}

export const getBlogData = async () => {
    const blog = await getBlog();

    return {
        blog
    };
}

export const getBlogPageData = async (id) => {
    const blogPage = await getBlogPage(id);

    return {
        blogPage
    };
}

export const getBlogTagsData = async () => {
    const blogTags = await getBlogTags();

    return {
        blogTags
    };
}

export const getBlogSingleData = async (slug) => {
    const blogSingle = await getBlogSingle(slug);

    return {
        blogSingle
    };
}

export const getBlogCardsData = async () => {
    const blogCards = await getBlogCards();

    return {
        blogCards
    };
}

export const getBSingleTagsData = async (id) => {
    const bSingleTags = await getBSingleTags(id);

    return {
        bSingleTags
    };
}

export const getTagBlogsData = async (tag_id) => {
    const tagBlogs = await getTagBlogs(tag_id);

    return {
        tagBlogs
    };
}

export const getTagBlogsPageData = async (tag_id, id) => {
    const tagBlogsPage = await getTagBlogsPage(tag_id, id);

    return {
        tagBlogsPage
    };
}

export const getModalData = async (type) => {
    const modal = await getModal(type);

    return {
        modal
    };
}

export const getProjectsTagNameData = async (slug, lang) => {
    const tagName = await getProjectsTagName(slug, lang);

    return {
        tagName
    };
}

export const getBlogTagNameData = async (slug) => {
    const tagName = await getBlogTagName(slug);

    return {
        tagName
    };
}