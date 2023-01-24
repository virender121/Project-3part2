import React, { useState } from 'react'
import style from './Nextbutton.module.css'
import Button from '../../Atom/Button'
import { TfiTwitterAlt } from "react-icons/tfi";
// import { GrGoogle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
// import Sidebar from '../../section/SideBar/SideBar';


function Login() {
  const[state,setState]=useState("")
  // const [data,setData]=useState("")


  let getItem= JSON.parse(localStorage.getItem("user"))
  // console.log(getItem)

   const  handleinput =(e)=>{

     setState(e.target.value)
    
     console.log(e.target.value)
     
   }
   const navigate = useNavigate()
   const handleDetail=(e)=>{
    e.preventDefault()

    const newArr = getItem.filter((x)=>x.email===state|| x.password===state)

    if(newArr.length===0){
      alert("user not found")
    }else{
    
    navigate("/Home")
    }
   }

    

     



  //  const nevigate = useNavigate()
  //     const Forgetpas=()=>{
       
  //        nevigate('/Forget')
  //     }
 
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi}/>
       &nbsp;
       <h1 className={style.h2}>Enter your password</h1>
       &nbsp;
       

       
       &nbsp;
       &nbsp;
      
       &nbsp;
      



      
     
              &nbsp;
              <input placeholder='Password' className={style.input} onChange={handleinput}/>
              <p className={style.p}>Forgot password?</p>
              &nbsp;
              <Button
       buttonText="Log in"
       onClick={handleDetail}
       
       className={style.But} />
       <h5 className={style.h5}>Don't have an account? <a href='Singup' className={style.a}>Sign up</a></h5>
       
       &nbsp;
      
       &nbsp;
       &nbsp; &nbsp;
       
             
            

          

      </div>
      </div>   
    
    
    </>

  )
}

export default Login



































// function Login() {
//   return (
//    <>
//     <h2 className={style.h2}>
//         welcome to Login pages
//     </h2>


//    </>
//   )
// }

// export default Login
// import * as React from 'react';

// import Dialog from '@mui/material/Dialog';
// import Box from '@mui/material/Box';
// import DialogContentText from '@mui/material/DialogContentText';
// import Input from '../Input/Input';


// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(true);

 

//   return (
//     <div>
      
//       <Dialog
//         open={open}
//          >
//             <input className={style.input} placeholder='keyboard'/>
//             <br/>
//             <br/>
//             <input placeholder='keyboard'/>
        
//     <span> <h2>welcome to twitter</h2> 
    
//     <input placeholder='keyboard'/>
//      <h5>welcome</h5></span>
     
//       </Dialog>
//     </div>
//   );
// }
