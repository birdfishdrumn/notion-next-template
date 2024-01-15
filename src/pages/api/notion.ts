import { NextApiRequest, NextApiResponse } from "next";

const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY as string });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { database_id } = req.body;

  const results = await notion.databases.query({
    database_id,
  });
  console.log({ results });
  res.json(results);
}
