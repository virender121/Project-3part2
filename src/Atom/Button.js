import React from 'react'

function Button({buttonText ,onClick ,className ,text}) {
  return (
    <div>
       <button
        onClick={onClick}
        className ={className}
        > 
        {buttonText}
        {text}
       </button>
        </div>
  )
}

export default Button