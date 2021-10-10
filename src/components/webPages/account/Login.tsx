import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from 'data/account/form';
import { images } from "data/images"

const Login = () => {


const notify = () => toast("Logging in");

//
const { logo1 } = images;


  return (
    <div className="grid place-items-center h-screen bg-gray-100">
    <img src={ logo1 } className="w-80 sml:hidden"/>
    {/* <div className="w-full h-full max-w-xs"> */}
      <div className="w-full h-full flex flex-col sml:justify-center max-w-xs mb-7 sml:mb-0">
        <legend>log in</legend>
        {
          login.map( item => (
            <section key={item.id}>
              <label htmlFor={item.nameId}>
                {item.nameTitle}
              </label>
              <input  id={item.nameId} type={item.type} placeholder={item.placeholder} />
            </section>
          ))
        }
    <div className="flex items-center flex-col"> 
      <button className="btn" type="button" onClick={notify}>
        Login
      </button>
      <ToastContainer />
      <a className="inline-block mt-2 align-baseline font-bold text-sm text-red-light hover:text-red-dark"  href="#">
        Forgot Password?
      </a>
    </div>
  </div>
    {/* </div> */}
    </div>
  )
}

export default Login
