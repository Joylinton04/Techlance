import techlanceLogo from '../assets/techlance-logo.svg'
import bell from '../assets/notification-bell.svg'
import profile from '../assets/profile-pic.svg'
import search from '../assets/search.svg'
import humberburger from '../assets/humberburger.svg'
import message from '../assets/message.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mt-4 flex justify-between items-center p-6'>
        <div className=' w-36 h-10'><img src={techlanceLogo} alt="logo" className='h-full w-full'/></div>
        <ul className='flex gap-8 px-4 capitalize cursor-pointer text-lg mdd:hidden'>
            <li>Home</li>
            <li className='text-active font-semibold'>Explore</li>
            <li>Article</li>
            <li>jobs</li>
            <li>team</li>
        </ul>
        <div className='flex justify-between gap-6'>
            <div className=' w-60 h-9 bg-primary flex items-center rounded p-1 cursor-pointer mdd:hidden'>
                <div className='flex items-center gap-2 w-3/5'>
                    <label 
                        htmlFor="search">
                        <img src={search} alt="search"/>
                    </label>
                    <input type="text" placeholder='search...' className=' border-none outline-none bg-transparent w-1/2'/>
                </div>
                <div className='w-2/5'>
                    <select className='text-xs p-1 rounded cursor-pointer'>
                        <option value="talent">talent</option>
                        <option value="talent">Skill</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center gap-6 mdd:gap-10 cursor-pointer'>
                <img src={message} alt="" className='w-10 h-10 hidden mdd:block ssm:hidden'/>
                <img src={bell} alt="" className='w-10 h-10 ssm:hidden'/>
                <img src={profile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar;