import { useRef } from 'react'
import { ArrowLeft, Code2, NotebookPen, Mic, PenTool, Film, BookOpen } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const INTERESTS = [
  {
    title: 'LeetCode',
    description: 'Where I sharpen data structures & algorithms.',
    Icon: Code2,
    link: 'https://leetcode.com/u/shishirkafle07/',
  },
  {
    title: 'Notion',
    description: 'Notes, reading list, and how I think through problems.',
    Icon: NotebookPen,
  },
  {
    title: 'Singing',
    description: 'Music I record and perform.',
    Icon: Mic,
  },
  {
    title: 'Drawings',
    description: 'Sketches and doodles.',
    Icon: PenTool,
  },
  {
    title: 'Documentaries',
    description: 'Documentaries I keep coming back to.',
    Icon: Film,
  },
  {
    title: 'Favorite Books',
    description: 'Books that shaped how I think.',
    Icon: BookOpen,
  },
]

const MoreAboutMe = () => {
  const boxRef = useRef(null)

  useGSAP(() => {
    gsap.from('.interest-item', {
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
    <section className='py-24'>
      <a href={import.meta.env.BASE_URL} className='inline-flex items-center gap-2 font-semibold mb-8 hover:underline'>
        <ArrowLeft size={18} /> Back
      </a>
      <h2 className='text-5xl font-bold mb-4'>More About Me</h2>
      <p className='text-lg text-gray-600 mb-12 max-w-2xl'>Beyond the code — a few other things I spend my time on.</p>
      <div ref={boxRef} className='flex flex-wrap gap-6'>
        {INTERESTS.map((item) => {
          const Wrapper = item.link ? 'a' : 'div'
          const linkProps = item.link ? { href: item.link, target: '_blank', rel: 'noreferrer' } : {}
          return (
            <Wrapper
              key={item.title}
              {...linkProps}
              className={`interest-item flex gap-4 items-start border-2 border-black rounded-2xl p-6 w-full md:w-[30vw] ${item.link ? 'hover:bg-black hover:text-white transition-colors' : ''}`}
            >
              <item.Icon size={32} className='shrink-0' />
              <div>
                <h3 className='text-xl font-bold leading-tight'>{item.title}</h3>
                <p className={`text-sm mt-1 ${item.link ? '' : 'text-gray-600'}`}>{item.description}</p>
                {item.link ? (
                  <p className='text-sm font-semibold mt-1 underline'>Click here →</p>
                ) : (
                  <p className='text-sm font-semibold mt-1 text-gray-400'>Coming soon</p>
                )}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}

export default MoreAboutMe
