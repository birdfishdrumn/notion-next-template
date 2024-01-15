import Head from "next/head";
import { SearchIcon } from "@heroicons/react/outline"; // heroiconsを使用しています
import { Card } from "@/components/ui/card";
import { Main } from "@/components/pages/main/Main";
import axios from "axios";
import { useEffect } from "react";

export default function Home({ notionData }: { notionData: NotionResult }) {
  // const { data: notionPageData } = await axios.post("http://localhost:3006/api/getNotionPage", {
  //   pageId: "93a681ed-7bba-4a08-b6cf-10554c0868a2",
  // });

  // const page = notionPageData?.results;
  // console.log({ notionData });
  useEffect(() => {
    const getNotionPage = async () => {
      const { data: notionPageData } = await axios.post("/api/getNotionPage", {
        page_id: "121a0148ab6a47ae81764548f8af557e",
      });
      const page = await notionPageData?.results;
      console.log({ notionPageData, page });
    };
    getNotionPage();
  }, []);

  return (
    <div>
      <Head>
        <title>サンプルページ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main notionData={notionData} />

      {/* サイドバー */}

      {/* メインコンテンツ */}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development" ? "http://localhost:3009" : "https://www.shoheisugimoto.com";
    const { data: notionData } = await axios.post(`${baseUrl}/api/notion`, {
      database_id: "41f22ba7a88341088c6a052097cfede8",
    });
    //www.notion.so/41f22ba7a88341088c6a052097cfede8?v=293b775b577f4c3cbc846dbde064fb31&pvs=4
    https: console.log({ notionData });
    // const { data: notionPageData } = await axios.post("http://localhost:3006/api/getNotionPage", {
    //   pageId: "93a681ed-7bba-4a08-b6cf-10554c0868a2",
    // });

    // const page = notionPageData?.results;
    // console.log({ notionData });

    return {
      props: {
        notionData,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: {} }; // ここで空のpropsを返すか、エラーを返すかを選択できます。
  }
}
