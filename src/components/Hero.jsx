import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Mail } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'

const Page1 = () => {
const leftBoxRef = useRef(null)
const imageRef = useRef(null)
const lastTimeRef = useRef(0)
const particleBoxRef = useRef(null)
useGSAP(()=>{
var tl = gsap.timeline()
tl.from(leftBoxRef.current.children,{
            delay:0.8,
            duration:0.4,
            stagger:0.4,
            x : -30,
            opacity:0
        })
tl.from(imageRef.current,{
            duration:0.4,
            x : 30,
            opacity:0
        })
    })
const colors = [
"red",
"blue",
"green",
"orange",
"purple",
"pink",
"yellow",
"cyan",
"lime",
"indigo",
"violet",
"teal",
"coral",
"salmon",
"gold",
"tomato",
"crimson",
"navy",
"brown",
"black",
];
const generateParticle = (e)=>{
const now = Date.now()
if(now-lastTimeRef.current <200)return;
lastTimeRef.current = now
const particle = document.createElement('span')
const box  = particleBoxRef.current
const rect = box.getBoundingClientRect()
const x = e.clientX - rect.left
const y = e.clientY - rect.top
particle.className = `h-4 w-4 absolute pointer-events-none`
const randomColor = colors[Math.floor(Math.random()*colors.length)]
const borderRadius = Math.floor(Math.random()*20)
particle.style.left =  `${x}px`
particle.style.top = `${y}px`
particle.style.backgroundColor = randomColor
particle.style.borderRadius = `${borderRadius}px`
box.appendChild(particle)
gsap.to(particle,{
            y:gsap.utils.random(-400,400),
            x:gsap.utils.random(-400,400),
            opacity:0,
            delay:gsap.utils.random(0.1,0.3),
            duration:5,
            scale:0,
onComplete:()=>particle.remove()
        })

  }
const handleMouseMove = (e) => {
const img = imageRef.current;
const rect = img.getBoundingClientRect();

const imgCenterX = rect.left + rect.width / 2;
const imgCenterY = rect.top + rect.height / 2;

const mouseX = e.clientX - imgCenterX;
const mouseY = e.clientY - imgCenterY;

const rotateY = mouseX / 20;
const rotateX = -mouseY / 20;

gsap.to(img, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  };

const handleMouseLeave = () => {
gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };


return (
<>
      <div id="top" className='md:h-[55vh] mt-5 flex flex-col md:flex-row gap-10 md:gap-0'>
          <div ref={leftBoxRef} className='w-full md:w-1/3 md:h-full flex flex-col justify-between py-6 md:py-20 order-2 md:order-1'>
              <div>
                <h2 className='text-5xl md:text-6xl font-bold leading-tight'>Shishir Kaphle</h2>
                <p className='text-lg font-semibold mt-3'>Data and Outcomes Intern at SD DSS | CS &amp; Math @ USD</p>
                <p className='text-base text-gray-700 mt-4 max-w-md'>I like understanding the math behind things.</p>
                <p className='text-base text-gray-700 mt-4 max-w-md'>Currently applying that to large-scale state healthcare data — building inclusive, WCAG-compliant Power BI dashboards and automating workflows with Power Automate.</p>
                <p className='text-base text-gray-700 mt-4 max-w-md'>Pursuing research in signal processing and Fourier analysis, alongside ML and inferential statistics.</p>
              </div>
              <div>
                <a href="#contact" className='inline-flex items-center gap-2 mt-3 bg-black text-white font-semibold text-lg px-4 py-2 rounded-lg cursor-pointer active:scale-95'>
                  <Mail size={20}/> Get in touch
                </a>
              </div>
          </div>
          <div  ref={particleBoxRef} onMouseMove={generateParticle} className='w-full md:w-2/3 md:h-full relative flex justify-center md:justify-end items-center perspective-[1000px] overflow-hidden order-1 md:order-2'>
              <img
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
ref={imageRef}
src={profilePhoto}
alt="Shishir Kaphle"
className='w-56 h-56 md:w-[28vw] md:h-[28vw] rounded-full object-cover object-top border-2 border-black'
/>
          </div>
      </div>
    </>
  )
}

export default Page1