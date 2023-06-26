import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import { jsx as _jsx } from "react/jsx-runtime";

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-col'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-center items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's talk <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <iframe className='rounded'
            width="100%"
            data-hs-ignore="true"
            style={{ minWidth: 312, minHeight: 516, height: 600, border: "none",}}
            src="https://meetings.hubspot.com/tomasagustingaitan?embed=true"
          />
          </motion.form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
