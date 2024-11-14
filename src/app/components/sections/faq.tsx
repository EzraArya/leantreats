import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
  
import Image from "next/image"

export default function FAQ() {
    return(
        <div id="faq" className="relative w-full flex flex-col items-center justify-center pt-12 bg-[#F2D33D] shadow-sm shadow-black pb-12 gap-4 overflow-hidden">
            {/* Top Left Image */}
            <div className="absolute top-16 -left-24 w-36 h-24 rotate-1 opacity-70 md:top-20 md:-left-16 md:w-52 md:rotate-12">
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
            <h1 className="text-primaryGreen text-2xl font-bold font-moon-get md:text-5xl md:pb-4 text-center">Frequently Asked Question</h1>
            <Accordion type="single" collapsible className="w-[20rem] md:w-[40rem] text-poppins">
                <AccordionItem value="item-1" className="bg-white px-3 border rounded-md drop-shadow-md mb-3">
                    <AccordionTrigger className=" text-sm font-bold text-primaryGreen md:text-lg">
                        Bagaimana cara menyimpan healthy cookies?
                    </AccordionTrigger>
                    <AccordionContent className="text-poppins">
                    Simpan cookies LeanTreats dalam wadah kedap udara di tempat yang sejuk dan kering. Anda juga bisa menyimpannya di dalam kulkas.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white px-3 border rounded-md drop-shadow-md mb-3">
                    <AccordionTrigger className=" text-sm font-bold text-primaryGreen md:text-lg">
                        Berapa lama masa simpan healthy cookies?                    
                    </AccordionTrigger>
                    <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, incidunt.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-white px-3 border rounded-md drop-shadow-md mb-3">
                    <AccordionTrigger className=" text-sm font-bold text-primaryGreen md:text-lg">
                        Apakah healthy cookies cocok untuk diet tertentu?                    
                    </AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-white px-3 border rounded-md drop-shadow-md mb-3">
                    <AccordionTrigger className=" text-sm font-bold text-primaryGreen md:text-lg">
                        Apakah ada alergi yang harus diperhatikan?                    
                    </AccordionTrigger>
                    <AccordionContent>
                    Simpan cookies LeanTreats dalam wadah kedap udara di tempat yang sejuk dan kering. Anda juga bisa menyimpannya di dalam kulkas.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="bg-white px-3 border rounded-md drop-shadow-md mb-3">
                    <AccordionTrigger className=" text-sm font-bold text-primaryGreen md:text-lg">
                        Bagaimana cara memesan?                    
                    </AccordionTrigger>
                    <AccordionContent>
                    Simpan cookies LeanTreats dalam wadah kedap udara di tempat yang sejuk dan kering. Anda juga bisa menyimpannya di dalam kulkas.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* Bottom Left Image */}
            <div className="absolute bottom-6 -left-8 w-24 h-16 opacity-70 -rotate-12 md:bottom-16 md:-left-24 md:w-52   md:h-24">
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