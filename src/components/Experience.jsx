import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shoutOutImg from '../assets/shout-out.png'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const EXPERIENCE = [
  {
    role: 'Data and Outcomes Intern',
    company: 'State of South Dakota (SD DSS)',
    date: 'May 2026 - Present',
    location: 'Sioux Falls, South Dakota',
    image: shoutOutImg,
    imageAlt: 'Shout-out recognition email from my manager, Brittney Lengkeek',
  },
  {
    role: 'UDiscover Research Scholar',
    company: 'University of South Dakota Office of Research & Sponsored Programs',
    date: 'May 2026 - August 2026',
    location: 'Vermillion, South Dakota',
  },
  {
    role: 'Research Assistant',
    company: 'University of South Dakota College of Arts & Sciences',
    date: 'Mar 2026 - May 2026',
    location: 'Vermillion, South Dakota',
    description: 'Worked with advanced PyTorch and high-performance computing (HPC) clusters to train and test deep learning models. Spent my time digging into the hypercomplex math of quaternions to use them as structural priors, trying to make CNNs and Transformer architectures more robust.'
  },
  {
    role: 'Student Researcher',
    company: 'University of South Dakota',
    date: 'Nov 2025 - Present',
    location: 'Vermillion, South Dakota',
    description: 'Studied the mathematical foundations of Fourier analysis, transitioning from trigonometric series to complex exponentials (cₖ = ∫₀¹ f(t)e^(−2πikt) dt) to analyze signal amplitude and phase, evaluate convergence and Gibbs phenomenon at jump discontinuities, and apply Parseval’s theorem in L² space for time-frequency energy preservation.',
  },
  {
    role: 'Peer Tutor',
    company: 'University of South Dakota',
    date: 'Apr 2025 - Mar 2026',
    location: '',
    bullets: [
      'Provided tutoring for USD peers and student-athletes across foundational Math 103, 104, 114, Calculus I-III, Linear Algebra, Probability & Statistics, Physics 211, and Chemistry 101.',
      'Tutored a cohort of 30+ student-athletes, helping over 90% successfully pass College Algebra.',
    ],
  },
];

const Experience = () => {
  const boxRef = useRef(null)

  useGSAP(() => {
    gsap.from('.exp-item', {
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
      x: -40,
      opacity: 0,
      stagger: 0.15,
    })
  })

  return (
    <section id="experience" className='py-24'>
      <h2 className='text-5xl font-bold mb-12'>Experience</h2>
      <div ref={boxRef} className='flex flex-col border-l-2 border-black pl-8'>
        {EXPERIENCE.map((item) => (
          <div key={item.role + item.company} className='exp-item relative pb-10 last:pb-0'>
            <span className='absolute -left-10.25 top-1 h-4 w-4 rounded-full bg-black' />
            <h3 className='text-2xl font-bold'>{item.role}</h3>
            <p className='text-base font-semibold'>{item.company}</p>
            <p className='text-sm text-gray-600'>{item.date}{item.location ? ` · ${item.location}` : ''}</p>
            {item.bullets ? (
              <ul className='list-disc pl-5 mt-2 space-y-1'>
                {item.bullets.map((bullet) => (
                  <li key={bullet} className='text-sm'>{bullet}</li>
                ))}
              </ul>
            ) : item.description ? (
              <p className='text-sm mt-2'>{item.description}</p>
            ) : (
              <p className='text-sm text-gray-400 italic mt-2'>Add description here</p>
            )}
            {item.image && (
              <a href={item.image} target='_blank' rel='noreferrer' className='inline-block mt-3 group'>
                <img src={item.image} alt={item.imageAlt} className='w-56 rounded-lg border-2 border-black shadow-[0_4px_0_0_black]' />
                <span className='block text-sm font-semibold mt-2 underline underline-offset-4'>Read the shout-out →</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
