import "./education.css"
import EducationEl from '../assets/EducationEl.svg'
export default function Education() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-1/2'>
        <EducationEl className="w-full h-full" />
      </div>
      <div className='hover:scale-105 transition-all cursor-pointer absolute bottom-3 bg-black w-fit px-5 py-2 m-3 border border-white'>
        <h2 className='font-neutral-900 text-3xl font-bold text-white'>
          Education
        </h2>
      </div>
    </div>
  )
}


