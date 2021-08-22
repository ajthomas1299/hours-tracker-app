import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from 'data/account/form';

const Login = () => {
const notify = () => toast("Logging in");

  return (
    <div className="grid place-items-center h-screen bg-gray-100">
    <div className="w-full max-w-xs">
      <form>
        <legend>Login</legend>
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
      <a className="inline-block mt-2 align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
    </div>
    </div>
  )
}

export default Login