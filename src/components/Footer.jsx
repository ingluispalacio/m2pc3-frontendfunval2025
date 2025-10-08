import { FaTwitter, FaYoutube, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import SocialMedia from "./SocialMedia";
import SubscribeInput from "./SubscribeInput";

function Footer() {
  const socialIcons = [
    { 
      id: "facebook", 
      element: <FaFacebookF className="w-3 h-3 lg:w-5 lg:h-5" />, 
      url: "https://facebook.com" 
    },
    { 
      id: "twitter", 
      element: <FaTwitter className="w-3 h-3 lg:w-5 lg:h-5" />, 
      url: "https://twitter.com" 
    },
    { 
      id: "linkedin", 
      element: <FaLinkedinIn className="w-3 h-3 lg:w-5 lg:h-5" />, 
      url: "https://linkedin.com" 
    },
    { 
      id: "youtube", 
      element: <FaYoutube className="w-3 h-3 lg:w-5 lg:h-5" />, 
      url: "https://youtube.com" 
    },
  ];
  return (
    <footer className="pt-8 bg-[url(themewagon/footer/image1.png)] bg-cover bg-bottom bg-no-repeat shadow flex flex-col items-center text-sm text-gray-500 lg:px-30 xl:px-50">
      {/* Sección superior */}
      <div className="flex flex-col md:flex-row justify-between w-full py-4 px-3 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 text-center md:text-left">
          <div className='flex flex-col gap-3 lg:gap-6'>
              <h1 className='text-[16px] md:text-lg text-gray-600 font-bold'>About</h1>
              <ul className='text-[10px] lg:text-xs flex flex-col gap-1 lg:gap-3'>
                <li>Prices</li>
                <li>About</li>
                <li>Services</li>
                <li>Career</li>
              </ul>
          </div>

          <div className='flex flex-col gap-3 lg:gap-6'>
              <h1 className='text-[16px] md:text-lg text-gray-600 font-bold'>Resources</h1>
              <ul className='text-[10px] lg:text-xs flex flex-col gap-1 lg:gap-3'>
                <li>Teams</li>
                <li>Helps</li>
                <li>privacy</li>
              </ul>
          </div>

          <div className='flex flex-col gap-3 lg:gap-6'>
              <h1 className='text-[16px] md:text-lg text-gray-600 font-bold'>Team</h1>
              <ul className='text-[10px] lg:text-xs flex flex-col gap-1 lg:gap-3'>
                <li>Developer</li>
                <li>Designer</li>
              </ul>
          </div>

          <div className='flex flex-col gap-3 lg:gap-6'>
              <h1 className='text-[16px] md:text-lg text-gray-600 font-bold'>Blog</h1>
              <ul className='text-[10px] lg:text-xs flex flex-col gap-1 lg:gap-3'>
                <li>CEO</li>
                <li>Lifestyle</li>
                <li>Article</li>
                <li>tech</li>
              </ul>
          </div>
          
        </div>
        <div className="flex flex-col lg:w-100 justify-start md:justify-end  gap-6 px-6 ss:px-10 ms:px-12 md:px-0">
          <h1 className='text-[16px] lg:text-xl text-gray-600 font-bold'>Follow Us</h1>
          <SocialMedia icons={socialIcons} />
          <h1 className='text-[16px] lg:text-xl text-gray-600 font-bold'>Subscribe to our newletter</h1>
          <SubscribeInput />
        </div>
      </div>

      
      <div className="w-full h-[2px] bg-[#B4D2FF]" />

      
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-3 text-gray-600">
        <div>All rights Reserved © Luis Palacio, 2025.</div>
        <div>
          Made with <span className="text-red-500">♥</span> by{" "}
          <b>Themewagon</b>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
