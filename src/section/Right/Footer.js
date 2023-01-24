import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import CopyrightIcon from '@mui/icons-material/Copyright';
import  "./Footer.css";
import Button from '../../Atom/Button';
import { Avatar } from '@mui/material';
import Trends from './Trends';

function Footer() {
  const [state , setState]=useState(false)
  const [follow, setFollow] = useState(false)
  const [open, setOpen] = useState(false)
  
    
  const toggle =() =>{
     setState(!state)
     console.log('Following')
  }
  const handleClick =() =>{
    setFollow(!follow)
    
 }
 const handleChange =() =>{
    setOpen(!open)
    
 }
  return (
    <>
  
           
    <Trends/>
    <div className='follow'>
      <div><h4 style={{fontweight:'bold'}}>WHO TO FOLLOW </h4> </div><br/>
 <div style={{fontweight:'bold'}} className='modi'><h5><Avatar src='https://www.deccanherald.com/sites/dh/files/articleimages/2023/01/01/nm-1177027-1672590352.jpg'/>NARENDRA MODI<VerifiedTwoToneIcon style={{color: 'Royalblue'}}/></h5><Button className='btn1' onClick={toggle} text={state ? 'Following' : 'Follow'}/></div>
      <div style={{fontweight:'bold'}} className='modi'><h5><Avatar src='https://www.forbesindia.com/media/images/2017/Jan/img_92497_sachin_bg.jpg'/> SACHIN TENDULKAR <VerifiedTwoToneIcon style={{color: 'Royalblue'}}/></h5><Button  className='btn1'onClick={handleClick} text={follow ? 'Following' : 'Follow'}/></div>
     <div style={{fontweight:'bold'}} className='modi'> <h5><Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN7beUxyQ6MOXFsraYTtrvWAe2Q9LRC6fbQ&usqp=CAU'/> GRANT CARDONE <VerifiedTwoToneIcon style={{color: 'Royalblue'}}/></h5><Button className='btn1' onClick={handleChange} text={open ? 'Following' : 'Follow'}/></div>
     <p style ={{color:'Royalblue', marginleft: '1rem'}}>See More</p>
    </div>


    <div className='btn4'>
        <h6>Terms of Services    Privacy Policy    Cookie Policy</h6>
        <h6>ACCESSIBILITY ADS INTO MORE<MoreHorizIcon/></h6>
        <h6><CopyrightIcon/>2023 Twitter.INC</h6>
        
    </div>
    </>
  )
}
    export default Footer;