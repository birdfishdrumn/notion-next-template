import { Card } from "@/components/ui/card";
import { Spacer } from "@/components/ui/spacer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  notionData: NotionResult;
};

export const Main = ({ notionData }: Props) => {
  console.log({ notionData });
  return (
    <div>
      <h1 className='text-4xl font-extrabold'>Profile</h1>

      <Spacer size={20} />

      <div className='grid grid-cols-3 gap-4'>
        {notionData?.results.map((result) => (
          <div>
            <Link href={result.id}>
              <Image
                height={200}
                width={200}
                alt='notion_image'
                className='w-64 h-40'
                src={result.properties["Files & media"].files[0]?.file.url}
              />
              {result.properties.Name.title[0]?.plain_text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
