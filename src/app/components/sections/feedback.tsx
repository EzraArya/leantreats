import Image from 'next/image'
import { Button } from '../ui/button'

export default function Feedback() {
    return(
        <div id='contact' className="w-full flex flex-col bg-offwhite pb-12">
            <div className="h-20 bg-primaryGreen flex justify-center items-center">
                <h1 className="text-4xl font-bold text-secondaryYellow">
                    Feedback
                </h1>
            </div>
            <div className="flex flex-col gap-4 text-primaryGreen font-bold items-center justify-center text-center mt-4">
                <div>
                    <h1>
                        Please insert feedback using the qr code below
                    </h1>
                </div>
                <div className="relative w-64 h-64 ">
                    <Image 
                        src="/asset/qr.jpeg"
                        alt="QR Code"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <Button className='text-secondaryYellow font-poppins text-lg font-bold'>
                    <a href="https://forms.gle/fhDGTWivnrhffCnGA">
                        Feedback
                    </a>
                </Button>
            </div>
        </div>
    )
}