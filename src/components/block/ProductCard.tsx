import React from 'react'
import heartIcon from '../../assets/img_icons/heart-icon.png';
import starIcon from '../../assets/img_icons/star-icon.png';
import Button from './Button';

type Props = {
    houseImg: string;
    newProduct: boolean;
    productName: string;
    price: string;
    url: string;
}

const ProductCard: React.FC<Props> = ({houseImg, newProduct = false, productName, price, url}) => {
  return (
    <div className='relative border border-brandDeepGray4 rounded-xl overflow-hidden'>
          <img src={houseImg} alt='' className='h-[200px] w-[265px]' />
          {newProduct ? <span className='bg-white py-[6px] px-3 rounded-3xl text-xs text-brandGreen3 font-medium absolute top-8 left-4'>
        New
      </span> : null}
      
      <div className='p-3 grid gap-3'>
        {/* product name + heart */}
        <div className='flex justify-between items-center'>
                  <p className='text-xl font-semibold'>{ productName }</p>
          <img src={heartIcon} alt='' className='size-5' />
        </div>
        {/* price + rating */}
        <div className='flex justify-between items-center'>
          <p className='text-sm text-brandDeepGray100 font-semibold'>
            { price }
          </p>
          <p className='text-xs flex items-center py-1 gap-1'>
            (5.0) <img src={starIcon} alt='' className='size-3' />
          </p>
        </div>
        {/* divider */}
        <hr className='border border-brandNeutral100' />
        {/* buttons */}
        <div className='flex justify-between items-center'>
          <Button
            variant='textBtn'
            size='small'
            text='View more'
            url={ url }
            className='!px-0'
          />
          <Button size='small' text='Contact Us' url='/contact-us' />
        </div>
      </div>
    </div>
  );
}

export default ProductCard