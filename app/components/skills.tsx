import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { Languages, Frameworks, Tools } from '../../utils/my-skills'

function Skills() {
  return (
    <div className=' pt-14 md:pt-0 lg:pb-20' id='Skills'>

      <div className='sticky top-0 w-full py-2 text-xl font-medium text-blue-500 md:text-2xl lg:text-3xl bg-white/90'>
        //Skills
      </div>


      {/* Languages */}
      <div className='mt-5 md:mt-16 '>
        <div className='flex items-center'>
        <span className=' text-black'><IoChevronForwardOutline /></span>
          <div className='font-bold text-orange-600 '>
            Languages
          </div>
        </div>
  
        <div className='flex flex-wrap mt-2  '>
          {Languages.map((Lang, index) => (
            <div className='flex items-center h-7 px-3 py-1 m-1 border-1 shadow-md text-black rounded-xl' key={index}>
              {Lang.Language}
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className='mt-14'>
        <div className='flex items-center'>
        <span className=' text-black'><IoChevronForwardOutline /></span>
          <div className='font-bold text-orange-600 '>
            Frameworks
          </div>
        </div>
        
        <div className='flex flex-wrap mt-2 '>
          {Frameworks.map((Frame, index) => (
            <div className='flex items-center h-8 px-3 py-1 m-1 border-1 shadow-md text-black rounded-xl' key={index}>
              {Frame.Framework}
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className='mt-14'>
        <div className='flex items-center'>
        <span className=' text-black'><IoChevronForwardOutline /></span>
          <div className='font-bold text-orange-600 '>
            Tools
          </div>
        </div>
        
        <div className='flex flex-wrap mt-2 '>
          {Tools.map((Tool, index) => (
            <div className='flex items-center h-8 px-3 py-1 m-1 border-1 shadow-md text-black rounded-xl' key={index}>
              {Tool.Tool}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills