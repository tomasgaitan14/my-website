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

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='experience' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '>
            <h2 className='h2 text-accent'>Experience</h2>
            <h3 className='h3 mb-4'>
              HAL Company 🇦🇷
            </h3>
            <h4>- Implementation Specialist & APIs integration (HubSpot)</h4>
            <h4>- Accompany, guide and teach customers on best practices for their CRM.</h4>
            <h4>- Full implementation of HubSpot tech stack (Marketing, Sales, Service, Operations, CMS).</h4>
            <h4>- Development and full integration of Tiendanube & Nuvemshop with HubSpot with Marketplace publishing.</h4>
            <h4>- Constant improvement and growth to create innovative solutions.</h4>
            <br/>
            <p>Technologies used <span className='text-accent'>(HubSpot CRM, HubSpot CMS, JavaScript, APIs)</span></p>

            <h3 className='h3 mb-4 mt-4'>
              Motorflash Solutions 🇪🇸
            </h3>
            <h4>- Implementation Specialist & APIs integration (HubSpot)</h4>
            <h4>- Maintenance and creation of new functionalities using PHP.</h4>
            <br/>
            <p>Technologies used <span className='text-accent'>(PHP, Symfony, Docker, APIs, Git)</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
