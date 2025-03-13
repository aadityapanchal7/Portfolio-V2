import React from 'react';
import Lander from './components/lander';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <main className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col md:flex-row max-w-[1600px] w-full h-full bg-white'>
        <Analytics />
        <Lander />
        <div className='flex flex-col justify-start items-start text-left p-16 w-full md:ml-[50%]'>
          <About />
          <Skills />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default App;
