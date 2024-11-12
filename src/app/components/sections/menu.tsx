import { Star } from "lucide-react";

export default function Menu() {
    return (
        <div className="w-full">
            <div className="flex flex-row justify-around py-2 bg-secondaryYellow text-primaryGreen text-poppins font-bold">
                <Star />
                <h1>OUR MENU</h1>
                <Star />
                <h1>OUR MENU</h1>
                <Star />
                <h1>OUR MENU</h1>
                <Star />
                <h1 className="hidden md:flex">OUR MENU</h1>
                <Star className="hidden md:flex"/>
            </div>
            <div>
                <h1>Name</h1>
            </div>
        </div>
    )
}