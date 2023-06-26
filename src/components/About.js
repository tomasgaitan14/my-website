import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
          
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me</h2>
            
            <p>Advanced student of Information Systems Engineering and FullStack MERN developer with more than two years of experience in CRMs such as HubSpot, Salesforce, Freshworks, ActiveCampaigns and Messagebird.
            <br/>
            <br/>
            In addition to my technical skills, I am an effective communicator and enjoy working in a team. I am proactive, curious and self-taught, which allows me to learn quickly and face challenges. I am always looking for growth and learning opportunities.
            </p>

            <h2 className='h2 text-accent mt-8'>Education</h2>

            <h3 className='h3 mb-4 mt-4'>
              Information System Engineer (UTN)
            </h3>
            <h4>2018 - Present</h4>

            <h3 className='h3 mb-4 mt-4'>
              Full Stack Course (Udemy)
            </h3>
            <h4>2020 - 2021</h4>
          </motion.div>

      
        </div>
      </div>
    </section>
  );
};

export default About;
