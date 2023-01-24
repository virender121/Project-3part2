import { Avatar, Button } from '@mui/material';
import React from 'react';
import Profile from '../../Profile';



import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import BallotIcon from '@mui/icons-material/Ballot';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';







function TweetBox ()  {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://www.fuchsiamagazine.com/wp-content/uploads/2021/12/Mahira-25.jpg'/>
         <input placeholder='Whats happening'
          type='text'
          name='Everyone can reply'/>
        <Button>Tweet</Button>
        </div>
        <div className='Icons_1'>
          <AddPhotoAlternateIcon/>
          <AddLocationAltIcon />
        <BallotIcon/>
        <InsertEmoticonIcon/>
        <EventRepeatIcon/> 

        </div>
      </form>
      {/* {
      tweetPosts.map(profile =>(
        <ProfileCard
        profileData={profile}
        />
  ))
      } */}
    
      
    // </div>
  );
}

export default TweetBox;
