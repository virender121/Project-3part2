import React,  {useState}from 'react'
import TweetBox from './Middle';
import "./Feed.css";
import Post from './Card';
import Button from '../../Atom/Button'


function Feed ()  {
//  const [open, setOpen] = useState('')
  // const  handleClick =(e)=>{
  //   e.target.value
  // // setOpen(!open)
  //   console.log ('bhai ab me chl rha hu')
    
  // }
  const following =()=>{
    
  }
  return (
    <>
    <div className='feed'>
      {/* header */} 
      <div className='feed__header'>
        <h2>Home</h2>
        <div className='btt'>
        {/* <Button text={'you' } buttonText = {'For'} /> */}
        {/* <Button onClick ={following} buttonText={'Following'} /> */}
        <p>Foryou</p>
        <br/>
        <p>Following</p>
      </div>
       </div>
      
      {/* tweetbox */}
   
   <TweetBox/>

   
      
       {/* <Post 
      avatar= 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000'
      image='https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000'
      /> */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>


    </div>
    
    </>
    
  )
}

export default Feed
