import { useEffect, useState } from "react"
import { useTrail, animated, easings } from "@react-spring/web"
import WorkExperience from "./WorkExperience"
import Projects from "./Projects"
import Education from "./Education"
import Resume from "./Resume"
import Blog from "./Blog"
import Contact from "./Contact"
import Misc from "./Misc"
import { GRIDS } from "../constants"

export default function WorkGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Work Experience".split("")
  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading = "Here are the places I've worked at over the years".split("")

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

      {/* Job Panel 1 */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-5'>
        <animated.div style={trails[1]} className='manga-panel h-full w-full p-6 border-4 border-black'>
          <h2 className="text-2xl font-bold mb-4">Job Title: Frontend Developer</h2>
          <p className="text-lg">Job Role: Building responsive web applications</p>
        </animated.div>
      </animated.div>

      {/* Job Panel 2 */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-4'>
        <animated.div style={trails[2]} className='manga-panel h-full w-full p-6 border-4 border-black'>
          <h2 className="text-2xl font-bold mb-4">Job Title: UI/UX Designer</h2>
          <p className="text-lg">Job Role: Creating user-centered designs</p>
        </animated.div>
      </animated.div>

      {/* Job Panel 3 */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-5'>
        <animated.div style={trails[3]} className='manga-panel h-full w-full p-6 border-4 border-black'>
          <h2 className="text-2xl font-bold mb-4">Job Title: Web Developer</h2>
          <p className="text-lg">Job Role: Full-stack development</p>
        </animated.div>
      </animated.div>

      {/* Job Panel 4 */}
      <animated.div style={animatedStyles} className='md:row-span-3 md:col-span-4'>
        <animated.div style={trails[4]} className='manga-panel h-full w-full p-6 border-4 border-black'>
          <h2 className="text-2xl font-bold mb-4">Job Title: Software Engineer</h2>
          <p className="text-lg">Job Role: Backend development</p>
        </animated.div>
      </animated.div>
    </animated.div>
  )
}