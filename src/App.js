import React from 'react';
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Experience from './components/Experience';
import FloatBall from './components/FloatBall';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* <Header /> */}
      <FloatBall />
      <Banner /> {/* Finished */}
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Work />
      <Contact /> {/* Finished */}
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
