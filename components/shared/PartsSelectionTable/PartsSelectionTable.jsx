"use client";
import Link from "next/link";
import React from "react";
import Components from "../Components/Components";
import { usePathname } from "next/navigation";

const PartsSelectionTable = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div className="">
        <table className="w-full text-sm text-left">
          <thead className="text-[11px] border-1 border-b border-[#dbdbdb]">
            <tr className="border-b-1 border-[#dbdbdb]">
              <th className="border-spacing-0 w-[100px]">Component</th>
              <th scope="col" className="">
                Selection
              </th>
              <th scope="col" className="w-[150px] text-right">
                Price
              </th>
              <th scope="col" className="text-right w-[150px]">
                Where
              </th>
              <th scope="col" className="text-right w-[100px]">
                Buy
              </th>
            </tr>
          </thead>
          <tbody>
            <Components />
            <Components />
            <Components />
            <Components />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PartsSelectionTable;
