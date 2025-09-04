import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../block';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MobileMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <Fragment>
      <nav className='grid gap-[30px]'>
        <ul className='grid gap-7'>
          <li>
            <NavLink
              to='/'
              className='py-3 px-[22px] text-lg font-medium'
              onClick={onClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='py-3 px-[22px] text-lg font-medium'
              onClick={onClick}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/our-estate'
              className='py-3 px-[22px] text-lg font-medium'>
              Our Estate
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/e-commerce'
              className='py-3 px-[22px] text-lg font-medium'>
              E-commerce
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/marketplace'
              className='py-3 px-[22px] text-lg font-medium'>
              Marketplace
            </NavLink>
          </li>
        </ul>

        <div
          className='
            flex items-center gap-[10px]
            text-grey15
            h-[45px]
            pt-[40px] pb-[25px]
            '>
          <Button
            variant='tertiary'
            size='regular'
            type='button'
            text='Sign in'
            url='/auth/sign-in'
          />
          <Button
            variant='primary'
            size='regular'
            type='button'
            text='Join Network'
            url='/auth/join-network'
          />
        </div>
      </nav>
    </Fragment>
  );
};

export default MobileMenu;
