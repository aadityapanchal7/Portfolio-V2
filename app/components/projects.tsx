import React from 'react'
import ProjectCard from './project-card'

function Projects() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=' pt-14 md:min-h-screen' id='Projects'>
      <div className='sticky top-0 w-full py-2 text-xl font-medium text-blue-500 md:text-2xl lg:text-3xl bg-white/90'>
        #Projects
      </div>
      <p>
        {/* This is a comment */}
        Here are some of the projects I have worked on.
      </p>
      <ProjectCard />
      <footer className="bottom-0 flex justify-center w-full text-sm text-black text-center">
        <span className="mb-3">
          © {year} Aaditya Panchal All Rights Reserved.
        </span>
      </footer>
    </div>

  )
}

export default Projects
