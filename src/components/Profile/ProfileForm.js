import classes from './ProfileForm.module.css';
import React,{useRef,useContext} from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordUseref=useRef();
  const Authctx=useContext(AuthContext);
  const formSubmitHandler=async(event)=>{
    event.preventDefault();
    const UpdatedPassword=newPasswordUseref.current.value;
    const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDW55X8yrfY3DYfPEVnvQZamzWMl7FuhzE",{
      method:'POST',
      body:JSON.stringify({
        idToken:Authctx.token,
        password:UpdatedPassword,
        returnSecureToken:false
      }),
      headers:{
        "content-type":"application/json"
      }
    })
    const data=await response.json();
    if(response.ok){
      console.log(data);
    }
    else{
      console.log(data.error.message);
    }

  }
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordUseref}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
