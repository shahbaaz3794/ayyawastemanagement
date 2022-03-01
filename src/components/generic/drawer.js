import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { RiArrowDropDownLine } from "react-icons/ri";


export default function TemporaryDrawer({ state, toggleDrawer }) {

  const [dropDown, setDropDown] = useState({
    aboutUs: false,
    activities: false,
  })

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    // onClick={toggleDrawer(false)}
    // onKeyDown={toggleDrawer(false)}
    >
      <div className="h-14 flex items-center">
        <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Home</span>
      </div>
      <div className="h-14 flex items-center" onClick={() => setDropDown({ ...dropDown, aboutUs: !dropDown.aboutUs })}>
        <span className="ml-5 font-poppins text-base font-bold text-cyan-800">About Us</span><RiArrowDropDownLine className={`${dropDown.aboutUs ? "rotate-180 transition duration-200" : "transition duration-200"}`} size={35} />
      </div>
      {dropDown.aboutUs === true && <div className="flex flex-col ml-5">
        <div className="h-14 flex items-center">
          <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Who We Are?</span>
        </div>
        <div className="h-14 flex items-center">
          <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Our Goals</span>
        </div>
        <div className="h-14 flex items-center">
          <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Our Team</span>
        </div>
      </div>}


      <div className="h-14 flex items-center">
        <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Donate</span>
      </div>
      <div className="h-14 flex items-center" onClick={() => setDropDown({ ...dropDown, activities: !dropDown.activities })}>
        <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Activities</span><RiArrowDropDownLine className={`${dropDown.activities ? "rotate-180 transition duration-200" : "transition duration-200"}`} size={35} />
      </div>
      {dropDown.activities === true && <div className="flex flex-col ml-5">
        <div className="h-14 flex items-center">
          <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Blogs</span>
        </div>
        <div className="h-14 flex items-center">
          <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Events</span>
        </div>
        <div className="h-14 flex items-center">
          <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Volunteer</span>
        </div>
      </div>}
      <div className="h-14 flex items-center">
        <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Reach Us</span>
      </div>
      <div className="h-14 flex items-center">
        <span className="ml-5 font-poppins text-base font-bold text-cyan-800">Login</span>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
