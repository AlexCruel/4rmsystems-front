import {
    requestBlog,
    requestBlogPage, requestBlogTags, requestCompanyPage, requestContactsPage,
    requestFAQPage,
    requestMainPage, requestNews,
    requestNewsPage, requestNewsTags, requestPolicyPage, requestProductionPage, requestProjects,
    requestProjectsPage, requestProjectsTags
} from "@/utils/Sitemap/Sitemap.action";
import {
    EXTERNAL_DATA_URL_MAIN_PAGE
} from "@/utils/Sitemap/Sitemap.constant";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

function generateSiteMapProjects(projects, localeLang) {
    return `
     ${projects
        .map(({ slug, updated_at }) => {
            return `
       <url>
           <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/projects/${slug}</loc>
           <lastmod>${updated_at?.split('T')[0]}</lastmod>
           <priority>0.9</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function generateSiteMapBlog(blog, localeLang) {
    return `
     ${blog
        .map(({ slug, updated_at }) => {
            return `
       <url>
           <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/blog/${slug}</loc>
           <lastmod>${updated_at?.split('T')[0]}</lastmod>
           <priority>0.7</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function generateSiteMapNews(news, localeLang) {
    return `
     ${news
        .map(({ slug, updated_at }) => {
            return `
       <url>
           <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/news/${slug}</loc>
           <lastmod>${updated_at?.split('T')[0]}</lastmod>
           <priority>0.7</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function genereateSiteMapProjectsTagsPage(projectsTags, projectsPage, localeLang) {
    return `
     ${projectsTags
        .map(({ slug }) => {
            return `
       <url>
           <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/projects/tag/${slug}</loc>
           <lastmod>${projectsPage.updated_at?.split('T')[0]}</lastmod>
           <priority>0.8</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function genereateSiteMapNewsTagsPage(newsTags, newsPage, localeLang) {
    return `
     ${newsTags
        .map(({ slug }) => {
            return `
       <url>
           <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/news/tag/${slug}</loc>
           <lastmod>${newsPage.updated_at?.split('T')[0]}</lastmod>
           <priority>0.8</priority>
           <changefreq>monthly</changefreq>
       </url>
     `;
        })
        .join('')}
 `;
}

function genereateSiteMapBlogTagsPage(blogTags, blogPage, localeLang) {
    return `
     ${blogTags
        .map(({ slug }) => {
            return `
       <url>
           <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/blog/tag/${slug}</loc>
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
    productionPage,
    localeLang
) {
    return `
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}</loc>
            <lastmod>${mainPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>1</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/projects</loc>
            <lastmod>${projectsPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/blog</loc>
            <lastmod>${blogPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/news</loc>
            <lastmod>${newsPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/faq</loc>
            <lastmod>${faqPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/privacy-policy</loc>
            <lastmod>${policyPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/contacts</loc>
            <lastmod>${contactsPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/company</loc>
            <lastmod>${companyPage?.updated_at?.split('T')[0]}</lastmod>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL_MAIN_PAGE}${localeLang}/production</loc>
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
    let localeLang = "";

    if (locale !== "ru") {
        localeLang = `/${locale}`;
    }

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
        productionPage,
        localeLang
    );
    const sitemapProjects = generateSiteMapProjects(projects, localeLang);
    const sitemapBlog = generateSiteMapBlog(blog, localeLang);
    const sitemapNews = generateSiteMapNews(news, localeLang);
    const sitemapProjectsTags = genereateSiteMapProjectsTagsPage(projectsTags, projectsPage, localeLang);
    const sitemapNewsTags = genereateSiteMapNewsTagsPage(newsTags, newsPage, localeLang);
    const sitemapBlogTags = genereateSiteMapBlogTagsPage(blogTags, blogPage, localeLang);

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