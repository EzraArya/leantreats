import { Star } from "lucide-react";
import Image from "next/image";

export default function Menu() {
    return (
        <div id="menu" className="w-full flex flex-col gap-8 bg-offwhite relative overflow-hidden md:h-[32rem] md:gap-16">
            {/* Top Left Image */}
            <div className="absolute top-16 -left-28 w-36 h-24 rotate-1 opacity-70 md:top-20 md:-left-16 md:w-52 md:rotate-12">
                <Image 
                    src="/asset/background-image.png"
                    alt="background image top left"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-16 -right-16 w-36 h-24 opacity-70 rotate-12 md:top-20 md:-right-16 md:w-52">
                <Image 
                    src="/asset/background-image.png"
                    alt="background image top left"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="flex flex-row justify-around py-2 bg-[#F2D33D] text-primaryGreen text-xl text-poppins font-bold shadow-md relative">
                <Star />
                <h1>OUR MENU</h1>
                <Star />
                <h1>OUR MENU</h1>
                <Star />
                <h1 className="hidden md:flex">OUR MENU</h1>
                <Star className="hidden md:flex"/>
                <h1 className="hidden lg:flex">OUR MENU</h1>
                <Star className="hidden lg:flex"/>
            </div>

            <div className="flex flex-col justify-between items-center gap-6 pb-10 text-primaryGreen">
                <div className="w-[18rem] md:w-[26rem] flex flex-col gap-2 text-primaryGreen">
                    <div className="flex flex-row justify-between md:text-xl font-bold font-moon-get">
                        <h1>
                            ORIGINAL COOKIES
                        </h1>
                        <h1 className="text-secondaryYellow">
                            13k
                        </h1>
                    </div>
                    <hr />
                    <p className="font-poppins">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ratione?
                    </p>
                </div>
                <div className="w-[18rem] md:w-[26rem] flex flex-col gap-2 text-primaryGreen">
                    <div className="flex flex-row justify-between font-bold md:text-xl font-moon-get">
                        <h1>
                            MATCHA COOKIES
                        </h1>
                        <h1 className="text-secondaryYellow">
                            15k
                        </h1>
                    </div>
                    <hr />
                    <p className="font-poppins">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ratione?
                    </p>
                </div>
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-6 -left-16 w-24 h-16 opacity-70 -rotate-12 md:bottom-16 md:-left-24 md:w-52   md:h-24">
                <Image 
                    src="/asset/background-image.png"
                    alt="background image top left"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-6 -right-12 w-32 h-16 opacity-70 -rotate-12 md:bottom-16 md:-right-24 md:w-52   md:h-24">
                <Image 
                    src="/asset/background-image.png"
                    alt="background image top left"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}