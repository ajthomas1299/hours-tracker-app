import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from 'data/account/form';

const SignUp = () => {
  return (
    <div className="grid place-items-center h-screen bg-gray-100">
      <div className="w-full max-w-s">
        <form autoComplete="on">
          <legend>Sign Up</legend>
          {
            signUp.map( item => (
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
