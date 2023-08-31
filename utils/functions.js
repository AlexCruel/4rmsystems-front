import {
    getAbout,
    getBanner,
    getBlogComp,
    getCatalog,
    getFooterMenu,
    getInfo,
    getInformation,
    getNews,
    getNewsComp,
    getNewsPage, getNewsTags, getNPinnedSec,
    getPage,
    getPartner,
    getProject,
    getProjects,
    getProjectsCards,
    getProjectsComponent,
    getProjectsPage,
    getProjectsTags,
    getProjectTags,
    getSocials,
    getTagPage,
    getTagProjects,
    getTagsProjectsCount
} from "@/pages/api/hello";

export const getInfoData = async () => {
    const info = await getInfo();
    const menu = await getFooterMenu();
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

export const getPageData = async (code) => {
    const page = await getPage(code);

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

export const getProjectsCardsData = async () => {
    const projectsCards = await getProjectsCards();

    return {
        projectsCards
    };
}

export const getProjectsData = async () => {
    const projects = await getProjects();

    return {
        projects
    };
}

export const getProjectData = async (slug) => {
    const project = await getProject(slug);

    return {
        project
    };
}

export const getProjectsPageData = async (id) => {
    const projectsPage = await getProjectsPage(id);

    return {
        projectsPage
    };
}

export const getProjectsTagsData = async () => {
    const projectsTags = await getProjectsTags();

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

export const getTagPageData = async (tag_id, id) => {
    const tagPage = await getTagPage(tag_id, id);

    return {
        tagPage
    };
}

export const getTagProjectsData = async (tag_id) => {
    const tagProjects = await getTagProjects(tag_id);

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