import React from 'react'
import heartIcon from '../../assets/img_icons/heart-icon.png';
import starIcon from '../../assets/img_icons/star-icon.png';
import Button from './Button';

type Props = {
    productImg: string;
    newProduct: boolean;
    name: string;
    price: string;
    url: string;
}

const ProductCard: React.FC<Props> = ({
  productImg,
  newProduct = false,
  name,
  price,
  url,
}) => {
  return (
    <div className='relative border border-brandDeepGray4 rounded-xl overflow-hidden w-full max-w-[350px]'>
      <img src={productImg} alt='' className='h-auto w-full' />
      {newProduct ? (
        <span className='bg-white py-[6px] px-3 rounded-3xl text-xs text-brandGreen3 font-medium absolute top-8 left-4'>
          New
        </span>
      ) : null}

      <div className='p-3 grid gap-3'>
        {/* product name + heart */}
        <div className='flex justify-between items-center'>
          <p className='text-xl font-semibold'>{name}</p>
          <img src={heartIcon} alt='' className='size-5' />
        </div>
        {/* price + rating */}
        <div className='flex justify-between items-center'>
          <p className='text-sm text-brandDeepGray100 font-semibold'>{price}</p>
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
            url={url}
            className='!px-0'
          />
          <Button size='small' text='Contact Us' url='/contact-us' />
        </div>
      </div>
    </div>
  );
};

export default ProductCard