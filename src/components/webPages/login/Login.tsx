import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex justify-center flex-col items-center bg-white p-10 rounded-lg shadow-md">
        <h1>Hello you there does it work</h1>
        <form>
          <legend>Sign Up</legend>
          <section className="flex flex-col">
            <label htmlFor="firstname">Firstname:</label>
            <input type="text" name="firstname" id="firstname" className="form-input px-1 py-1 rounded border" placeholder="John" />
          </section>
          <section className="flex flex-col">
            <label htmlFor="lastname">Lastname:</label>
            <input type="text" name="lastname" id="lastname" className="form-input px-1 py-1 rounded border" placeholder="Doe" />
          </section>
          <section className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" className="form-input px-1 py-1 rounded border" placeholder="john.doe@example.com" />
          </section>
          <section className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" className="form-input px-1 py-1 rounded border" />
          </section>
          <section className="flex flex-col">
            <label htmlFor="password2">Confirm Password:</label>
            <input type="password" name="password2" id="password2" className="form-input px-1 py-1 rounded border" />
          </section>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
