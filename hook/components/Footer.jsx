import Logo from '../assets/techlance-logo.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <div className="h-[870px] mdd:h-auto border-2 bg-[#000000CC] flex flex-col items-center justify-evenly mt-20">
        <div className="mt-14 flex flex-col items-center gap-10 ssm:hidden">
            <h1 className="uppercase text-4xl text-white text-center font-bold">Subscribe to our newsletter</h1>
            <form className="flex flex-col gap-10 items-center">
                <div className="relative">
                    <label htmlFor="email" className="absolute left-10 text-white -top-3 bg-[#2c2b2bcc] px-2">Email address</label>
                    <input type="email" placeholder="example@gmail.com" className="rounded-2xl border-[1.5px] px-8 py-4 h-[80px] w-[700px] mdd:w-[400px] bg-transparent outline-none text-white"/>
                </div>
                <button className="captialize py-2 px-20 bg-[#29ABFF] rounded-lg w-96 h-12 capitalize text-base text-white">subscribe</button>
            </form>
        </div>
        <div className='mt-20 flex gap-32 flex-wrap justify-center mdd:px-2 ssm:px-1 ssm:gap-20'>
            <div className='cursor-pointer flex flex-col gap-6 -mt-6'>
                <div className='h-14'><img src={Logo} alt="logo" className='h-full'/></div>
                <p className='text-[#F6FBFF99]'>We are Online! Reach out to Us.</p>
                <div className='flex gap-6'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-6 cursor-pointer'>
                <h1 className='text-3xl text-white font-bold'>Companies</h1>
                <ul className='text-[#F6FBFF99]'>
                    <li>Hire a team</li>
                    <li>Book a call</li>
                    <li>Explore services</li>
                    <li>Customer Reviews</li>
                </ul>
            </div>
            <div className='flex flex-col gap-6 cursor-pointer'>
                <h1 className='text-3xl text-white font-bold'>Techies</h1>
                <ul className='text-[#F6FBFF99]'>
                    <li>Hire a team</li>
                    <li>Book a call</li>
                    <li>Explore services</li>
                    <li>Customer Reviews</li>
                </ul>
            </div>
        </div>
        <ul className='flex gap-8 ssm:flex-wrap text-[#F6FBFF99] mt-16 cursor-pointer pb-6 px-6'>
            <li>Customer support</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li className='ssm:w-full ssm:font-normal ssm:text-white sm:tracking-widest ssm:text-lg'> Techlance <span className='ssm:ml-4'>{new Date().getFullYear()}</span></li>
        </ul>
    </div>
  )
}

export default Footer;