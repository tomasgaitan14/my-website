import React from 'react';
// images
import Image from '../assets/tomasgaitan.PNG';
// icons
import { FaComments, FaDownload, FaGithub, FaHubspot, FaInstagram, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import {Link} from 'react-scroll';

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[98vh] flex items-center'
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[1.2] lg:text-[102px]'
            >
              Tomas <span>Gaitan</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'CRM Expert',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Advanced student of Information Systems Engineering, Proactive, Self-taught and Enthusiastic Person.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}>
                <button className='btn btn-sm'><a href='#contact'>Contact me</a></button>
              </Link>
              <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true}>
                <button className='btn btn-sm'><a href='#work'>Portfolio</a></button>
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://www.linkedin.com/in/tomasgaitan/' target='_BLANK' rel="noreferrer">
                <FaLinkedin/>
              </a>
              <a href='https://github.com/tomasgaitan14' target='_BLANK' rel="noreferrer">
                <FaGithub />
              </a>
              <a href='https://www.instagram.com/tomasgaitann' target='_BLANK' rel="noreferrer">
                <FaInstagram/>
              </a>
              <a href='https://app.hubspot.com/connect/member/tomasgaitan' target='_BLANK' rel="noreferrer">
                <FaHubspot/>
              </a>
              <a href='mailto:tomasagustingaitan@gmail.com' target='_BLANK' rel="noreferrer">
                <FaComments/>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img className='img-banner' src={Image} alt='Tomas Gaitan' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;