"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export default function TabBar(props) {
    return (
        <div style={{ backgroundImage: "url(/tab-bar/TabBar.svg)" }} className=" flex items-end justify-end px-8 pb-6 bg-no-repeat bg-cover h-[100px] w-full">
            <Link href='/list'>{props.second}<FontAwesomeIcon className='text-white self-center' size='xl' icon={faList} /></Link>




        </div>
    )
}