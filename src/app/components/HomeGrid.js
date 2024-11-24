import { useEffect, useState } from "react"
import { useTrail, animated, easings } from "@react-spring/web"
import { GRIDS } from "../constants"
import WorkExperience from "./WorkExperience"
import Projects from "./Projects"
import Education from "./Education"
import Resume from "./Resume"
import Blog from "./Blog"
import Contact from "./Contact"
import Misc from "./Misc"

export default function HomeGrid({  setCurrentGrid ,animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Mohneesh".split("")
  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading = "Creative Web Developer, Sometimes a cook".split("")
  const [panelOrder, setPanelOrder] = useState([])

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1)
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1)
      }
    }, 150)

    return () => {
      clearInterval(id)
    }
  })

  const trails = useTrail(7, {
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { mass: 1, tension: 280, friction: 60 },
  immediate: false
})


  

  return (
    
<animated.div className='grid grid-cols-1 md:grid-cols-9 md:grid-rows-9 w-screen md:h-screen p-5 gap-5 bg-white relative'>
  {/* Manga Panel Lines Overlay */}
  <div className="absolute inset-0 pointer-events-none" style={{
    backgroundImage: `
      linear-gradient(135deg, black 0.5px, transparent 1px),
      linear-gradient(45deg, black 0.5px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    opacity: 0.1,
    zIndex: 10
  }}/>
   {/* Work Experience Panel */}
   <animated.div style={animatedStyles} className='row-start-5 md:row-span-6 md:col-span-3'
   onClick={() => setCurrentGrid(GRIDS[2])}
   >
    <animated.div style={{
      ...trails[1],
      clipPath: 'polygon(0 0, 100% 3%, 97% 100%, 3% 97%)'
    }} className='manga-panel relative bg-white border-4 border-black h-full w-full'>
      <div className='speed-lines-diagonal'></div>
      <WorkExperience />
    </animated.div>
  </animated.div>

  {/* Projects */}
  <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-3'
  onClick={() => setCurrentGrid(GRIDS[1])}
  >
    <animated.div style={{
      ...trails[3],
      clipPath: 'polygon(3% 0, 97% 3%, 100% 97%, 0 100%)'
    }} className='manga-panel relative h-full w-full bg-white border-4 border-black'>
      <div className='speed-lines-horizontal'></div>
      <Projects />
    </animated.div>
  </animated.div>

  {/* Education */}
  <animated.div style={animatedStyles} className='md:col-span-3 md:row-span-3'>
    <animated.div style={{
      ...trails[2],
      clipPath: 'polygon(5% 2%, 98% 0, 95% 98%, 0 100%)'
    }} className='manga-panel relative h-full w-full border-4 border-black'>
      <div className='speed-lines-cross'></div>
      <Education />
    </animated.div>
  </animated.div>

  {/* Hero/Name Section */}
  <animated.div style={animatedStyles} className='row-start-1 md:col-span-4 md:row-span-3'>
        <animated.div style={trails[0]} className='manga-panel h-full w-full p-10 border-4 border-black flex flex-col items-center justify-center gap-3 transform -skew-y-2'>
          <div className='manga-text-bubble'>
            <span className='text-5xl font-bold text-black' id='home'>
              {name.slice(0, nameIdx).join("")}
              <span className='inline-block mx-2 w-6 h-1 bg-black animate-pulse'></span>
            </span>
          </div>
          <div className='manga-subtitle'>
            <span className='md:text-md text-black'>
              {subheading.slice(0, subheadingIdx).join("")}
              <span className='inline-block w-3 h-0.5 mx-1 bg-black animate-pulse'></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

  {/* Blog */}
  <animated.div style={animatedStyles} className='md:row-span-4 md:col-span-2'
  onClick={() => window.open('https://blog.cyth.me', '_blank')}
  >
    <animated.div style={{
      ...trails[4],
      clipPath: 'polygon(0 3%, 100% 0, 97% 100%, 3% 95%)'
    }} className='manga-panel h-full w-full relative border-4 border-black'>
      <div className='speed-lines-radial'></div>
      <Blog />
    </animated.div>
  </animated.div>

  {/* Resume */}
  <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-2'
  onClick={() => window.open('/resume.pdf', '_blank')}
  >
    <animated.div style={{
      ...trails[5],
      clipPath: 'polygon(5% 0, 98% 2%, 100% 98%, 2% 100%)'
    }} className='manga-panel h-full w-full relative border-4 border-black'>
      <div className='speed-lines-vertical'></div>
      <Resume />
    </animated.div>
  </animated.div>

  {/* Contact */}
  <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-5'>
    <animated.div style={{
      ...trails[4],
      clipPath: 'polygon(2% 0, 100% 5%, 98% 100%, 0 95%)'
    }} className='manga-panel h-full w-full md:flex justify-between items-center p-10 gap-5 border-4 border-black'>
      <div className='speed-lines-burst'></div>
      <Contact />
    </animated.div>
  </animated.div>

  {/* Misc */}
  <animated.div style={animatedStyles} className='md:row-span-2 md:col-span-2'>
    <animated.div style={{
      ...trails[6],
      clipPath: 'polygon(3% 2%, 97% 0, 100% 98%, 0 100%)'
    }} className='manga-panel h-full w-full relative border-4 border-black'>
      <div className='speed-lines-diagonal-reverse'></div>
      <Misc />
    </animated.div>
  </animated.div>
</animated.div>
  )
}