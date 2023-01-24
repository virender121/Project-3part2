
import React, { useState } from 'react'
import style from './Singup.module.css'
import Button from '../../Atom/Button'
import { TfiTwitterAlt } from "react-icons/tfi";
import { GrGoogle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";


function SignUp() {
  const[state,setState]=useState("")

   const  handelinput =(e)=>{

     setState(e.target.value)
    
     console.log(e.target.value)
   }

   const nevigate = useNavigate()
      const Forgetpas=()=>{
       
         nevigate('/Forget')
      }
     
      const signnewpage =()=>{
       
         nevigate('/Singnewpage')
      }
    //   const account =()=>{
       
    //     nevigate('/Account')
    //  }
 
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi}/>
       &nbsp;
       <h1 className={style.h2}>Join Twitter today</h1>
       &nbsp;
       <Button 
       buttonText = {<FcGoogle/>}
       
       text = "  Sign up with Google"
       className={style.Button}

       />
       &nbsp;
       &nbsp;
       <Button  
       buttonText={<BsApple/>}
       text="  Sign up with Apple"
       className={style.Button} />
       &nbsp;
       &nbsp;
       &nbsp;

      
       <div className={style.or}>
              <p className={style.line}>_______</p>
              Or
              <p className={style.line}>_______</p>
              </div>
            
              <Button
       buttonText="Sign up with Phone or email"
       onClick={signnewpage}
       className={style.But} />
       &nbsp;
       <ul>
     <li className={style.li}> By signing up, you agree to the <span className={style.li1}>Terms of Service</span> </li>
    <li  className={style.li}>  and <span className={style.li1}>Privacy Policy</span>, including <span className={style.li1}>Cookie Use</span>.</li>
    </ul> 
       &nbsp;
       &nbsp; &nbsp;
       <h5 className={style.h5}>Have an account already? <a href='Login' className={style.a}>Login</a></h5>
             
            

          

      </div>
      </div>   
    
    
    </>

  )
}

export default SignUp



































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