// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = process.env.NEXT_PUBLIC_API_URL;

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const getInfo = async() => {
  const request = await fetch(`${url}/info`);

  return await request.json();
}

export const getFooterMenu = async() => {
  const request = await fetch(`${url}/footer-menu`);

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

export const getPage = async(code) => {
  const request = await fetch(`${url}/page/${code}`);

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

export const getProjectsCards = async() => {
  const request = await fetch(`${url}/projects-cards`);

  return await request.json();
}

export const getProjects = async() => {
  const request = await fetch(`${url}/projects`);

  return await request.json();
}

export const getProject = async(slug) => {
  const request = await fetch(`${url}/projects/${slug}`);

  return await request.json();
}

export const getProjectsPage = async(id) => {
  const request = await fetch(`${url}/projects/page/${id}`);

  return await request.json();
}

export const getTags = async() => {
  const request = await fetch(`${url}/tags`);

  return await request.json();
}

export const getTagPage = async(tag_id, id) => {
  const request = await fetch(`${url}/projects/tag/${tag_id}/page/${id}`);

  return await request.json();
}

export const getTagProjects = async(tag_id) => {
  const request = await fetch(`${url}/projects/tag/${tag_id}`);

  return await request.json();
}

export const getTagsProjectsCount = async() => {
  const request = await fetch(`${url}/tags-projects-count`);

  return await request.json();
}
