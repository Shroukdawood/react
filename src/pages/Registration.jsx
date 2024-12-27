import React from 'react'

export default function Registration() {
  return (
    <div>
        <header style={{color:"black",
            backgroundColor:"orange",
            textAlign:"center",
            fontFamily:"inherit",
            fontSize:"30px"
        }}>Registration</header>
      <div>  
        <input type="text" placeholder='enter your name' ></input> <button>user name</button>
        <input type='email' plabceholder='enter your mail' ></input> <button>email</button>
        <input type="text" placeholder='enter your phone' ></input> <button>no.phone</button>
        <input type="password" placeholder='enter your password' ></input> <button>password</button>
       
       </div>
    </div>
  )
}
