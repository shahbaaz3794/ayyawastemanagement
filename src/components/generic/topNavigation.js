import React, { useState } from 'react';
import logo from "../../assets/images/ayyalogo.jpg";
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@mui/material/MenuItem';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import TemporaryDrawer from './drawer';

function TopNavigation() {

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const aboutUsState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  })
  const donateState = usePopupState({
    variant: 'popover',
    popupId: 'donateMenu',
  })

  return (
    <>
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
      <div className='h-20 bg-white drop-shadow-lg w-full flex justify-between items-center px-4 lg:px-10'>
        <a href='#'><img className='h-16 w-16 rounded-full' alt='logo' src={logo} /></a>
        <div className='flex flex-row h-full items-center'>

          <div className="h-full items-center cursor-pointer lg:flex hidden font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8">
            HOME
          </div>

          <div {...bindHover(aboutUsState)} className="h-full items-center cursor-pointer lg:flex hidden font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8">
            ABOUT US
            <HoverMenu
              {...bindMenu(aboutUsState)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <div className='text-gray-600 font-poppins text-base font-bold hover:text-cyan-500 py-3 px-8 cursor-pointer hover:transition duration-200 hover:translate-x-3 ease-in-out' onClick={aboutUsState.close}>WHO WE ARE?</div>
              <div className='text-gray-600 font-poppins text-base font-bold hover:text-cyan-500 py-3 px-8 cursor-pointer hover:transition duration-200 hover:translate-x-3 ease-in-out' onClick={aboutUsState.close}>OUR GOALS</div>
              <div className='text-gray-600 font-poppins text-base font-bold hover:text-cyan-500 py-3 px-8 cursor-pointer hover:transition duration-200 hover:translate-x-3 ease-in-out' onClick={aboutUsState.close}>OUR TEAM</div>
            </HoverMenu>
          </div>

          <div className="h-full items-center cursor-pointer lg:flex hidden font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8">
            DONATE
          </div>

          <div  {...bindHover(donateState)} className="h-full items-center cursor-pointer lg:flex hidden font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8">
            ACTIVITIES
            <HoverMenu
              {...bindMenu(donateState)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <div className='text-gray-600 font-poppins text-base font-bold hover:text-cyan-500 py-3 px-8 cursor-pointer hover:transition duration-200 hover:translate-x-3 ease-in-out' onClick={donateState.close}>BLOGS</div>
              <div className='text-gray-600 font-poppins text-base font-bold hover:text-cyan-500 py-3 px-8 cursor-pointer hover:transition duration-200 hover:translate-x-3 ease-in-out' onClick={donateState.close}>EVENTS</div>
              <div className='text-gray-600 font-poppins text-base font-bold hover:text-cyan-500 py-3 px-8 cursor-pointer hover:transition duration-200 hover:translate-x-3 ease-in-out' onClick={donateState.close}>VOLUNTEER</div>
            </HoverMenu>
          </div>

          <div className="h-full items-center cursor-pointer lg:flex hidden font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8">
            REACH US
          </div>

          <div className="h-full items-center cursor-pointer lg:flex hidden font-poppins text-gray-600 text-base font-bold hover:text-cyan-500 px-8">
            LOGIN
          </div>

          {!state ? <FiMenu onClick={toggleDrawer(true)} className='lg:hidden flex' size={30} style={{ cursor: "pointer" }} /> : <AiOutlineClose onClick={toggleDrawer(false)} className='lg:hidden flex' size={30} style={{ cursor: "pointer" }} />}
        </div>
      </div>
    </>
  )
}

export default TopNavigation;