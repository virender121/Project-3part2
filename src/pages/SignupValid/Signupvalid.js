import React, { useEffect, useState } from 'react'
import style from './Signupvalid.module.css'
import Button from '../../Atom/Button'
import { TfiTwitterAlt } from "react-icons/tfi";
// import { GrGoogle } from "react-icons/gr";
import { json, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DayDropdown from '../Day/Day';
import MonthDropdown from '../Month/Month';
import YearDropdown from '../Year/Year';
// import Inputfield from '../../Atom/Input/Input';




function SignUp() {
  
  const [formValues, setFormValues] = useState({
    name:"",
    email:"",
    password:"", 
    day:"",
    month:"",
    year:""
    

  });

  const [data, setData] = useState([])
    
  // const newArr= data.map((x)=> x.day===formValues || x.month===formValues || x.year===formValues)
  // setData(...formValues)

   const  handleChange =(e)=>{
        //  console.log(e.target.value)
     
      const {value,name}= e.target;
      // console.log(value,name)
   

      setFormValues(()=>{
        return{
            ...formValues,
            [name]:value
  
        }
       })
     };
    
 

  //  const nevigate = useNavigate()
  //     const Forgetpas=()=>{
       
  //        nevigate('/Forget')
  //     }
  //     const Nextbutten=()=>{
       
  //       nevigate('/Nextbutten')
  //    }
  const navigate = useNavigate()
    const handleSubmit=(e)=>{
      e.preventDefault();

      const {name,email,password,day,month,year} = formValues;

      if(name===""){
        alert("name field is required")
      } else if (email=== ""){
        alert("email field is required")
      } else if (!email.includes("@")){
        alert ("plz enter valid email address")
      } else if (password===""){
        alert("password field is required")
      } else if(password.length < 8){
        alert("password length greater 8")
      } else if (Date===''){
      //   alert('day field is required')
      // }else if (month===''){
       
      //   alert ('month is reqired')
      // } else if (year===""){

      // alert ('year is  required')
        
    } else{
          
        localStorage.setItem("user", JSON.stringify([...data,formValues]))

        navigate('/Login')
  }
  
 

    
}
    

  return (
    <>

     <div className={style.main}>
      <form>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi}/>
       &nbsp;
       <h1 className={style.h2}>Sign in to Twitter</h1>
       &nbsp;
      
       
              &nbsp;
             
              <input placeholder='Name'
               className={style.input}
                onChange={handleChange}
                type='text'
                name='name'
                value={formValues.name}
                />
                 <input placeholder='Email'
               className={style.input}
                onChange={handleChange}
                type='email'
                name='email'
                value={formValues.email}
                />
                 <input placeholder='Password'
               className={style.input}
                onChange={handleChange}
                type='password'
                name='password'
                value={formValues.password}
                />
               

           

              <br/>
              <h5 className={style.h2}>Date of birth</h5>
              <ul className={style.li}>
                <li > 
                This will not be shown publicly. Confirm your own age, even if this  
                </li>
                <li>
                business, a pet, or something else.
                </li>
              </ul>
            
              <div className={style.Dob}>
        
          <div className={style.date}>
       <span><MonthDropdown /></span> 
        <span><DayDropdown/></span>
        <span><YearDropdown /></span>
        </div>
              
              </div> 
               
           <br/>
           <Button
       buttonText="Submit"
       onClick={handleSubmit}
       className={style.But} 
       
       />
        </div>
        </form>
      </div>   
    
    
    </>

  )
}

export default SignUp




