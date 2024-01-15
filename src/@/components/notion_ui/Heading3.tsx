import type { FC } from "react";

export const Heading3: FC = ({ block }: any) => {
  return (
    <h1 className='my-2 text-lg sp:text-lg'>
      <p>{block.heading_3.rich_text[0].plain_text}</p>
    </h1>
  );
};
