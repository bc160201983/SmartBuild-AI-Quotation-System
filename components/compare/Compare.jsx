import Image from "next/image";
import Link from "next/link";
import React from "react";

const Compare = () => {
  return (
    <div className="flex justify-center items-start flex-col gap-6">
      <div className="p-4 w-[126px] h-[126px] bg-white img-border">
        <Image
          width={126}
          height={126}
          src={
            "https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
          }
        />
      </div>
      <Link
        href={"/product/1"}
        className="hover:underline hover:text-[#1e5c85] hover:transition-all hover:ease-in-out"
      >
        <h1 className="text-[16px] font-bold flex-wrap">
          AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor
        </h1>
      </Link>
      <div className="flex justify-start items-center gap-5 border-b-[3px] border-black w-full pb-2">
        <div className="btn-add py-[5px] px-[10px] rounded bg-[#2c87c3] text-white font-medium hover:bg-[#153f5b] hover:transition-all hover:ease-in-out cursor-pointer">
          Add
        </div>
        <div className="flex justify-center flex-col ">
          <p className="font-bold text-[14px]">Price</p>
          <Link href={"/product/1"} className="">
            <p className="text-[14px]">299.99</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-start  flex-col border-b border-[#dbdbdb] w-full pb-2 mb-2">
        <h3 className="text-xs font-bold">Manufacturer</h3>
        <p className="text-base text-[#191b2a]">AMD</p>
      </div>
    </div>
  );
};

export default Compare;
