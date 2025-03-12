import React from 'react';

function About() {
  const milliseconds = new Date().getTime() - new Date("07/16/2009").getTime();
  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className='text-black lg:pb-24' id='About'>
      <div className='sticky top-0 w-full py-2 text-xl font-medium text-blue-500 md:text-2xl lg:text-3xl bg-white/90'>
        #About
      </div>
      <div className='mt-5 space-y-5 text-md font- md:text-xl xl:text-xl leading-relaxed'>
        <p>
          hey I&apos;m Aaditya, a {age} year old programmer currently in my sophomore year of high school. I have a passion for both technology, and public health. I love creating new projects and exploring how they can be applied to solve real-world problems.
        </p>
        <p>
          When I&apos;m not not sitting at my desk, you can usually find me playing tennis, hanging out with friends, or working out! I enjoy networking, playing sports, and just having fun in life, feel free to reach out and we can have a chat!
        </p>
      </div>
    </div>
  );
}

export default About;