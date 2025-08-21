import { Fragment } from 'react/jsx-runtime';
import iPhone from '../../assets/images/iphone.png';
import { Button } from '../../components';
import ExploreMarketCard from '../../components/block/ExploreMarketCard';

const ExploreMarket = () => {
  return (
    <Fragment>
      <section className='bg-brandGreen3 pt-[100px] min-[1400px]:pt-[120px] pb-[50px] xllaptop:pb-[100px] relative flex justify-center'>
        
        <div className='inner-container flex flex-col gap-8 relative'>
          <div className='h-fit grid gap-[25px] xltablet:w-2/4 max-xltablet:self-center'>
            <header>
              <h2 className='text-3xl font-bold text-brandWhite w-[12ch] xltablet:w-[16ch]'>
                Explore our Marketplace for affordable gadgets
              </h2>
            </header>
            <p className='w-full max-w-[575px] text-xl font-medium text-brandWhite'>
              Our marketplace allows users to buy and sell gently used gadgets,
              facilitating upgrades and making it easier for everyone to afford
              gadgets and kickstart their tech career effortlessly.
            </p>
          </div>

          <div className='w-full max-xltablet:flex max-xltablet:flex-col-reverse xltablet:grid xltablet:grid-cols-2 items-center justify-center  gap-8 overflow-visible relative'>

            <div className='h-fit grid gap-[24px] max-xltablet:-translate-y-12'>
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

              <Button
                variant='secondary'
                text='Read More'
                className='!text-brandDeepGray100 !w-full xltablet:!w-fit'
              />
            </div>

            <div className='w-screen xltablet:max-w-[57%] xltablet:absolute -right-[6%] -bottom-[50px] xllaptop:-bottom-[100px]'>
              <img src={iPhone} alt='' className='object-cover w-full' />
            </div>
          </div>
        </div>

        {/* ONLY VISIBLE ON XLTABLET AND HIGEHR */}
        {/* <div className='inner-container hidden xltablet:grid xltablet:grid-cols-2 gap-8'>
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

              <Button
                variant='secondary'
                text='Read More'
                className='!text-brandDeepGray100'
              />
            </div>
          </div>

          <div className='xltablet:absolute bottom-0 right-0 w-full max-w-[730px]'>
            <img src={iPhone} alt='' className='object-cover w-full' />
          </div>
        </div> */}
      </section>
    </Fragment>
  );
};

export default ExploreMarket;
