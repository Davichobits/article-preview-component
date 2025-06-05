import shareIcon from '../assets/images/icon-share.svg';

export const ShareButton = ({handleClick}) => {
  return (
    <button className='bg-Grayish-Blue/20 size-8 rounded-full grid place-content-center cursor-pointer' onClick={handleClick}>
        <img src={shareIcon} alt="Share Icon" />
      </button>
  )
}
