import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Bot } from 'lucide-react'
import { useState } from 'react'
export const Login = () => {

  const API = import.meta.env.VITE_API_URL || "http://localhost:4500/api"
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  })

  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    setPending(true)
    const { identifier, password } = formData;
    if (!identifier || !password) {
      setPending(false)
      return alert("All field are required");
    }

    try {

      const response = await fetch(`${API}/auth/login-user`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await response.json();
      if (data.success) {
        alert(data.message);
        navigate('/');
        window.location.reload();
      }
      else {
        alert(data.message)
        setPending(false)
      }
    } catch (error) {
      console.log(error.message);
    }
    finally {
      setPending(false)
    }
  }
  return (
    <div className='min-h-[calc(100vh-128px)] max-w-7xl mx-auto px-6 pb-8 flex flex-col md:gap-4 items-center justify-center'>
      <div className='rounded-xl p-2 bg-[#e7e0fb] flex items-center'>
        <Bot size={40} className='text-[#7b38f8]' />
      </div>
      <div>
        <h1 className='font-bold text-center text-2xl md:text-3xl'>Welcome Back</h1>
        <span className='text-gray-500 text-base font-medium'>Log in to continue your journey</span>
      </div>
      <form onSubmit={handleLogin}>
        <div className=' w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl'>
          <h2 className='font-medium text-sm p-1.5'>Email or Username</h2>
          <input type="text" placeholder='Enter your email or username' autoComplete='email' className='input' name='identifier' value={formData.identifier} onChange={handleChange} />
          <h2 className='font-medium text-sm p-1.5'>Password</h2>
          <input type="password" placeholder='Enter your password' autoComplete='current-password' className='input' name='password' value={formData.password} onChange={handleChange} />
          <button className='auth-btn' onClick={handleLogin} disabled={pending}>{pending ? "loading..." : "Log in"}</button>
          <h2 className='font-medium text-gray-500 text-sm p-1.5 text-center'>Don't have an account? <NavLink to='/register' className="text-[#5a2bd2] active:text-[#5a2bd2] md:hover:underline">Register</NavLink></h2>
        </div>
      </form>
    </div>
  )
}
