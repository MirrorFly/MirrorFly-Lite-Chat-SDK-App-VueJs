import { ChatApp } from "mirrorfly-uikit/dist"
import "mirrorfly-uikit/dist/assets/scss/bundle.css"
import React, {useState} from "react"
import Vue from '@vue/compat'
Vue.use(React)

 function MirrorFlyUIReactComponent() {
    const [number,setNumber] = useState("")
    const [isLogin,setisLogin] = useState(false)
    const licenceKey = ""  //use your license key
  
    React.useEffect(()=>{
      setNumber(localStorage.getItem("Number"))
      if(localStorage.getItem("Number"))
      {setisLogin(true)
      }
    },[])
  
    const logOut=()=>{
      localStorage.setItem("Number","");
      setisLogin(false)
      setNumber('')
    }
    
    const validateNumber = ()=>{
      if(number !== ''){
      setisLogin(true)
      localStorage.setItem("Number",number);
      }}
  
  return (
      <>
     {!isLogin && <form className="form" onSubmit={validateNumber}>
     <div className="login">
    <div className="imgcontainer">
    </div>
            <label className="label">Enter Your User ID: </label>
            <input
              type="text"
              name="phonenumber"
              id="Uname"
              className="input"
              placeholder="Enter Your User ID"
              value={number}
              onChange={(e) =>{setNumber(e.target.value)}}
            /><br/><br/>
          <button type="submit" id="log">
            Login
          </button>
          </div>
        </form>
        }
        
        {isLogin && 
        
        <ChatApp
        width="100%" // custom width for parent container
        height ="100%"
        licenseKey={licenceKey}  
        userIdentifier={number} 
        isLogout={logOut}
        enableDeviceSize={true}
        isCallEnabled = {false} 
         />
        }
      
      </>
      );
 }
 export default MirrorFlyUIReactComponent;