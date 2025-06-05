import { useContext } from 'react';
// components
import { ShareIcons } from './ShareIcons'
import { CardFooter } from './CardFooter';
// images
import cardImg from '../assets/images/drawers.jpg'
// context
import { ShowContext } from '../contexts/ShowContext';

export const Card = () => {
  const { show } = useContext(ShowContext);

  return (
    
    <div className='w-[327px] rounded-[10px] overflow-hidden bg-Light-Grayish-Blue'>
      <img src={cardImg} alt="card image" />
      <div className='px-[30px] pt-8 pb-[18px] text-Very-Dark-Grayish-Blue'>
        <p className='text-xl font-semibold mb-6'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</p>
        <p className='font-medium'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        {!show && <CardFooter /> }
      </div>
      {show && <ShareIcons />}
        
    </div>
    
  )
}
