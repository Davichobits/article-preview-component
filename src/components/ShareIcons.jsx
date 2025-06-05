import { ShareButton } from './ShareButton';

import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg';

export const ShareIcons = () => {
  return (
    <div className='bg-Very-Dark-Grayish-Blue mt-6 flex justify-between items-center px-8 py-4'>
      <div className='flex gap-6'>
        <p className='uppercase text-Light-Grayish-Blue '>share</p>
        <div className='flex gap-4'>
          <img className='size-[20px] cursor-pointer' src={facebookIcon} alt="facebook Icon" />
          <img className='size-[20px] cursor-pointer' src={twitterIcon} alt="twitter Icon" />
          <img className='size-[20px] cursor-pointer' src={pinterestIcon} alt="pinteres Icon" />
        </div>
      </div>
      <ShareButton />
    </div>
  )
}
