import type { FC } from "react";

export const Heading2: FC = ({ block }: any) => {
  return (
    <h1 className='my-2 text-xl sp:text-lg font-bold'>
      <p>{block?.heading_2.rich_text[0]?.plain_text}</p>
    </h1>
  );
};
