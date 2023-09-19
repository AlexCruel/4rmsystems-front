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

export const requestMainPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_MAIN_PAGE_API}/${lang}`);
export const requestProjectsPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_PROJECTS_PAGE_API}/${lang}`);
export const requestBlogPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_BLOG_PAGE_API}/${lang}`);
export const requestNewsPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_NEWS_PAGE_API}/${lang}`);
export const requestFAQPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_FAQ_PAGE_API}/${lang}`);
export const requestPolicyPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_POLICY_PAGE_API}/${lang}`);
export const requestContactsPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_CONTACTS_PAGE_API}/${lang}`);
export const requestCompanyPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_COMPANY_PAGE_API}/${lang}`);
export const requestProductionPage = async (lang) => await fetch(`${EXTERNAL_DATA_URL_PRODUCTION_PAGE_API}/${lang}`);

/* requests for dynamic pages */
export const requestProjects = async (lang) => await fetch(`${EXTERNAL_DATA_URL_PROJECTS_API}/${lang}`);
export const requestBlog = async (lang) => await fetch(`${EXTERNAL_DATA_URL_BLOG_API}/${lang}`);
export const requestNews = async (lang) => await fetch(`${EXTERNAL_DATA_URL_NEWS_API}/news/${lang}`);

/* requests for tags on pages */
export const requestProjectsTags = async (lang) => await fetch(`${EXTERNAL_DATA_URL_PROJECTS_TAGS_API}/${lang}`);
export const requestNewsTags = async (lang) => await fetch(`${EXTERNAL_DATA_URL_NEWS_TAGS_API}/${lang}`);
export const requestBlogTags = async (lang) => await fetch(`${EXTERNAL_DATA_URL_BLOG_TAGS_API}/${lang}`);