import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-screen bg-offwhite md:flex-row md:justify-between md:items-center md:h-[500px] md:px-20 md:mx-auto md:max-w-7xl">
      <div className="relative w-64 h-64 md:w-1/2 md:h-full">
        <Image
          src="/asset/image.png"
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-center ml-6 mr-10 md:w-1/2 md:flex md:flex-col md:justify-center md:items-start md:ml-0 md:mr-0 md:px-0">
        <h1 className="text-primaryGreen text-xl font-bold">
          LOW CALORIE SNACKS MADE FROM{" "}
          <span className="text-secondaryYellow">NATURAL INGRIDIENTS</span>
        </h1>
        <h1 className="text-black font-poppins font-medium text-md mt-3">
          Our snacks are preservative-free and contain no artificial sweeteners.
          Designed for those looking to manage their calorie intake while still
          enjoying healthy treats, these snacks are perfect for anyone on a diet
          or simply aiming for a healthier lifestyle.
        </h1>
      </div>
    </div>
  );
}