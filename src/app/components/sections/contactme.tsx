import Image from 'next/image'
import { Button } from '../ui/button'

export default function ContactMe() {
    return(
        <div id='contact' className="w-full flex flex-col bg-offwhite pb-12">
            <div className="h-20 bg-primaryGreen flex justify-center items-center">
                <h1 className="text-4xl font-bold text-secondaryYellow">
                    ORDER NOW!
                </h1>
            </div>
            <div className="flex flex-col gap-4 text-primaryGreen font-bold items-center justify-center text-center mt-4">
                <div>
                    <h1>
                        We&apos;re open order from Monday-Saturday
                    </h1>
                    <h1>
                        08.00 AM - 10.00 AM
                    </h1>
                </div>
                <div className="relative w-24 h-24 ">
                    <Image 
                        src="/asset/whatsapp.svg"
                        alt="Whatsapp logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <Button className='text-secondaryYellow font-poppins text-lg font-bold'>
                    <a href="https://wa.me/6285183066469?text=I'm%20interested%20for%20your%20cookies">
                        Order
                    </a>
                </Button>
            </div>
        </div>
    )
}