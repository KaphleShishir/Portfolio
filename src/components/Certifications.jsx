import { useRef } from 'react'
import { BadgeCheck } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Certifications = () => {
  const boxRef = useRef(null)

  useGSAP(() => {
    gsap.from('.certification-item', {
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.5,
    })
  })

  return (
    <section id="certifications" className='py-24'>
      <h2 className='text-5xl font-bold mb-12'>Certifications</h2>
      <div ref={boxRef} className='flex flex-wrap gap-6'>
        <div className='certification-item flex gap-4 items-start border-2 border-black rounded-2xl p-6 w-[30vw] opacity-60'>
          <BadgeCheck size={32} className='shrink-0' />
          <div>
            <h3 className='text-xl font-bold leading-tight'>Coming soon</h3>
            <p className='text-sm text-gray-600 mt-1'>Certifications will be added here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
