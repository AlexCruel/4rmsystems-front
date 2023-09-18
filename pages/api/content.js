// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = process.env.NEXT_PUBLIC_API_URL;

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const getInfo = async(lang) => {
  const request = await fetch(`${url}/info/${lang}`);

  return await request.json();
}

export const getFooterMenu = async(lang) => {
  const request = await fetch(`${url}/footer-menu/${lang}`);

  return await request.json();
}

export const getSocials = async() => {
  const request = await fetch(`${url}/socials`);

  return await request.json();
}

export const getBanner = async() => {
  const request = await fetch(`${url}/banner`);

  return await request.json();
}

export const getAbout = async() => {
  const request = await fetch(`${url}/about`);

  return await request.json();
}

export const getInformation = async(type) => {
  const request = await fetch(`${url}/information/${type}`);

  return await request.json();
}

export const getPartner = async() => {
  const request = await fetch(`${url}/partner`);

  return await request.json();
}

export const getPage = async(code, lang) => {
  const request = await fetch(`${url}/page/${code}/${lang}`);

  return await request.json();
}

export const getCatalog = async() => {
  const request = await fetch(`${url}/catalog`);

  return await request.json();
}

export const getProjectsComponent = async() => {
  const request = await fetch(`${url}/projects-component`);

  return await request.json();
}

export const getProjectsCards = async(lang) => {
  const request = await fetch(`${url}/projects-cards/${lang}`);

  return await request.json();
}

export const getProjects = async(lang) => {
  const request = await fetch(`${url}/projects/${lang}`);

  return await request.json();
}

export const getProject = async(slug, lang) => {
  const request = await fetch(`${url}/projects/project/${slug}/${lang}`);

  return await request.json();
}

export const getProjectsPage = async(id, lang) => {
  const request = await fetch(`${url}/projects/page/${id}/${lang}`);

  return await request.json();
}

export const getProjectsTags = async(lang) => {
  const request = await fetch(`${url}/projects-tags/${lang}`);

  return await request.json();
}

export const getNewsTags = async() => {
  const request = await fetch(`${url}/news-tags`);

  return await request.json();
}

export const getTagPage = async(tag_id, id, lang) => {
  const request = await fetch(`${url}/projects/tag/${tag_id}/page/${id}/${lang}`);

  return await request.json();
}

export const getTagProjects = async(tag_id, lang) => {
  const request = await fetch(`${url}/projects/tag/${tag_id}/${lang}`);

  return await request.json();
}

export const getTagsProjectsCount = async() => {
  const request = await fetch(`${url}/tags-projects-count`);

  return await request.json();
}

export const getProjectTags = async(id, lang) => {
  const request = await fetch(`${url}/project-tags/${id}/${lang}`);

  return await request.json();
}

export const getBlogComp = async() => {
  const request = await fetch(`${url}/blog-component/blogs`);

  return await request.json();
}

export const getNewsComp = async() => {
  const request = await fetch(`${url}/blog-component/news`);

  return await request.json();
}

export const getNews = async() => {
  const request = await fetch(`${url}/news`);

  return await request.json();
}

export const getNewsPage = async(id) => {
  const request = await fetch(`${url}/news/page/${id}`);

  return await request.json();
}

export const getNPinnedSec = async() => {
  const request = await fetch(`${url}/news-pinned-secondary`);

  return await request.json();
}

export const getNewsSingle = async(slug) => {
  const request = await fetch(`${url}/news/${slug}`);

  return await request.json();
}

export const getNSingleTags = async(id) => {
  const request = await fetch(`${url}/news-tags/${id}`);

  return await request.json();
}

export const getNewsCards = async() => {
  const request = await fetch(`${url}/news-cards`);

  return await request.json();
}

export const getTagNews = async(tag_id) => {
  const request = await fetch(`${url}/news/tag/${tag_id}`);

  return await request.json();
}

export const getTagNewsPage = async(tag_id, id) => {
  const request = await fetch(`${url}/news/tag/${tag_id}/page/${id}`);

  return await request.json();
}

export const getBPinnedSec = async(lang) => {
  const request = await fetch(`${url}/blog-pinned-secondary/${lang}`);

  return await request.json();
}

export const getBlog= async(lang) => {
  const request = await fetch(`${url}/blogs/${lang}`);

  return await request.json();
}

export const getBlogPage = async(id, lang) => {
  const request = await fetch(`${url}/blog/page/${id}/${lang}`);

  return await request.json();
}

export const getBlogTags = async(lang) => {
  const request = await fetch(`${url}/blog-tags/${lang}`);

  return await request.json();
}

export const getBlogSingle = async(slug, lang) => {
  const request = await fetch(`${url}/blog/${slug}/${lang}`);

  return await request.json();
}

export const getBlogCards = async(lang) => {
  const request = await fetch(`${url}/blog-cards/${lang}`);

  return await request.json();
}

export const getBSingleTags = async(id, lang) => {
  const request = await fetch(`${url}/blog-tags/${id}/${lang}`);

  return await request.json();
}

export const getTagBlogs = async(tag_id, lang) => {
  const request = await fetch(`${url}/blogs/tag/${tag_id}/${lang}`);

  return await request.json();
}

export const getTagBlogsPage = async(tag_id, id, lang) => {
  const request = await fetch(`${url}/blogs/tag/${tag_id}/page/${id}/${lang}`);

  return await request.json();
}

export const getModal = async(type) => {
  const request = await fetch(`${url}/modals/${type}`);

  return await request.json();
}

export const getProjectsTagName = async(slug, lang) => {
  const request = await fetch(`${url}/projects/tag-name/${slug}/${lang}`);

  return await request.json();
}

export const getBlogTagName = async(slug, lang) => {
  const request = await fetch(`${url}/blog/tag-name/${slug}/${lang}`);

  return await request.json();
}
