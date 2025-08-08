import { Fragment } from 'react/jsx-runtime';
import iPhone from '../../assets/images/iphone.png';
import { Button } from '../../components';
import ExploreMarketCard from '../../components/block/ExploreMarketCard';

const ExploreMarket = () => {
  return (
    <Fragment>
      <section className='bg-brandGreen3 h-fit py-[100px] relative flex justify-center'>
        <div className='inner-container grid grid-cols-2'>
          <div className='h-fit grid gap-[25px] self-center'>
            <header className='w-full max-w-[50ch]'>
              <h2 className='text-5xl leading-[60px] font-bold text-brandWhite'>
                Explore our Marketplace for affordable gadget
              </h2>
            </header>
            <p className='w-full max-w-[42ch] text-xl font-medium text-brandWhite'>
              Our marketplace allows users to buy and sell gently used gadgets,
              facilitating upgrades and making it easier for everyone to afford
              gadgets and kickstart their tech career effortlessly.
            </p>

            <div className='h-fit grid gap-[24px]'>
              <ExploreMarketCard
                title='Secured Transactions process'
                desc='Our platform offers escrow services, whereby funds are held
                    securely until both parties fulfill their obligations.'
              />

              <ExploreMarketCard
                title='Fairly used Items Only'
                desc='Offering fairly used gadgets increases accessibility to
                    technology for individuals who may not be able to afford
                    brand-new items.'
              />
            </div>
            <Button
              variant='secondary'
              text='Read More'
              className='!text-brandDeepGray100'
            />
          </div>
          <div className='absolute bottom-0 right-0 w-full max-w-[730px]'>
            <img src={iPhone} alt='' className='object-cover w-full' />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ExploreMarket;
