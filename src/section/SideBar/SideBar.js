import React, { useState } from 'react'
import './SideBar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Button  from  '../../Atom/Button';
import TagIcon from '@mui/icons-material/Tag';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
// import Button from './../../Atom/Button'



import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';






function Sidebar ()  {

  const [open, setOpen] = useState(false)
  // const [isMenuPopOver, setIsMenuPopOver] = useState(false)
  


  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose =() => {
    setOpen(false)
  };
       const navigate = useNavigate()
  const handleAdd =() =>{
      console.log('i am clicked')
      navigate('/Login') 
  }

  const handleGetLost=()=>{
    navigate('/Login')

  }
  const handleLost=()=>{
    navigate('/personalProfile')

  }
  
  return (
    <>
    <div className='sidebar'>
      {/* Twitter icon */}
    <TwitterIcon className='sidebar__twitterIcon'/>

    <SidebarOption Icon={HomeIcon} text='Home'/>
    <SidebarOption Icon={TagIcon} text='Explorer'/>
    <SidebarOption Icon={NotificationsActiveIcon} text='Notifications'/>
    <SidebarOption Icon={MailOutlineIcon} text='Message'/>
    <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
    <SidebarOption Icon={PermIdentityIcon} text='Profile' onClick={handleLost}/>
    <SidebarOption Icon={MoreHorizIcon} text='more'/>
    

   
    
    

      {/* button->tweet */}
      {/* <Button variant='outlined' className='sidebar__tweet' fullWidth>tweet</Button> */}
      <span>
      <div className='btn'>
      <Button    onClick={handleClickOpen} style ={{color:'white', fontWeight:"bolder"}}>
        Tweet
      </Button>
      {/* <Button onClick = {handleClickOpen} text='Tweet'/> */}
      <Dialog className='dialog'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">

        <AccountCircleIcon style={{fontSize : "2em"}} />
        <sup>
        <button>Everyone</button>
        </sup>
        </DialogTitle>
       <DialogContent>
         <input placeholder="What's happening ?" style={{height : "20em",width:"42em" }}/>
       </DialogContent>
       <div className='Icon'>
       <SidebarOption Icon={InsertPhotoIcon} />
         <SidebarOption Icon={LocationOnIcon} />
         <SidebarOption Icon={GifBoxIcon} />
         <SidebarOption Icon={BallotOutlinedIcon} />
         <SidebarOption Icon={SentimentSatisfiedAltOutlinedIcon} />
       </div>
        <DialogActions>
         
          <Button onClick={handleClose} autoFocus>
            Tweet
          </Button>
        </DialogActions>
      </Dialog>
    </div>

        </span>
        
        </div>
        <div className='userProfile'>
        <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button className="btn1" variant="contained" {...bindTrigger(popupState)}>
            
            <Avatar src='https://scontent.fccu1-2.fna.fbcdn.net/v/t1.6435-9/142338572_2770513943188439_5386025799280901623_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LqLhshudxrIAX8KXX7z&_nc_ht=scontent.fccu1-2.fna&oh=00_AfCZ59ebNf4K0VlBsBJvnAxlj8B9EJ5gB6VTs9gyp0v9YA&oe=63F73CBB'/> BIPUL KUMAR <br/>@bipul2241 <MoreHorizIcon/></Button>
                
            {/* <Button onClick={handleClick} text={'BiPUL KUMAR'} buttonText={'@bipul2241'}/> */}
            
            <Popover

              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }} onClick={handleAdd}>Add an existing Account</Typography>
              <Typography sx={{ p: 2 }} onClick={handleGetLost}>Logout@bipul2241 Bipul</Typography>
            </Popover>
          </div>
        )}
      </PopupState>
       </div> 
  
        </>
        

  )
}

export default Sidebar
