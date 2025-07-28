
import { Fragment } from "react/jsx-runtime";
import iPhone from '../../assets/images/iphone.png'
import { Button } from "../../components";

const ExploreMarket = () => {
  return (
    <Fragment>
      <section className='bg-mintGreen3 h-fit py-[100px] relative flex justify-center'>
        <div className='inner-container grid grid-cols-2'>
          <div className="h-fit grid gap-[25px] self-center">
            <header className='w-full max-w-[50ch]'>
              <h2 className='text-5xl leading-[60px] font-bold text-[#F4F7FF]'>
                Explore our Marketplace for affordable gadget
              </h2>
            </header>
            <p className='w-full max-w-[42ch] text-xl font-medium text-[#F4F7FF]'>
              Our marketplace allows users to buy and sell gently used gadgets,
              facilitating upgrades and making it easier for everyone to afford
              gadgets and kickstart their tech career effortlessly.
            </p>
            <div className="h-fit grid gap-[24px]">
              <div className='bg-brandWhite h-fit min-h-[170px] w-full max-w-[575px] py-[20px] border-b-[6px] border-mintGreen4 rounded-lg flex justify-center'>
                <div className='w-[91%] grid gap-[10px] h-fit'>
                  <h3 className='text-2xl font-bold'>
                    Secured Transactions process
                  </h3>
                  <p className='text-lg font-medium text-slateGray500'>
                    Our platform offers escrow services, whereby funds are held
                    securely until both parties fulfill their obligations.{' '}
                  </p>
                </div>
              </div>

              <div className='bg-brandWhite h-fit min-h-[170px] w-full max-w-[575px] py-[20px] border-b-[6px] border-mintGreen4 rounded-lg flex justify-center'>
                <div className='w-[91%] grid gap-[10px] h-fit'>
                  <h3 className='text-2xl font-bold'>Fairly used Items Only</h3>
                  <p className='text-lg font-medium text-slateGray500'>
                    Offering fairly used gadgets increases accessibility to
                    technology for individuals who may not be able to afford
                    brand-new items
                  </p>
                </div>
              </div>
            </div>
            <Button variant='secondary' text='Read More' className="!text-slateGray100" />
          </div>
          <div className='absolute bottom-0 right-0 w-full max-w-[730px]'>
            <img src={iPhone} alt='' className='object-cover w-full' />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ExploreMarket