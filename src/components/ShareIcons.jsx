import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import shareIcon from '../assets/images/icon-share.svg'

export const ShareIcons = () => {
  return (
    <div>
      <div>
        <p>share</p>
        <img src={facebookIcon} alt="facebook Icon" />
        <img src={twitterIcon} alt="twitter Icon" />
        <img src={pinterestIcon} alt="pinteres Icon" />
      </div>
      <img src={shareIcon} alt="pinteres Icon" />
    </div>
  )
}
