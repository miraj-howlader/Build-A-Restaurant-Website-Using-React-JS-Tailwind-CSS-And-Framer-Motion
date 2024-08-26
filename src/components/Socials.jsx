
import { FaYoutube,FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';

 const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebook />},
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon:  <FaTwitter />},
  { href: '/', icon:  <FaLinkedin />},
];

const Socials = () => {
  return <div className=' flex gap-x-[10px]'>
    {socialData.map((item,index)=>{
      return <a
      className=' border border-white/20 rounded-full w-[35px]
       h-[35px] flex items-center justify-center text-sm
       hover:text-accent hover:border-accent transition-all'
       href={item.href}>{item.icon}</a>
    })}
  </div>;
};

export default Socials;
