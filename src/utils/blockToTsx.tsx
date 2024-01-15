import { Heading1 } from "@/components/notion_ui/Heading1";
import { Heading2 } from "@/components/notion_ui/Heading2";
import { Heading3 } from "@/components/notion_ui/Heading3";
import { NotionImage } from "@/components/notion_ui/NotionImage";
import { Paragraph } from "@/components/notion_ui/Paragraph";
import { NotionPage } from "types/notion_page";

export const blockToJsx = (block: NotionPage) => {
  console.log({ block });
  const blockType = block.type;

  switch (blockType) {
    case "paragraph":
      return <Paragraph block={block} />;
    case "heading_1":
      return <Heading1 block={block} />;
    case "heading_2":
      return <Heading2 block={block} />;
    case "heading_3":
      return <Heading3 block={block} />;
    case "image":
      return <NotionImage block={block} />;
  }
};
