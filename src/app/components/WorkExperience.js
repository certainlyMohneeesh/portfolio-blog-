import "./work-experience.css"
import WorkExpEl from '../assets/WorkExpEl.svg'
export default function WorkExperience() {
  return (
    <div className='flex flex-col-reverse items-center justify-center lg:block'>
    <WorkExpEl className="w-full h-full"/>
      <div className='hover:scale-105 transition-all cursor-pointer lg:absolute bottom-3 bg-black w-fit px-5 py-2 m-3 border border-white'>
      <h2 className='font-neutral-900 text-3xl font-bold text-white'>
          Work Experience
        </h2>
      </div>
    </div>
  )
}
