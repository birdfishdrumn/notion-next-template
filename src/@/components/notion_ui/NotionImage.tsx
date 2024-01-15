import type { FC } from "react";
import Image from "next/image";

export const NotionImage: FC = ({ block }: any) => {
  console.log("image", block.image);
  const blurDataURL =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMiAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSIjZGRkIi8+PC9zdmc+";

  return (
    <h1 className='my-2 text-2xl sp:text-lg w-64'>
      <Image
        width={400}
        height={400}
        alt='blog-img'
        src={block.image.file.url}
        placeholder='blur'
        blurDataURL={blurDataURL}
      />
    </h1>
  );
};
