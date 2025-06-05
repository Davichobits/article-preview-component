import { ShareButton } from './ShareButton'
import profileImg from '../assets/images/avatar-michelle.jpg'


export const CardFooter = () => {
  return (
    <div className='flex justify-between items-center mt-12 sm:mt-6'>

      <div className='flex gap-4'>
        <img className='size-10 rounded-full' src={profileImg} alt="profile img" />
        <div>
          <p>Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
      </div>
      <ShareButton />
    </div>
  )
}
