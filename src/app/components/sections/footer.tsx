export default function Footer() {
    return(
        <footer className="w-full h-40 bg-[#2D2D2D] flex flex-row justify-around text-white items-center font-poppins flex-wrap">
            <div className="flex flex-col justify-center gap-2 text-sm">
                <h1 className="text-xl font-bold text-primaryGreen font-moon-get">
                    LEAN 
                    <span className="text-secondaryYellow">
                        TREATS
                    </span>
                </h1>
                <h1 className="opacity-50">2024 LeanTreats</h1>
                <h1 className="opacity-50">
                    All Rights Reserved
                </h1>
                <div className="flex flex-row gap-4">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
            </div>
            <div className="text-sm flex flex-col gap-1">
                <h1>
                    Explore
                </h1>
                <h1 className="opacity-50">
                    About Us
                </h1>
                <h1 className="opacity-50">
                    FAQ
                </h1>
            </div>
            <div className="text-sm flex flex-col gap-1">
                <h1>
                    Menu
                </h1>
                <h1 className="opacity-50">
                    Menu
                </h1>
            </div>
            <div className="text-sm flex flex-col gap-1">
                <h1>
                    Contact Us
                </h1>
                <h1 className="opacity-50">
                    Order
                </h1>
            </div>
        </footer>
    )
}