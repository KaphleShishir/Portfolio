import { useRef } from 'react'
import { Sparkle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GithubIcon, LinkedinIcon } from './icons';

const NAV_LINKS = [
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Awards', href: '/#awards' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Blog', href: '/more-about-me' },
];

const Navbar = () => {
    const leftBoxRef = useRef(null)
    const rightBoxRef = useRef(null)
    const particleBoxRef = useRef(null)
  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(leftBoxRef.current.children,{
        y:-10,
        opacity:0,
        duration:0.3,
        stagger:0.3,
        delay:0.2
    })
     tl.from(rightBoxRef.current.children,{
        y:-10,
        opacity:0,
        duration:0.3,
        stagger:0.3,
    })
  })

  const generateParticle = async (e)=>{
      const box  = rightBoxRef.current
      const rect = e.target.getBoundingClientRect()
      const x = (rect.left + rect.right)/2 -  box.getBoundingClientRect().left
      const sleep = (t)=>{return new Promise(res=>{
        setTimeout(res,t)
      })}
      const y = (rect.top + rect.bottom)/2 - box.getBoundingClientRect().top
        for(let i = 0; i<10;i++){
            const particle = document.createElement('span')
            particle.className = `bg-[#98a004] h-2 w-2 rounded-full absolute pointer-events-none`
            particle.style.left =  `${x}px`
            particle.style.top = `${y}px`
            particleBoxRef.current.appendChild(particle)
            gsap.to(particle,{
                y:gsap.utils.random(-100,100),
                x:gsap.utils.random(-100,100),
                opacity:0,
                delay:gsap.utils.random(0.3,0.6),
                duration:5,
                scale:0,
                onComplete:()=>particle.remove()
            })
            await sleep(200)
        }

  }
  return (
    <div className='flex justify-between items-center'>
        <a href="/#top" ref={leftBoxRef} className='flex gap-3 h-fit w-fit items-center'>
            <Sparkle fill='black' size={50} className='rotate-45'/>
        </a>
        <div ref={rightBoxRef} className='flex gap-4 items-center relative'>
            <div className='navoptions flex gap-4 items-center relative'>
                <div ref={particleBoxRef} className='absolute h-full w-full top-0 left-0 pointer-events-none'></div>
                {NAV_LINKS.map((link)=>(
                    <a key={link.label} href={link.href} onMouseEnter={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border border-gray-400'><span className='relative z-20'>{link.label}</span></a>
                ))}
            </div>
            <a href="https://github.com/KaphleShishir" target="_blank" rel="noreferrer" className='p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors'><GithubIcon size={20}/></a>
            <a href="https://www.linkedin.com/in/shishir-kaphle78" target="_blank" rel="noreferrer" className='p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors'><LinkedinIcon size={20}/></a>
        </div>
    </div>
  )
}

export default Navbar
