import React from 'react'
import Hero from '@/components/Hero';
import Practice from '@/components/Practice';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Founder from '@/components/Founder';

const page = () => {
  return (
    <div className=' bg-[#0b0b09]'>
      <Hero/>
      <Practice />
      <About/>
      <Process/>
      <Stats/>
      <Founder/>
      <Testimonials/>
      
    </div>
  )
}

export default page