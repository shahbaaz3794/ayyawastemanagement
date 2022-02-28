import React, { useState } from 'react';
import logo from "../../assets/images/ayyalogo.jpg";
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@mui/material/MenuItem';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'

function TopNavigation() {

  const aboutUsState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  })
  const donateState = usePopupState({
    variant: 'popover',
    popupId: 'donateMenu',
  })

  return (
    <div className='h-20 bg-white drop-shadow-md w-full flex justify-between items-center px-10'>
      <a href='#'><img className='h-16 w-16 rounded-full' alt='logo' src={logo} /></a>
      <div>
        <a href='#'><span className='font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8'>HOME</span></a>
        <>
          <span {...bindHover(aboutUsState)} className='font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8'>ABOUT US</span>
          <HoverMenu
            {...bindMenu(aboutUsState)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <MenuItem onClick={aboutUsState.close}>Cake</MenuItem>
            <MenuItem onClick={aboutUsState.close}>Death</MenuItem>
          </HoverMenu>
        </>
        <>
          <span {...bindHover(donateState)} className='font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8'>DONATE</span>
          <HoverMenu
            {...bindMenu(donateState)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <MenuItem onClick={donateState.close}>1</MenuItem>
            <MenuItem onClick={donateState.close}>2</MenuItem>
          </HoverMenu>
        </>
        <a href='#'><span className='font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8'>LOGIN</span></a>
      </div>
    </div>
  )
}

export default TopNavigation;