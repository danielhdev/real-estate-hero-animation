'use client'
import herostyles from '@/styles/Hero.module.css'

export const Hero = () => {
    return (
        <main className="w-screen h-screen
        flex items-center relative">
            <div className={herostyles.headline}>
                Michaels & Partners
            </div >
            <div className={herostyles.heroimage}>
            </div>
            <div className={herostyles.box}>
            </div>
        </main>
    )
}
