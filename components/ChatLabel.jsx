import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const ChatLabel = ({ openMenu, setOpenMenu }) => {
  return (
    <div className='flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer'>
      <p className='truncate group-hover:max-w-5/6'>Chat Name Here</p>

      {/* Dots icon with dropdown */}
      <div className='relative flex items-center justify-center h-6 w-6 rounded-lg group-hover:bg-transparent'>
        <Image
          src={assets.three_dots}
          alt='menu'
          className={`w-4 h-4 cursor-pointer ${openMenu.open ? 'block' : 'hidden'} group-hover:block`}
          onClick={() => setOpenMenu({ open: !openMenu.open })}
        />

        {/* Dropdown menu */}
        <div className={`absolute ${openMenu.open ? 'block' : 'hidden'} -right-36 top-6 bg-gray-700 rounded-xl w-max p-2 z-10`}>
          <div className='flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg'>
            <Image src={assets.pencil_icon} alt='Rename' className='w-4' />
            <p>Rename</p>
          </div>
          <div className='flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg'>
            <Image src={assets.delete_icon} alt='Delete' className='w-4' />
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatLabel
