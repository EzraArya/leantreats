import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function Landing() {
    return (
        <div className="relative w-full h-64 md:h-[600px]">
            {/* Background Image */}
            <Image 
                src="/asset/background.png" 
                alt="Background" 
                layout="fill"
                objectFit="cover"
                priority 
                className="z-0"
            />

            {/* Text and Button Positioned in Bottom Left */}
            <div className="absolute bottom-4 left-4 z-10 text-white">
                <div className="font-moon-get text-primaryGreen font-bold mb-2 text-2xl md:flex md:flex-row md:gap-1 md:text-4xl">
                    <h1>GUILT-FREE</h1>
                    <h1>COOKIES!</h1>
                </div>
                <Button className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
}
