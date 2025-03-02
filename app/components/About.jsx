import React from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from "framer-motion"

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-[8%] py-10 scroll-mt-20 about-section'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>

            {/* Section Titre */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center text-lg font-Ovo'>
                Introduction
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-4xl sm:text-5xl font-Ovo'>
                About me
            </motion.h2>

            {/* Section Contenu */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-6 lg:gap-20 my-10'
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-48 sm:w-64 md:w-80 rounded-3xl max-w-none'
                >
                    <Image 
                        src={assets.user_image} 
                        alt='user' 
                        className='w-full rounded-3xl object-cover'
                    />
                </motion.div>

                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1 text-center sm:text-left lg:text-left'
                >
                    <p className='mb-6 max-w-2xl font-Ovo text-gray-700 dark:text-white/80'>
                        I am a 4th-year Computer Engineering student at <span className="font-semibold">ENSA</span>, passionate about 
                        <span className="font-semibold"> full-stack development</span>.  
                        With hands-on experience in multiple projects, I specialize in building 
                        <span className="font-semibold"> dynamic and efficient web applications</span>.  
                        I am constantly exploring new technologies to enhance my skills and create innovative solutions. 
                        My goal is to develop scalable and high-performance applications that provide seamless user experiences.
                    </p>

                    {/* Liste des informations */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl'
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border border-gray-400 rounded-xl p-4 cursor-pointer 
                                           hover:bg-lightHover hover:-translate-y-1 duration-500 
                                           dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' 
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-2' />
                                <h3 className='my-2 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Outils utilisés */}
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-center sm:text-left'
                    >
                        Tools I use
                    </motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className='flex flex-wrap items-center gap-3 sm:gap-5 justify-center sm:justify-start'
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li 
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                                key={index}
                            >
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;
