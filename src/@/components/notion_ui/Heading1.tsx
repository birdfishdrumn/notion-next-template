import type { FC } from "react";

export const Heading1: FC = ({ block }: any) => {
  return (
    <h1 className='my-2 text-2xl sp:text-lg'>
      <p>{block?.heading_1.rich_text[0].plain_text}</p>
    </h1>
  );
};
