import { ShareButton } from './ShareButton';

import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg';

export const ShareIcons = () => {
  return (
    <div className='bg-Very-Dark-Grayish-Blue mt-6 flex justify-between items-center px-8 py-4 h-[76px] absolute bottom-0 left-0 right-0 sm:rounded-[10px] sm:h-[55px] sm:bottom-[80px] sm:right-[-60px] sm:left-auto sm:after:absolute sm:after:bottom-[-15px] sm:after:left-[90px] sm:after:border-8 sm:after:border-transparent sm:after:border-t-Very-Dark-Grayish-Blue'>
      <div className='flex gap-6'>
        <p className='uppercase text-Light-Grayish-Blue '>share</p>
        <div className='flex gap-4'>
          <a href="https://www.youtube.com/@CodingTube" target='_blank'>
            <img className='size-[20px] cursor-pointer' src={facebookIcon} alt="facebook Icon" />
          </a>
          <a href="https://www.youtube.com/@CodingTube" target='_blank'>
            <img className='size-[20px] cursor-pointer' src={twitterIcon} alt="twitter Icon" />  
          </a>
          <a href="https://www.youtube.com/@CodingTube" target='_blank'>
            <img className='size-[20px] cursor-pointer' src={pinterestIcon} alt="pinteres Icon" />  
          </a>
        </div>
      </div>
      <ShareButton styles={'sm:hidden'} />
    </div>
  )
}
