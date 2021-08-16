import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUpForm } from 'data/account/signUpForm';

const Login = () => {
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
