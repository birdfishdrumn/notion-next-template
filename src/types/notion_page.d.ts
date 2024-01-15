type NotionRichText = {
  type: "text";
  text: {
    content: string;
    link: null | string;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null | string;
};

type NotionParagraph = {
  rich_text: NotionRichText[];
  color: string;
};

type NotionBlock = {
  object: "block";
  id: string;
  parent: {
    type: "page_id";
    page_id: string;
  };
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: "user";
    id: string;
  };
  last_edited_by: {
    object: "user";
    id: string;
  };
  has_children: boolean;
  archived: boolean;
  type: "paragraph";
  paragraph: NotionParagraph;
};

export type NotionPage = {
  object: "list";
  results: NotionBlock[];
  next_cursor: null | string;
  has_more: boolean;
  type: "block";
  block: any;
  request_id: string;
};
