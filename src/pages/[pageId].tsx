// pages/[pageId].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { Client } from "@notionhq/client";
import type { NotionPage } from "types/notion_page";
import { blockToJsx } from "utils/blockToTsx";

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = "41f22ba7a88341088c6a052097cfede8"; // NotionデータベースのIDをセット
  const response = await notion.databases.query({ database_id: databaseId });

  const paths = response.results.map((page) => ({
    params: { pageId: page.id },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageId = params?.pageId as string;

  // const page = await notion.pages.retrieve({ page_id: pageId });
  const page = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });

  return {
    props: {
      page,
    },
  };
};

type Props = {
  page: NotionPage;
};

const NotionPage: React.FC<Props> = ({ page }) => {
  // ページのデータを使ってレンダリング
  // ...

  console.log({ page });
  return <div>{page.results.map((result) => blockToJsx(result))}</div>;
};

export default NotionPage;
