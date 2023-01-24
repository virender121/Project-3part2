import React from 'react'
import './Card.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { AiOutlineRetweet } from 'react-icons/ai';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import {HiOutlineAtSymbol  } from 'react-icons/hi';
import Profile from '../../Profile';


function Cards({children}) {
  return (
    <div className='card'>
      {/* <Avatar style={{margin:'1px solid black',marginBottom:'50px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAII1OEar8pSF-EQWl9wtBIRPIwC6w4PKRCh2m5MjnZ3CJocvGsd9lebaLMVx4iFXF-CA&usqp=CAU' />Cristiano Ronaldo<VerifiedIcon/><HiOutlineAtSymbol/>Cristiano
      {/* <img src="https://images.hindustantimes.com/img/2023/01/20/550x309/TOPSHOT-FBL-RIYADH-CUP-2_1674182847364_1674182847364_1674182921077_1674182921077.jpg" style={{width:'418px',height:'330px'}}/> */}
      
      {/* {children}
    <div className='btn8'><ChatBubbleOutlineIcon/>
    <AiOutlineRetweet/>
    <FavoriteBorderIcon/>
    <SignalCellularAltIcon/></div> */} 
    <Profile/>
    
    </div>
  )
}

export default Cards;