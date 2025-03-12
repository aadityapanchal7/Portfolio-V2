import React from 'react'
import Card from './card'

function Experience() {
  return (
    <div className=' pt-14' id='Experience'>
      <div className='sticky top-0 z-10 w-full py-2 text-xl font-medium text-blue-500 md:text-2xl lg:text-3xl bg-white/90'>
        Experience
      </div>
      <div className='pt-5 '>
        <p>
          {/* This is a comment */}
          I have worked at several companies, gaining valuable experience.
        </p>
        <Card />
      </div>
    </div>
  )
}

export default Experience
