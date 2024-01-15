type NotionPage = {
  object: "page";
  id: string;
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
  cover: null;
  icon: null;
  parent: {
    type: "database_id";
    database_id: string;
  };
  archived: boolean;
  properties: {
    Tags: {
      id: string;
      type: "multi_select";
      multi_select: any[];
    };
    link: {
      id: string;
      type: "rich_text";
      rich_text: {
        type: "text";
        text: {
          content: string;
          link: null;
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
        href: null;
      }[];
    };
    "Files & media": NotionFilesProperty;

    Name: {
      id: string;
      type: "title";
      title: {
        type: "text";
        text: {
          content: string;
          link: null;
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
        href: null;
      }[];
    };
  };
  url: string;
  public_url: null;
};

type NotionFile = {
  name: string;
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
};

type NotionFilesProperty = {
  id: string;
  type: "files";
  files: NotionFile[];
};

type NotionResult = {
  object: "list";
  results: NotionPage[];
  next_cursor: null;
  has_more: boolean;
  type: "page_or_database";
  page_or_database: any;
  request_id: string;
};
