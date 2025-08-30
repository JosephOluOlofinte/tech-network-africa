// import React from 'react'
import banner from '../../assets/images/why-estate-special-banner.png';
import shield from '../../assets/img_icons/shield-icon.png';

const WhyTheEstate = () => {
  return (
    <section className='bg-white h-fit py-[75px] flex justify-center'>
      <div className='inner-container grid gap-12'>
        <div className='grid justify-center gap-5 laptop:gap-7 desktop:gap-10'>
          <header className='flex justify-center'>
            <h2 className='font-bold text-brandDeepGray900 max-w-[20ch] text-center'>
              Why the Estate is Special
            </h2>
          </header>
          <div className='w-full'>
            <img src={banner} alt='' className='w-full' />
          </div>
        </div>

        <div className='grid xltablet:grid-cols-[45%_55%] laptop:grid-cols-[37%_63%] justify-center items-center gap-y-8'>
          <div className='grid grid-cols-[max-content_auto] gap-5 py-5'>
            <img src={shield} alt='' className='size-9 desktop:size-12' />
            <div className='grid gap-5 h-fit'>
              <h3>
                <b>Tight Securities</b>
              </h3>
              <p>
                From the moment you enter through the main gate, you'll
                experience a range of advanced security measures designed to
                provide peace of mind and safeguard the community.
              </p>
            </div>
          </div>

          <div className='bg-brandBlue2 translate-x-[10%] laptop:translate-x-[25%]'>
            <p className='bg-brandBlue2 text-white laptop:max-w-[480px] xllaptop:max-w-[540px] desktop:max-w-[590px] p-10'>
              This includes state-of-the-art surveillance systems, 24/7 security
              patrols, access control mechanisms, and smart technology
              integration. Our goal is to create a secure environment where
              residents can focus on their work and leisure activities without
              worrying about safety concerns.
            </p>
          </div>

          <div className='grid grid-cols-[max-content_auto] gap-5 py-5'>
            <img src={shield} alt='' className='size-9 desktop:size-12' />
            <div className='grid gap-5 h-fit'>
              <h3>
                <b>Stable Power Supply</b>
              </h3>
              <p>
                All apartment in the estate as a solar inverter installed to
                ensure power supply is not a constraints to work
              </p>
            </div>
          </div>
          <div> </div>

          <div className='grid grid-cols-[max-content_auto] gap-5 py-5'>
            <img src={shield} alt='' className='size-9 desktop:size-12' />
            <div className='grid gap-5 h-fit'>
              <h3>
                <b>Equipped Workstation</b>
              </h3>
              <p>
                All apartment has a level of equipped workspace to make it easy
                for those moving into the apartment to have zero worries about
                how to set up the workspace
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default WhyTheEstate;
