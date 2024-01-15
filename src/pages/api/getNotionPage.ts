import { NextApiRequest, NextApiResponse } from "next";
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY as string });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page_id } = req.body; // ページIDをリクエストボディから取得

  try {
    const page = await notion.pages.retrieve({ page_id });

    const response = await notion.blocks.children.list({
      block_id: page_id,
      page_size: 50,
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving the page" });
  }
}
