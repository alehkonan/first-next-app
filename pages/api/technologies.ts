// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Technology = {
  id: number;
  name: string;
}

type Data = {
  technologies: Technology[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { API_URL = '' } = process.env;
  const response = await fetch(`${API_URL}/technologies`);
  const data = await response.json();
  res.status(200).json({ technologies: data })
}
