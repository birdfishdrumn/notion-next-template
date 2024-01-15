import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Spacer } from "../ui/spacer";
import Link from "next/link";

export const SideBar = () => {
  return (
    <aside className='w-60 mr-4 max-w-md'>
      <Link href={"/"}>
        <h1 className='font-extrabold text-5xl'>Title</h1>
      </Link>

      <Spacer size={24} />

      <Card className='p-5  max-w-md mx-auto'>
        <Avatar className='mx-auto'>
          <AvatarImage src='https://github.com/shadcn.png' />

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Spacer size={15} />
        <h3 className='text-md font-bold text-gray-700'>michi</h3>
        <Spacer size={8} />
        <p className='whitespace-normal break-words text-sm'>
          ものづくりが好きで色々なものを日々開発しています。
        </p>
      </Card>

      <Spacer size={15} />
      <Card className='p-5'>
        <ul className='space-y-2'>
          <li className='font-medium'>Tips (3)</li>
          <li className='font-medium'>UI (23)</li>
          {/* ...他のカテゴリ */}
        </ul>
      </Card>
    </aside>
  );
};
