import {
    requestBlog,
    requestBlogPage, requestBlogTags, requestCompanyPage, requestContactsPage,
    requestFAQPage,
    requestMainPage, requestNews,
    requestNewsPage, requestNewsTags, requestPolicyPage, requestProductionPage, requestProjects,
    requestProjectsPage, requestProjectsTags
} from "@/utils/Sitemap/Sitemap.action";
import {
    EXTERNAL_DATA_URL_BLOG_PAGE, EXTERNAL_DATA_URL_BLOG_PAGES,
    EXTERNAL_DATA_URL_COMPANY_PAGE,
    EXTERNAL_DATA_URL_CONTACTS_PAGE,
    EXTERNAL_DATA_URL_FAQ_PAGE,
    EXTERNAL_DATA_URL_MAIN_PAGE, EXTERNAL_DATA_URL_MAIN_PAGE_API,
    EXTERNAL_DATA_URL_NEWS_PAGE, EXTERNAL_DATA_URL_NEWS_PAGES,
    EXTERNAL_DATA_URL_POLICY_PAGE, EXTERNAL_DATA_URL_PRODUCTION_PAGE,
    EXTERNAL_DATA_URL_PROJECTS_PAGE, EXTERNAL_DATA_URL_PROJECTS_PAGES
} from "@/utils/Sitemap/Sitemap.constant";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

function generateSiteMapProjects(projects) {
    return `
     ${projects
        .map(({ slug, updated_at }) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL_PROJECTS_PAGES}/${slug}`}</loc>
           <lastmod>${updated_at?.split('T')[0]}</lastmod>
           <priority>0.9</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function generateSiteMapBlog(blog) {
    return `
     ${blog
        .map(({ slug, updated_at }) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL_BLOG_PAGES}/${slug}`}</loc>
           <lastmod>${updated_at?.split('T')[0]}</lastmod>
           <priority>0.7</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function generateSiteMapNews(news) {
    return `
     ${news
        .map(({ slug, updated_at }) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL_NEWS_PAGES}/${slug}`}</loc>
           <lastmod>${updated_at?.split('T')[0]}</lastmod>
           <priority>0.7</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function genereateSiteMapProjectsTagsPage(projectsTags, projectsPage) {
    return `
     ${projectsTags
        .map(({ slug }) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL_MAIN_PAGE}/projects/tag/${slug}`}</loc>
           <lastmod>${projectsPage.updated_at?.split('T')[0]}</lastmod>
           <priority>0.8</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function genereateSiteMapNewsTagsPage(newsTags, newsPage) {
    return `
     ${newsTags
        .map(({ slug }) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL_MAIN_PAGE}/news/tag/${slug}`}</loc>
           <lastmod>${newsPage.updated_at?.split('T')[0]}</lastmod>
           <priority>0.8</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function genereateSiteMapBlogTagsPage(blogTags, blogPage) {
    return `
     ${blogTags
        .map(({ slug }) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL_MAIN_PAGE}/blog/tag/${slug}`}</loc>
           <lastmod>${blogPage.updated_at?.split('T')[0]}</lastmod>
           <priority>0.8</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function generateSiteMapPage(
    mainPage,
    projectsPage,
    blogPage,
    newsPage,
    faqPage,
    policyPage,
    contactsPage,
    companyPage,
    productionPage
) {
    return `
        <url>
            <loc>${`${EXTERNAL_DATA_URL_MAIN_PAGE}`}</loc>
            <lastmod>${mainPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>1</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_PROJECTS_PAGE}`}</loc>
            <lastmod>${projectsPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_BLOG_PAGE}`}</loc>
            <lastmod>${blogPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_NEWS_PAGE}`}</loc>
            <lastmod>${newsPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_FAQ_PAGE}`}</loc>
            <lastmod>${faqPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_POLICY_PAGE}`}</loc>
            <lastmod>${policyPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_CONTACTS_PAGE}`}</loc>
            <lastmod>${contactsPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_COMPANY_PAGE}`}</loc>
            <lastmod>${companyPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${`${EXTERNAL_DATA_URL_PRODUCTION_PAGE}`}</loc>
            <lastmod>${productionPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
    `
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ req, res, locale }) {
    setLocalizationCookie(req, res, locale);
    const lang = getCookie('lang', {req, res});

    // We make an API call to gather the URLs for our site

    /* data for main pages */
    const mainPage = await (await requestMainPage(lang)).json();
    const projectsPage = await (await requestProjectsPage(lang)).json();
    const blogPage = await (await requestBlogPage(lang)).json();
    const newsPage = await (await requestNewsPage(lang)).json();
    const faqPage = await (await requestFAQPage(lang)).json();
    const policyPage = await (await requestPolicyPage(lang)).json();
    const contactsPage = await (await requestContactsPage(lang)).json();
    const companyPage = await (await requestCompanyPage(lang)).json();
    const productionPage = await (await requestProductionPage(lang)).json();

    /* data for dynamic pages */
    const projects = await (await requestProjects(lang)).json();
    const blog = await (await requestBlog(lang)).json();
    const news = await (await requestNews(lang)).json();

    /* data for tags on pages */
    const projectsTags = await (await requestProjectsTags(lang)).json();
    const newsTags = await  (await requestNewsTags(lang)).json();
    const blogTags = await  (await requestBlogTags(lang)).json();

    // We generate the XML Sitemap with the posts data
    const sitemapPage = generateSiteMapPage(
        mainPage,
        projectsPage,
        blogPage,
        newsPage,
        faqPage,
        policyPage,
        contactsPage,
        companyPage,
        productionPage
    );
    const sitemapProjects = generateSiteMapProjects(projects);
    const sitemapBlog = generateSiteMapBlog(blog);
    const sitemapNews = generateSiteMapNews(news);
    const sitemapProjectsTags = genereateSiteMapProjectsTagsPage(projectsTags, projectsPage);
    const sitemapNewsTags = genereateSiteMapNewsTagsPage(newsTags, newsPage);
    const sitemapBlogTags = genereateSiteMapBlogTagsPage(blogTags, blogPage);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write('<?xml version="1.0" encoding="UTF-8"?>\n   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

    res.write(sitemapPage);
    res.write(sitemapProjectsTags);
    res.write(sitemapNewsTags);
    res.write(sitemapBlogTags);
    res.write(sitemapProjects);
    res.write(sitemapBlog);
    res.write(sitemapNews);

    res.write('</urlset>')
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;