import Image from "next/image";

export default function AboutUs() {
  return (
    <div id="about" className="flex flex-col gap-2 items-center justify-center w-full bg-offwhite md:flex-row md:justify-between md:items-center md:h-[500px] md:px-56  pt-10 pb-10 md:pt-0 md:pb-0">
      <div className="relative w-72 h-64 md:h-64 md:w-64">
        <Image
          src="/asset/image.png"
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-center ml-6 mr-10 md:w-1/2 md:flex md:flex-col md:justify-between md:items-center md:ml-0 md:mr-0 md:px-0 md:text-left">
        <h1 className="text-primaryGreen text-2xl font-bold font-moon-get">
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