import homeI from '../assets/home.svg'
import article from '../assets/articles.svg'
import post from '../assets/post.svg'
import team from '../assets/team.svg'
import jobs from '../assets/jobs.svg'

const NavbarBottom = () => {
  return (
    <div className=''>
        <ul className='flex items-center capitalize justify-between px-10 ssm:px-4 py-3 text-2xl mdd:text-base'>
            <li className='flex flex-col justify-center items-center gap-2'><div><img src={homeI} alt="" /></div><span>Home</span></li>
            <li className='flex flex-col justify-center items-center gap-2'><div><img src={article} alt="" /></div><span>articles</span></li>
            <li className='flex flex-col justify-center items-center gap-2'><div><img src={post} alt="" /></div><span>post</span></li>
            <li className='flex flex-col justify-center items-center gap-2'><div><img src={team} alt="" /></div><span>team</span></li>
            <li className='flex flex-col justify-center items-center gap-2'><div><img src={jobs} alt="" /></div><span>jobs</span></li>
        </ul>
    </div>
  )
}

export default NavbarBottom