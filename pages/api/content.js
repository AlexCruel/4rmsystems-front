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

export const getBanner = async(lang) => {
  const request = await fetch(`${url}/banner/${lang}`);

  return await request.json();
}

export const getAbout = async(lang) => {
  const request = await fetch(`${url}/about/${lang}`);

  return await request.json();
}

export const getInformation = async(type, lang) => {
  const request = await fetch(`${url}/information/${type}/${lang}`);

  return await request.json();
}

export const getPartner = async(lang) => {
  const request = await fetch(`${url}/partner/${lang}`);

  return await request.json();
}

export const getPage = async(code, lang) => {
  const request = await fetch(`${url}/page/${code}/${lang}`);

  return await request.json();
}

export const getCatalog = async(lang) => {
  const request = await fetch(`${url}/catalog/${lang}`);

  return await request.json();
}

export const getProjectsComponent = async(lang) => {
  const request = await fetch(`${url}/projects-component/${lang}`);

  return await request.json();
}

export const getProjectsCards = async(id, lang) => {
  const request = await fetch(`${url}/projects-cards/${id}/${lang}`);

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

export const getNewsTags = async(lang) => {
  const request = await fetch(`${url}/news-tags/${lang}`);

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

export const getBlogComp = async(lang) => {
  const request = await fetch(`${url}/blog-component/blogs/${lang}`);

  return await request.json();
}

export const getNewsComp = async(lang) => {
  const request = await fetch(`${url}/blog-component/news/${lang}`);

  return await request.json();
}

export const getNews = async(lang) => {
  const request = await fetch(`${url}/news/news/${lang}`);

  return await request.json();
}

export const getNewsPage = async(id, lang) => {
  const request = await fetch(`${url}/news/page/${id}/${lang}`);

  return await request.json();
}

export const getNPinnedSec = async(lang) => {
  const request = await fetch(`${url}/news-pinned-secondary/${lang}`);

  return await request.json();
}

export const getNewsSingle = async(slug, lang) => {
  const request = await fetch(`${url}/news/${slug}/${lang}`);

  return await request.json();
}

export const getNSingleTags = async(id, lang) => {
  const request = await fetch(`${url}/news-tags/${id}/${lang}`);

  return await request.json();
}

export const getNewsCards = async(id, lang) => {
  const request = await fetch(`${url}/news-cards/${id}/${lang}`);

  return await request.json();
}

export const getTagNews = async(tag_id, lang) => {
  const request = await fetch(`${url}/news/tag/${tag_id}/${lang}`);

  return await request.json();
}

export const getTagNewsPage = async(tag_id, id, lang) => {
  const request = await fetch(`${url}/news/tag/${tag_id}/page/${id}/${lang}`);

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

export const getBlogCards = async(id, lang) => {
  const request = await fetch(`${url}/blog-cards/${id}/${lang}`);

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

export const getModal = async(type, lang) => {
  const request = await fetch(`${url}/modals/${type}/${lang}`);

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

export const getSeoTemplate = async(lang) => {
  const request = await fetch(`${url}/seo/template/${lang}`);

  return await request.json();
}
