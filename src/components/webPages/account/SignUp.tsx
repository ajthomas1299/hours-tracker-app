import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUpForm } from 'data/account/signUpForm';

const SignUp = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex justify-center flex-col items-center bg-white py-10 px-40 rounded-lg shadow-md">
        <form autoComplete="on" className="w-screen max-w-lg">
          <legend>Sign Up</legend>
          {
            SignUpForm.map( item => (
              <section 
                key={item.id}
                className="flex flex-col w-full"

              >
                <label 
                  htmlFor={item.nameId}
                >
                  {item.nameTitle}:
                </label>
                <input 
                  type={item.type} 
                  name={item.nameId} 
                  id={item.nameId} 
                  placeholder={item.placeholder} 
                />
              </section>
            ))
            }          
          <button className="btn">
            Sign Up
          </button>

        </form>
      </div>
    </div>
  )
}

export default SignUp
