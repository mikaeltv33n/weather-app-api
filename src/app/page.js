
"use client"
import TabBar from "@/components/weather-app/tabBar"
import Image from "next/image"
import Api from '@/components/weather-app/weatherApi'
import { useParams } from "next/navigation"
import House from "/public/house.png"

export default function Front() {

    const params = useParams()
    return (
        <>
            <main style={{ backgroundImage: "url(/weather_background.png)" }} className='relative flex flex-col bg-no-repeat bg-cover h-screen w-screen '>

                {params.second}
                <div className="flex grow justify-center flex-col">
                    <Api />
                    <Image src={House} className="mt-6 " alt="" />

                </div>
                <div className="menu-effect absolute backdrop-blur-md bottom-0 w-full max-h-[325px] rounded-t-[44px]">
                    <div className="h-[50px]">

                    </div>
                    <div className="h-[275px]">

                    </div>
                    <div className="absolute bottom-0 w-full">
                        <TabBar />
                    </div>
                </div>
            </main>
        </>
    )
}
