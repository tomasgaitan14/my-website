import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Software Development',
    description:
      'Experience in software development, proficiency in multiple languages and technologies, ability to work in a team and focus on effective solutions.',
    link: '',
  },
  {
    name: 'API Integrations',
    description:
      'My experience in API integrations stands out for my ability to connect systems and create efficient solutions, using multiple languages and technologies with a collaborative approach.',
    link: '',
  },
  {
    name: 'Hubspot CRM',
    description:
      'Extensive experience in HubSpot, including implementations, customizations and optimization, using its various tools to maximize the performance and success of strategies (Inbound).',
    link: '',
  },
  {
    name: 'Web Development',
    description:
      'Web development expert with solid experience in website design, implementation and maintenance, using various technologies and frameworks to create attractive and functional solutions.',
    link: '',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-6'>
              I'm a Full Stack Developer & Implementer with over 2 years of
              experience.
            </h3>
            <button className='btn btn-sm'><a href='#contact'>See my work</a></button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] text-accent tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end mt-[50px]'>
                      {/*  
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      */}
                      
                      <a href='mailto:tomasagustingaitan@gmail.com' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
