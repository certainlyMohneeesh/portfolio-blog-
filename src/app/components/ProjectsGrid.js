import { useEffect, useState } from "react"
import { useTrail, animated, easings } from "@react-spring/web"
import { GRIDS } from "../constants"

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Projects".split("")
  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading = "Here are a few personal projects I've worked on over the years".split("")

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
    config: { mass: 1, tension: 280, friction: 60 }
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

      {/* Title Panel */}
      <animated.div style={animatedStyles} className='row-start-1 md:col-span-4 md:row-span-3'>
        <animated.div style={trails[0]} className='manga-panel h-full w-full p-10 border-4 border-black flex flex-col items-center justify-center gap-3 transform -skew-y-2'>
          <div className='manga-text-bubble'>
            <span className='text-5xl font-bold text-black'>
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

            {/* FarmWise Project */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-5'>
        <animated.div style={trails[1]} className='manga-panel h-full w-full p-6 border-4 border-black cursor-pointer hover:bg-gray-50 transition-colors'>
          <a href="https://github.com/certainlyMohneeesh/FarmWise" target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-bold mb-2 text-black">FarmWise</h2>
            <p className="text-lg text-black">Crop disease prediction and cure using ConVNEXT and GCN</p>
          </a>
        </animated.div>
      </animated.div>

      {/* MySchedule Project */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-4'>
        <animated.div style={trails[2]} className='manga-panel h-full w-full p-6 border-4 border-black cursor-pointer hover:bg-gray-50 transition-colors'>
          <a href="https://scheduler-calendar.vercel.app" target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-bold mb-2 text-black">MySchedule</h2>
            <p className="text-lg text-black">A scheduling platform to plan your days, organize meetings, and stay on top of your schedule</p>
          </a>
        </animated.div>
      </animated.div>

      {/* Task Manager Project */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-5'>
        <animated.div style={trails[3]} className='manga-panel h-full w-full p-6 border-4 border-black cursor-pointer hover:bg-gray-50 transition-colors'>
          <a href="https://tskman.cyth.me" target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-bold mb-2 text-black">Task Manager</h2>
            <p className="text-lg text-black">A modern feature-rich task management application</p>
          </a>
        </animated.div>
      </animated.div>

      {/* Vaulty Project */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-4'>
        <animated.div style={trails[4]} className='manga-panel h-full w-full p-6 border-4 border-black cursor-pointer hover:bg-gray-50 transition-colors'>
          <a href="https://vaulty-omega.vercel.app/sign-in" target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-bold mb-2 text-black">Vaulty</h2>
            <p className="text-lg text-black">A financial management application</p>
          </a>
        </animated.div>
      </animated.div>

    </animated.div>
  )
}
