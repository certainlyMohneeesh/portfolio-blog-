import "./resume.css"
import ResumeEl from '../assets/ResumeEl.svg'
export default function Resume() {
  return (
    <div className='flex flex-col-reverse items-center justify-center lg:block relative'>
      <ResumeEl className="w-full h-full" />
      <div className='hover:scale-105 transition-all cursor-pointer lg:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-fit px-5 py-2 m-3 border border-white z-10'>
        <h2 className='font-neutral-900 text-3xl font-bold text-white'>
          Resume
        </h2>
      </div>
    </div>
  )
}
