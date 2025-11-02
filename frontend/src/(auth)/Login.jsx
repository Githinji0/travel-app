import { useNavigate,Link } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  }
  return (
    <div className="max-w-full min-h-fit flex flex-col justify-center items-center">
      <h1 className="text-pink-600 tracking-wide font-bold text-2xl lg:text-3xl">Login</h1>
      <form className="flex flex-col gap-4 mt-4 lg:min-w-[300px] lg:min-h-[400px]">
        <input type="text" placeholder="Username" className="border border-gray-300 p-2 rounded" />
        <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded" />
        <button type="submit" className="text-white w-full bg-pink-600 h-[40px] rounded-sm font-bold">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  )
}

export default Login