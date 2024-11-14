'use client'

export default function Footer() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = 76; // Approximate header height in pixels
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

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
                <button 
                    onClick={() => scrollToSection('about')}
                    className="opacity-50 hover:opacity-100 text-left"
                >
                    About Us
                </button>
                <button 
                    onClick={() => scrollToSection('faq')}
                    className="opacity-50 hover:opacity-100 text-left"
                >
                    FAQ
                </button>
            </div>
            <div className="text-sm flex flex-col gap-1">
                <h1>
                    Menu
                </h1>
                <button 
                    onClick={() => scrollToSection('menu')}
                    className="opacity-50 hover:opacity-100 text-left"
                >
                    Menu
                </button>
            </div>
            <div className="text-sm flex flex-col gap-1">
                <h1>
                    Contact Us
                </h1>
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="opacity-50 hover:opacity-100 text-left"
                >
                    Order
                </button>
            </div>
        </footer>
    )
}