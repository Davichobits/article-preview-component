import { useContext } from 'react';
import shareIcon from '../assets/images/icon-share.svg';
import { ShowContext } from '../contexts/ShowContext';

export const ShareButton = () => {
  const { show, setShow } = useContext(ShowContext);
  
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <button className='bg-Grayish-Blue/20 size-8 rounded-full grid place-content-center cursor-pointer' onClick={handleClick}>
        <img src={shareIcon} alt="Share Icon" />
      </button>
  )
}
