import React from "react";
import { SideBar } from "./SideBar";
import { Spacer } from "../ui/spacer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className='max-w-4xl mx-auto my-20 flex flex-1'>
      <SideBar /> <Spacer horizontal size={40} /> {children}
    </div>
  );
};
