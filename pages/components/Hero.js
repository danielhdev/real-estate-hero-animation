'use client'
import { motion } from 'framer-motion'


const Hero = () => {
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
        <main className="h-[100dvh] flex-col 
        flex justify-end items-start relative overflow-x-hidden">
            <motion.div className="headersize text-zinc-50 absolute
            bottom-[15vh] left-[2vw] z-40"
                variants={headline}
                initial='initial'
                animate='animate'
            >
                Michaels & Partners
            </motion.div >

            <motion.div className="list-none text-zinc-50 navsize w-full bg-zinc-50/10
             absolute md:right-[2vw] top-[2vw] flex flex-row items-center md:justify-end border-b-[1px] border-zinc-50 
             border-solid"
                variants={nav}
                initial='initial'
                animate='animate'
            >
                <li>Buy</li>
                <li>Sell</li>
                <li>About Us</li>
                <li>Contact</li>
            </motion.div >
            <motion.div className="list-none text-zinc-50 navsize w-full
             absolute left-[1vw] bottom-[3vh] md:bottom-1/3 flex flex-row items-end justify-start"
                variants={nav}
                initial='initial'
                animate='animate'
            >
                <li>Real Estate</li>
                <li>France</li>
                <li>Italy</li>
                <li>Spain</li>
            </motion.div >
            <motion.div className="bgimage h-full w-full"
                variants={heroimage}
                initial='initial'
                animate='animate'

            >
            </motion.div>
            <motion.div className="overflow-hidden absolute z-10 inset-0 h-screen bg-contain bg-zinc-50 
"
                variants={box}
                initial='initial'
                animate='animate'
            >
            </motion.div>
        </main>
    )
}
export default Hero
