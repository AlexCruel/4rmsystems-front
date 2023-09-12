/* requests for main pages */
import {
    EXTERNAL_DATA_URL_MAIN_PAGE_API,
    EXTERNAL_DATA_URL_PROJECTS_PAGE_API,
    EXTERNAL_DATA_URL_BLOG_PAGE_API,
    EXTERNAL_DATA_URL_NEWS_PAGE_API,
    EXTERNAL_DATA_URL_FAQ_PAGE_API,
    EXTERNAL_DATA_URL_POLICY_PAGE_API,
    EXTERNAL_DATA_URL_CONTACTS_PAGE_API,
    EXTERNAL_DATA_URL_COMPANY_PAGE_API,
    EXTERNAL_DATA_URL_PRODUCTION_PAGE_API,
    EXTERNAL_DATA_URL_PROJECTS_API,
    EXTERNAL_DATA_URL_BLOG_API,
    EXTERNAL_DATA_URL_NEWS_API,
    EXTERNAL_DATA_URL_PROJECTS_TAGS_API,
    EXTERNAL_DATA_URL_NEWS_TAGS_API,
    EXTERNAL_DATA_URL_BLOG_TAGS_API
} from "@/utils/Sitemap/Sitemap.constant";

export const requestMainPage = await fetch(EXTERNAL_DATA_URL_MAIN_PAGE_API);
export const requestProjectsPage = await fetch(EXTERNAL_DATA_URL_PROJECTS_PAGE_API);
export const requestBlogPage = await fetch(EXTERNAL_DATA_URL_BLOG_PAGE_API);
export const requestNewsPage = await fetch(EXTERNAL_DATA_URL_NEWS_PAGE_API);
export const requestFAQPage = await fetch(EXTERNAL_DATA_URL_FAQ_PAGE_API);
export const requestPolicyPage = await fetch(EXTERNAL_DATA_URL_POLICY_PAGE_API);
export const requestContactsPage = await fetch(EXTERNAL_DATA_URL_CONTACTS_PAGE_API);
export const requestCompanyPage = await fetch(EXTERNAL_DATA_URL_COMPANY_PAGE_API);
export const requestProductionPage = await fetch(EXTERNAL_DATA_URL_PRODUCTION_PAGE_API);

/* requests for dynamic pages */
export const requestProjects = await fetch(EXTERNAL_DATA_URL_PROJECTS_API);
export const requestBlog = await fetch(EXTERNAL_DATA_URL_BLOG_API);
export const requestNews = await fetch(EXTERNAL_DATA_URL_NEWS_API);

/* requests for tags on pages */
export const requestProjectsTags = await fetch(EXTERNAL_DATA_URL_PROJECTS_TAGS_API);
export const requestNewsTags = await fetch(EXTERNAL_DATA_URL_NEWS_TAGS_API);
export const requestBlogTags = await fetch(EXTERNAL_DATA_URL_BLOG_TAGS_API);