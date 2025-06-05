import profileImg from '../assets/images/avatar-michelle.jpg'
import shareIcon from '../assets/images/icon-share.svg'
export const CardFooter = () => {
  return (
    <div>
      <img src={profileImg} alt="profile img" />
      <div>
        <p>Michelle Appleton</p>
        <p>28 Jun 2020</p>
      </div>
      <img src={shareIcon} alt="" />
    </div>
  )
}
