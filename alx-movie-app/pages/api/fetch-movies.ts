// pages/api/fetch-movies.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const movies = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'Interstellar', year: 2014 },
  ];

  res.status(200).json({ movies });
}
