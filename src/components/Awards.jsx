import { useRef, useState } from 'react'
import { Award } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const AWARDS = [
  {
    title: 'UDiscover Research Scholar',
    issuer: 'University of South Dakota',
    date: 'May - August 2026',
    description: 'A music chord transcription system in MATLAB using Short-Time Fourier Transform (STFT) and optimized chromagram analysis. The system detects chords from any audio file across a 55-chord vocabulary including major, minor, dominant 7th, suspended, diminished, and augmented chords — with harmonic weighting to reduce overtone interference. Foundation for a larger music emotion recognition system with applications in therapeutic environments.',
  },
  {
    title: 'CURCS Mini-Grant (FY26)',
    issuer: 'Office of Research and Sponsored Programs, USD',
    date: 'Mar 2026',
  },
  {
    title: '2026 Undergraduate Research Award',
    issuer: 'University of South Dakota',
    date: '2026',
    link: 'https://www.usd.edu/the-south-dakotan/usd-announces-2026-undergraduate-research-award-winners',
  },
  {
    title: 'USD Ambassador Scholar',
    issuer: 'University of South Dakota',
    date: 'Aug 2025',
    description: 'Led university campus tours for prospective students and supported the Gallagher International Center by organizing campus events, managing email communications, and assisting with orientation programs.',
  },
  {
    title: 'Thomas A. Stickney Memorial Scholarship',
    issuer: 'Division of Academic Affairs, University of South Dakota',
    date: '2026-27',
    description: 'Provides awards to Sophomore (to be used in junior year) students enrolled in the Honors Program for tuition, books, etc. Primarily a merit-based award; preference is given to a qualified student who is not receiving significant financial aid from other sources. This award is in addition to any other University sponsored awards, i.e. Coyote Commitment.',
  },
  {
    title: 'Dr. Cleland Cook Math Scholarship',
    issuer: 'College of Arts and Sciences, University of South Dakota',
    date: '2026-27',
    description: 'Awarded by the College of Arts and Sciences in tandem with its academic departments to USD students majoring in Math.',
  },
];

const Awards = () => {
  const boxRef = useRef(null)
  const [expandedTitle, setExpandedTitle] = useState(null)

  useGSAP(() => {
    gsap.from('.award-item', {
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
    })
  })

  return (
    <section id="awards" className='py-24'>
      <h2 className='text-5xl font-bold mb-12'>Awards</h2>
      <div ref={boxRef} className='flex flex-wrap gap-6'>
        {AWARDS.map((item) => {
          const isExpanded = expandedTitle === item.title
          const Wrapper = item.link ? 'a' : item.description ? 'button' : 'div'
          const linkProps = item.link
            ? { href: item.link, target: '_blank', rel: 'noreferrer' }
            : item.description
            ? { type: 'button', onClick: () => setExpandedTitle(isExpanded ? null : item.title) }
            : {}
          return (
            <Wrapper
              key={item.title}
              {...linkProps}
              className={`award-item flex gap-4 items-start text-left border-2 border-black rounded-2xl p-6 w-full md:w-[30vw] ${item.link ? 'hover:bg-black hover:text-white transition-colors' : ''} ${item.description ? 'cursor-pointer' : ''}`}
            >
              <Award size={32} className='shrink-0' />
              <div>
                <h3 className='text-xl font-bold leading-tight'>{item.title}</h3>
                <p className='text-sm font-semibold mt-1'>{item.issuer}</p>
                <p className={`text-sm ${item.link ? '' : 'text-gray-600'}`}>{item.date}</p>
                {item.link && (
                  <p className='text-sm font-semibold mt-1 underline'>Click here →</p>
                )}
                {item.description && (
                  <p className='text-sm font-semibold mt-1 underline'>
                    {isExpanded ? 'Hide details ↑' : 'Click here →'}
                  </p>
                )}
                {item.description && isExpanded && (
                  <p className='text-sm text-gray-600 mt-2'>{item.description}</p>
                )}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}

export default Awards
