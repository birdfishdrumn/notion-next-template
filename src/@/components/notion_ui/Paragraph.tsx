import type { FC } from "react";
import { Spacer } from "../ui/spacer";

export const Paragraph: FC = ({ block }: { block: any }) => {
  return (
    <>
      {block.paragraph.rich_text.length ? (
        <p className='text-sm font-light'> {block.paragraph.rich_text[0].plain_text} </p>
      ) : (
        <Spacer size={20} />
      )}
    </>
  );
};
