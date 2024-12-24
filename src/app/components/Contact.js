import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./contact.css"
import ContactMeEl from '../assets/ContactMeEl.svg'

function BlackIconWrapper({ icon, ...rest }) {
  return (
    <IconWrapper
      icon={icon}
      bgColor='bg-black'
      textColor='text-white'
      {...rest}
    />
  )
}

function RedIconWrapper({ icon, ...rest }) {
  return (
    <IconWrapper
      icon={icon}
      bgColor='bg-white'
      textColor='text-black'
      {...rest}
    />
  )
}

function IconWrapper({ icon, bgColor, textColor, target, isEmail }) {
  return (
    <a
      href={isEmail ? `mailto:${target}` : target}
      className={`w-20 h-20 md:w-14 md:h-14 lg:w-20 lg:h-20 ${bgColor} flex items-center justify-center text-3xl transition-all hover:text-4xl cursor-pointer border border-black`}
    >
      <FontAwesomeIcon icon={icon} className={textColor} />
    </a>
  )
}

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
      <div className='w-full md:w-1/2 relative'>
        <ContactMeEl className="w-full h-full" />
        <div className='hover:scale-105 transition-all cursor-pointer absolute bottom-3 bg-black w-fit px-5 py-2 m-3 border border-white'>
        </div>
      </div>
      
      <div className='w-full md:w-1/2 grid grid-cols-3 gap-2 md:gap-3 p-2 md:p-4'>
        <BlackIconWrapper
          icon={faInstagram}
          target='https://www.instagram.com/chemicalmyth/'
        />
        <RedIconWrapper 
          icon={faXTwitter} 
          target="https://x.com/MythChemical" 
        />
        <BlackIconWrapper 
          icon={faYoutube} 
          target="" 
        />
        <RedIconWrapper 
          icon={faLinkedinIn} 
          target="https://www.linkedin.com/in/mohneesh-naidu-780476251/" 
        />
        <BlackIconWrapper 
          icon={faGithub} 
          target="https://github.com/certainlyMohneeesh" 
        />
        <RedIconWrapper 
          icon={faEnvelope} 
          target="certainlymohneesh@gmail.com" 
          isEmail 
        />
      </div>
    </div>
  )
}