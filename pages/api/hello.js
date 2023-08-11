// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const getInfo = async() => {
  const request = await fetch("http://localhost:8888/4rmsystems-server/info");

  return await request.json();
}
