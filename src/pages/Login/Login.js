import React, { useState } from 'react'
import style from './Login.module.css'
import Button from '../../Atom/Button'
import { TfiTwitterAlt } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';


function Login() {
  const[state,setState]=useState("")

   const  handelinput =(e)=>{
   
     setState(e.target.value)

    
     console.log(e.target.value)
   }

   const nevigate = useNavigate()
      const Forgetpas=()=>{
        nevigate('/Forget')
      }


      const Nextbutton=()=>{
        

        (state=="")?(alert("Sorry, we could not find your account.")):
        nevigate('/Nextbutton')
     }
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi} />
       &nbsp;
       <h2 className={style.h2}>Sign in to Twitter</h2>
       &nbsp;
       <Button 
       
       buttonText = {<FcGoogle/>}
       
       
       text = "  Sign in with Google"
       className={style.Button}

       />
       &nbsp;
       &nbsp;
       <Button  
       buttonText={<BsApple/>}
    
       text="  Sign in with Apple"
       className={style.Button} />
       &nbsp;
      
       <div className={style.or}>
              <p className={style.line}>_________________</p>
              Or
              <p className={style.line}>_________________</p>
              </div>
              &nbsp;
              <input  placeholder='Phone, email or username'  className={style.input} onChange={handelinput}/>
              &nbsp;
              <Button
       buttonText="Next"
       onClick={Nextbutton}
       className={style.But} />
       &nbsp;
       <Button
       buttonText="Forgot password?"
       onClick={Forgetpas}
       className={style.Butt} />
       &nbsp;
       &nbsp; &nbsp;
       <h5 className={style.h5}>Don't have an account? <a href='Singup' className={style.a}>Sign up</a></h5>
             
            

          

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
