import React, { useState } from 'react'
import { motion } from 'framer-motion'
import image1 from "../../assets/Down.jpg"
import image2 from "../../assets/Woman.jpg"
import image3 from "../../assets/Mental.jpg"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const images = [
    `url(${image1})`,
    `url(${image2})`,
    `url(${image3})`,
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change the background image every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div>
        <div id = 'hero-section' className='relative h-screen overflow-hidden '>
            
                <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 text-center space-x-4 pt-20 '>
                    <h1 className='text-6xl font-sans items-center text-white'>Welcome to Mental Health and Well-Being</h1>
                    <p className=' text-white text-xl'> We provide accessible mental health support and resources. Take self-assessment, track mood,view educational content ans access virtualcounseling.</p>
              
                <button className='text-xl px-4 py-3 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600'><Link to= "/selfassessment"> Start self-Assessment</Link></button>
                </div>
            
            <motion.div
             className="absolute inset-0 h-full bg-cover bg-center transition-all"
             style={{ backgroundImage: images[currentImageIndex]}}
             key={currentImageIndex}
             initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
             transition={{duration:1.5}}
            />

        </div>
        <div className='p-8'>
            <div>
               <SearchBar/>
            </div>
            <h1 className='text-3xl font-bold mb-4'>Educational Contents</h1>
            //AllEduContent

        </div>
    </div>
    
  )
}

export default Hero