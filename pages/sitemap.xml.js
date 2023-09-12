/* main pages */
const EXTERNAL_DATA_URL_MAIN_PAGE = process.env.NEXT_PUBLIC_SITE_DOMAIN;
const EXTERNAL_DATA_URL_PROJECTS_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/projects`;
const EXTERNAL_DATA_URL_NEWS_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/news`;
const EXTERNAL_DATA_URL_BLOG_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/blog`;
const EXTERNAL_DATA_URL_FAQ_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/faq`;
const EXTERNAL_DATA_URL_POLICY_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/privacy-policy`;
const EXTERNAL_DATA_URL_CONTACTS_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/contacts`;
const EXTERNAL_DATA_URL_COMPANY_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/company`;
const EXTERNAL_DATA_URL_PRODUCTION_PAGE = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/production`;

/* dynamic pages */
const EXTERNAL_DATA_URL_PROJECTS_PAGES = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/projects`;
const EXTERNAL_DATA_URL_NEWS_PAGES = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/news`;
const EXTERNAL_DATA_URL_BLOG_PAGES = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/blog`;

/* api for main pages */
const EXTERNAL_DATA_URL_MAIN_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/main`;
const EXTERNAL_DATA_URL_PROJECTS_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/projects`;
const EXTERNAL_DATA_URL_BLOG_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/blog`;
const EXTERNAL_DATA_URL_NEWS_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/news`;
const EXTERNAL_DATA_URL_FAQ_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/faq`;
const EXTERNAL_DATA_URL_POLICY_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/privacy-policy`;
const EXTERNAL_DATA_URL_CONTACTS_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/contacts`;
const EXTERNAL_DATA_URL_COMPANY_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/company`;
const EXTERNAL_DATA_URL_PRODUCTION_PAGE_API = `${process.env.NEXT_PUBLIC_API_URL}/page/production`;

/* api for dynamic pages */
const EXTERNAL_DATA_URL_PROJECTS_API = `${process.env.NEXT_PUBLIC_API_URL}/projects`;
const EXTERNAL_DATA_URL_NEWS_API = `${process.env.NEXT_PUBLIC_API_URL}/news`;
const EXTERNAL_DATA_URL_BLOG_API = `${process.env.NEXT_PUBLIC_API_URL}/blog`;

/* api for tags on pages */
const EXTERNAL_DATA_URL_PROJECTS_TAGS_API = `${process.env.NEXT_PUBLIC_API_URL}/projects-tags`;
const EXTERNAL_DATA_URL_NEWS_TAGS_API = `${process.env.NEXT_PUBLIC_API_URL}/news-tags`;
const EXTERNAL_DATA_URL_BLOG_TAGS_API = `${process.env.NEXT_PUBLIC_API_URL}/blog-tags`;

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

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site

    /* requests for main pages */
    const requestMainPage = await fetch(EXTERNAL_DATA_URL_MAIN_PAGE_API);
    const requestProjectsPage = await fetch(EXTERNAL_DATA_URL_PROJECTS_PAGE_API);
    const requestBlogPage = await fetch(EXTERNAL_DATA_URL_BLOG_PAGE_API);
    const requestNewsPage = await fetch(EXTERNAL_DATA_URL_NEWS_PAGE_API);
    const requestFAQPage = await fetch(EXTERNAL_DATA_URL_FAQ_PAGE_API);
    const requestPolicyPage = await fetch(EXTERNAL_DATA_URL_POLICY_PAGE_API);
    const requestContactsPage = await fetch(EXTERNAL_DATA_URL_CONTACTS_PAGE_API);
    const requestCompanyPage = await fetch(EXTERNAL_DATA_URL_COMPANY_PAGE_API);
    const requestProductionPage = await fetch(EXTERNAL_DATA_URL_PRODUCTION_PAGE_API);

    /* requests for dynamic pages */
    const requestProjects = await fetch(EXTERNAL_DATA_URL_PROJECTS_API);
    const requestBlog = await fetch(EXTERNAL_DATA_URL_BLOG_API);
    const requestNews = await fetch(EXTERNAL_DATA_URL_NEWS_API);

    /* requests for tags on pages */
    const requestProjectsTags = await fetch(EXTERNAL_DATA_URL_PROJECTS_TAGS_API);
    const requestNewsTags = await fetch(EXTERNAL_DATA_URL_NEWS_TAGS_API);
    const requestBlogTags = await fetch(EXTERNAL_DATA_URL_BLOG_TAGS_API);

    /* data for main pages */
    const mainPage = await requestMainPage.json();
    const projectsPage = await requestProjectsPage.json();
    const blogPage = await requestBlogPage.json();
    const newsPage = await requestNewsPage.json();
    const faqPage = await requestFAQPage.json();
    const policyPage = await requestPolicyPage.json();
    const contactsPage = await requestContactsPage.json();
    const companyPage = await requestCompanyPage.json();
    const productionPage = await requestProductionPage.json();

    /* data for dynamic pages */
    const projects = await requestProjects.json();
    const blog = await requestBlog.json();
    const news = await requestNews.json();

    /* data for tags on pages */
    const projectsTags = await requestProjectsTags.json();
    const newsTags = await requestNewsTags.json();
    const blogTags = await requestBlogTags.json();

    // We generate the XML sitemap with the posts data
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