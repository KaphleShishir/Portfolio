import { useRef, useState } from 'react'
import { Sparkle, Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GithubIcon, LinkedinIcon } from './icons';

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
    { label: 'Experience', href: `${BASE}#experience` },
    { label: 'Projects', href: `${BASE}#projects` },
    { label: 'Awards', href: `${BASE}#awards` },
    { label: 'Contact', href: `${BASE}#contact` },
    { label: 'Blog', href: `${BASE}more-about-me` },
];

const Navbar = () => {
    const leftBoxRef = useRef(null)
    const rightBoxRef = useRef(null)
    const particleBoxRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)
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
    <div className='relative'>
      <div className='flex justify-between items-center'>
          <a href={`${BASE}#top`} ref={leftBoxRef} className='flex gap-3 h-fit w-fit items-center'>
              <Sparkle fill='black' size={50} className='rotate-45'/>
          </a>
          <div ref={rightBoxRef} className='hidden md:flex gap-4 items-center relative'>
              <div className='navoptions flex gap-4 items-center relative'>
                  <div ref={particleBoxRef} className='absolute h-full w-full top-0 left-0 pointer-events-none'></div>
                  {NAV_LINKS.map((link)=>(
                      <a key={link.label} href={link.href} onMouseEnter={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border border-gray-400'><span className='relative z-20'>{link.label}</span></a>
                  ))}
              </div>
              <a href="https://github.com/KaphleShishir" target="_blank" rel="noreferrer" className='p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors'><GithubIcon size={20}/></a>
              <a href="https://www.linkedin.com/in/shishir-kaphle78" target="_blank" rel="noreferrer" className='p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors'><LinkedinIcon size={20}/></a>
          </div>
          <button
              type='button'
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className='md:hidden p-2 border border-gray-400 rounded-full'
          >
              {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
      </div>
      {menuOpen && (
          <div className='md:hidden absolute right-0 top-[calc(100%+0.75rem)] z-30 flex flex-col gap-1 border-2 border-black rounded-2xl p-4 bg-[#e4e2e2] w-64'>
              {NAV_LINKS.map((link)=>(
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className='text-base font-bold py-2 px-2 rounded-lg hover:bg-black hover:text-white transition-colors'>{link.label}</a>
              ))}
              <div className='flex gap-3 items-center pt-2 mt-2 border-t border-gray-400'>
                  <a href="https://github.com/KaphleShishir" target="_blank" rel="noreferrer" className='p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors'><GithubIcon size={20}/></a>
                  <a href="https://www.linkedin.com/in/shishir-kaphle78" target="_blank" rel="noreferrer" className='p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors'><LinkedinIcon size={20}/></a>
              </div>
          </div>
      )}
    </div>
  )
}

export default Navbar
