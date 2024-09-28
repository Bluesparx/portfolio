import React, {useEffect} from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Experience from '../components/Experience';
import Today from '../components/Today';
import ContactGrid from '../components/ContactGrid';
import ProjectGrid from '../components/ProjectGrid';
import Resume from '../components/Resume';
import CuteAnimal from '../components/CuteAnimal';
import Header from '../components/Header';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedGridItem = ({ children, index, isMobile, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView || !isMobile) {
      controls.start('visible');
    }
  }, [controls, inView, isMobile]);

  return (
    <motion.div
      ref={ref}
      className={`${className}`}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.95 }
      }}
      transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.2 }}
    >
      {children}
    </motion.div>
  );
};


function MainContent({ isMobile }) {
    return (
      <>
        <Header/>
        <div className="py-4 sm:py-6 overflow-visible lg:py-8">
        <div className="mainGrid overflow-visible mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">

        <AnimatedGridItem index={0} isMobile={isMobile} className="lg:col-span-3 lg:row-span-1">
          <Intro />
        </AnimatedGridItem>
        <AnimatedGridItem index={1} isMobile={isMobile} className="lg:col-span-1 lg:row-span-3">
          <About />
        </AnimatedGridItem>
        <AnimatedGridItem index={2} isMobile={isMobile} className="lg:col-span-1 lg:row-span-1">
          <Resume />
        </AnimatedGridItem>
        <AnimatedGridItem index={3} isMobile={isMobile} className="lg:col-span-1 lg:row-span-1">
          <ContactGrid />
        </AnimatedGridItem>
        <AnimatedGridItem index={4} isMobile={isMobile} className="lg:col-span-1 lg:row-span-1">
          <ProjectGrid />
        </AnimatedGridItem>
        <AnimatedGridItem index={5} isMobile={isMobile} className="lg:col-span-1 lg:row-span-1">
          <Experience />
        </AnimatedGridItem>
        <AnimatedGridItem index={6} isMobile={isMobile} className="lg:col-span-1 lg:row-span-1">
          <Today />
        </AnimatedGridItem>
        <AnimatedGridItem index={7} isMobile={isMobile} className="lg:col-span-1 lg:row-span-1">
          <CuteAnimal />
        </AnimatedGridItem>
      </div>
      </div>
      </div>
      </>
    );
  }
  export default MainContent;