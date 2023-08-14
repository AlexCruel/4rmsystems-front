// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const getInfo = async() => {
  const request = await fetch("http://localhost:8888/4rmsystems-server/api/info");

  return await request.json();
}

export const getFooterMenu = async() => {
  const request = await fetch("http://localhost:8888/4rmsystems-server/api/footer-menu");

  return await request.json();
}

export const getSocials = async() => {
  const request = await fetch("http://localhost:8888/4rmsystems-server/api/socials");

  return await request.json();
}
