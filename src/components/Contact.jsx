import { useRef } from 'react'
import { Mail } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GithubIcon, LinkedinIcon } from './icons'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const EMAIL = 'kaphleshishir3@gmail.com'

const SOCIALS = [
  { label: 'Email', href: `mailto:${EMAIL}`, Icon: Mail },
  { label: 'GitHub', href: 'https://github.com/KaphleShishir', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shishir-kaphle78', Icon: LinkedinIcon },
];

const Contact = () => {
  const boxRef = useRef(null)

  useGSAP(() => {
    gsap.from(boxRef.current.children, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
    })
  })

  return (
    <section id="contact" className='py-24'>
      <div ref={boxRef} className='flex flex-col items-center text-center gap-6'>
        <h2 className='text-5xl font-bold'>Let's Connect</h2>
        <a href={`mailto:${EMAIL}`} className='text-2xl font-semibold underline underline-offset-4'>{EMAIL}</a>
        <div className='flex gap-4'>
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              className='flex items-center gap-2 border-2 border-black rounded-full px-6 py-3 font-semibold hover:bg-black hover:text-white transition-colors'
            >
              <Icon size={20} /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
