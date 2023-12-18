import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
//import { Canvas } from 'react-three-fiber';
import {logo, menu, close } from '../assets';
import video from '../assets/video.mp4';
import img1 from '../assets/facebook.png';
import img2 from '../assets/whatsapp.png';
import img3 from '../assets/linkedin.png';
import img4 from '../assets/youtube.png';
import img5 from '../assets/telephone.png';
import img6 from '../assets/gmail.png';
import img7 from '../assets/instagram.png';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <>
    <section className='w-full h-screen relative mx-auto'>
      
       <video className=" w-full h-screen object-cover" src={video} autoPlay loop muted />
       <div className='absolute w-full h-full top-0 left-0 bg-gray-900/80'></div>
      <div className={`${styles.paddingX} absolute inset-0 justify-center items-center text-center flex flex-col  text-white`}>
      
        <h1 className={`${styles.heroHeadText}`}><span className="text-[#01DF74]">POPULAR</span> DIAGNOSTIC <span className="text-[#01DF74]">CENTER</span> LTD<span className="text-[#01DF74]">.</span></h1>
        <p className={`${styles.heroSubText} `}>#1 Largest Diagnostic Service in Bangladesh</p>
        <button className="w-[240px] mx-auto m-5 h-[60px] bg-green-900/90">Patient Register Here..</button>
        
      </div>
     
      
      
      
    </section>
    
   
       
      
      
      
      
      
   
    </>
  );
};

export default Hero;
