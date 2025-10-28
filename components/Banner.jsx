import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";




const Banner = () => {
  return (
    <div className='bg-black z-60 h-10 px-20 text-white lg:flex md:flex hidden items-center justify-between font-semibold text-[14px]'>
     <div className='flex gap-4'>Follow Us On: 
     <Link href='/'><FaFacebookF  className='w-4 h-4 hover:text-blue-600'/></Link>
      <Link href='/'><FaXTwitter  className='w-4 h-4 hover:text-sky-300'/></Link>
      <Link href='/'><FaLinkedinIn  className='w-4 h-4 hover:text-blue-800'/></Link>
      <Link href='/'><FaInstagram  className='w-4 h-4 hover:text-pink-600'/></Link>
      <Link href='/'><PiTelegramLogo  className='w-4 h-4 hover:text-sky-600'/></Link>
      <Link href='/'><AiOutlineYoutube  className='w-4 h-4 hover:text-red-600'/></Link>
      </div>
      <div className='flex gap-4 items-center'>
      <div className='flex items-center gap-2'><MdOutlineLocalPhone className='w-4 h-4'/> +91 9347031611</div>
      <div className='flex items-center gap-2'><MdOutlineLocalPhone className='w-4 h-4'/> +91 7842514644</div>
      </div>
    </div>
  )
}

export default Banner