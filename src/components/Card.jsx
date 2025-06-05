import { CardFooter } from './CardFooter'
import { ShareIcons } from './ShareIcons'
import cardImg from '../assets/images/drawers.jpg'

export const Card = () => {
  return (
    <div>
      <img src={cardImg} alt="image" width={300} />
      <p>Shift the overall look and feel by adding these wonderful touches to furniture in your home</p>
      <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
      <CardFooter />
      <ShareIcons />
    </div>
  )
}
