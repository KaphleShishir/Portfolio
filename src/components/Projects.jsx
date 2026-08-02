import { useRef } from 'react'
import Card from './Card';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PROJECTS = [
  { title: 'Project One', description: 'Add project description here', link: 'https://github.com/KaphleShishir' },
  { title: 'Project Two', description: 'Add project description here', link: 'https://github.com/KaphleShishir' },
  { title: 'Project Three', description: 'Add project description here', link: 'https://github.com/KaphleShishir' },
  { title: 'Project Four', description: 'Add project description here', link: 'https://github.com/KaphleShishir' },
];

const Projects = () => {
    const boxRef = useRef(null)
    useGSAP(()=>{
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger: boxRef.current,
                start: "top 80%",
                end: "top -20%",
                scrub:2
            }
        })
        for(let i = 0; i<PROJECTS.length; i++){
            const row = Math.floor(i/2)
            const col = i%2
            tl.from(`.row_${row}.col_${col}`,{
                x: col==0 ? -200 :200,
                opacity:0
            },`line_${row}`)
        }
    })
  return (
    <section id="projects" className='py-24'>
      <h2 className='text-5xl font-bold mb-12'>Projects</h2>
      <div ref={boxRef} className='flex flex-wrap justify-between content-between gap-y-8'>
         {PROJECTS.map((elem,idx)=>{
          return <Card key={idx} title={elem.title} description={elem.description} link={elem.link} number={idx}/>
         })}
      </div>
    </section>
  )
}

export default Projects
