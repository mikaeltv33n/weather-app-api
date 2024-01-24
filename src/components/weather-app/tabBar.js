"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMapPin } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export default function TabBar(props) {
  return (
    <div style={{ backgroundImage: "url(/tab-bar/TabBar.svg)" }} className="relative flex items-end justify-between px-8 pb-6 bg-no-repeat bg-cover h-[100px] w-full">
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" type="button"><img src="/tab-bar/plusButton.svg" alt="" /></button>
      <FontAwesomeIcon className='text-white flex-end' size='xl' icon={faMapPin} />
      <Link href='/list'>{props.second}<FontAwesomeIcon className='text-white self-center' size='xl' icon={faList} /></Link>

    



    </div>
  )
}