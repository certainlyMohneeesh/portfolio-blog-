import "./blog.css"
import BlogEl from '../assets/BlogEl.svg'

export default function Blog() {
  return (
    <div className='flex flex-col-reverse items-center justify-center lg:block relative'>
      <BlogEl className="w-full h-full"/>
      <div className='hover:scale-105 transition-all cursor-pointer lg:absolute bottom-3 bg-black w-fit px-5 py-2 m-3 border border-white'>
        <h2 className='font-neutral-900 text-3xl font-bold text-white'>
          Blog
        </h2>
      </div>
    </div>
  )
}
