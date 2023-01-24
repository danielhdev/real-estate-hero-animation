'use client'
import herostyles from '@/styles/Hero.module.css'
import { motion } from 'framer-motion'


export const Hero = () => {
    const headline = {
        initial: {
            scale: 1.1,
            x: 40,
        },
        animate: {
            scale: 1,
            x: 0,
            transition: {
                duration: 4,
                ease: 'easeOut'
            }

        },
    }
    const tagline = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,

            transition: {
                delay: 2,
                duration: 2,
                ease: 'easeOut'
            }

        },
    }
    const box = {
        initial: {

            y: 0,
        },
        animate: {
            y: '-100vh',
            transition: {
                delay: 1,
                duration: 1,
                ease: 'easeInOut'
            }

        },

    }
    const heroimage = {
        initial: {

            scale: 1.3
        },
        animate: {
            scale: 1,
            transition: {
                delay: 1.5,
                duration: 3,
                ease: 'anticipate'

            }

        },

    }
    const nav = {
        initial: {

            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delay: 1.5,
                duration: 1,
                ease: 'easeInOut'

            }

        },

    }


    return (
        <main className="h-screen flex-col
        flex justify-end items-start relative overflow-x-hidden">
            <motion.div className={herostyles.headline}
                variants={headline}
                initial='initial'
                animate='animate'
            >
                Michaels & Partners
            </motion.div >
            <motion.div className={herostyles.tagline}
                variants={tagline}
                initial='initial'
                animate='animate'
            >
                Real Estate
            </motion.div >
            <motion.div className={herostyles.nav}
                variants={nav}
                initial='initial'
                animate='animate'
            >
                <li>houses</li>
                <li>about</li>
                <li>contact</li>
            </motion.div >
            <motion.div className={herostyles.heroimage}
                variants={heroimage}
                initial='initial'
                animate='animate'

            >
            </motion.div>
            <motion.div className={herostyles.box}
                variants={box}
                initial='initial'
                animate='animate'
            >
            </motion.div>
        </main>
    )
}

