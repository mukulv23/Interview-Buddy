import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Bot, MailIcon } from 'lucide-react'

export const Register = () => {
    const [show, setShow] = useState(false);
    const [pending, setPending] = useState(false)
    const [otpPending, setOtpPending] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [otp, setOtp] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const API = import.meta.env.VITE_API_URL;

    const handleRegister = async (e) => {
        e.preventDefault();
        setPending(true);
        const { name, email, username, password, confirmPassword } = formData;
        if (!name || !email || !username || !password || !confirmPassword)
            return alert("All fields are required");
        if (password.length < 6)
            return alert("Password can't be less than 6 Characters")

        try {
            const response = await fetch(`${API}/auth/generate-otp`, {
                method: "POST",
                body: JSON.stringify({ name, email, username, password }),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await response.json();
            if (data.success) {
                setShow(true);
            }
        } catch (error) {
            console.log(error.message)
        }
        finally {
            setPending(false)
        }
    }

    const verifyOtp = async () => {
        setOtpPending(true)
        try {
            const response = await fetch(`${API}/auth/register-user`, {
                method: "POST",
                body: JSON.stringify({ email: formData.email, otp }),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await response.json();
            if (data.success) {
                navigate('/login')
                setShow(false);
            }
        } catch (error) {
            console.log(error.message)
        }
        finally {
            setOtpPending(false)
        }
    }

    return (
        <div className='min-h-[calc(100vh-135px)] max-w-7xl mx-auto px-6 pb-8 flex flex-col md:gap-4 mt-2 md:mt-4 items-center justify-center'>
            {show ? <div className='max-w-sm rounded-2xl bg-white p-6 shadow'>
                <div className='flex flex-col items-center'>
                    <div className='rounded-xl p-2 bg-[#e7e0fb] flex items-center'>
                        <MailIcon size={24} className='text-[#7b38f8]' />
                    </div>
                    <h1 className='font-bold text-xl'>Verify Your Email</h1>
                    <p className='text-gray-500 text-sm text-center'>We've sent a 6-digit code to your@email.com</p>
                    <input type="text" inputMode='numeric' pattern='[0-9]' maxLength={6} placeholder='Enter Otp' className='input mt-4' onChange={(e) => setOtp(e.target.value)} />
                    <button className='auth-btn' onClick={verifyOtp} disabled={otpPending}>{otpPending ? "loading..." : "Verify & Continue"}</button>
                    <button className="cursor-pointer mt-1 w-full max-w-sm" onClick={() => alert("ehh")}>Cancel</button>
                </div>
            </div> :
                <>
                    <div>
                        <h1 className='font-bold text-center text-2xl md:text-3xl'>Create Account</h1>
                        <span className='text-gray-500 text-base font-medium'>Join thousands preparing smarter</span>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className=' w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl'>
                            <h2 className='font-medium text-sm p-1.5'>Full Name</h2>
                            <input type="text" placeholder='Enter your full name' className='input' autoComplete='name' name='name' value={formData.name} onChange={handleChange} />
                            <h2 className='font-medium text-sm p-1.5'>Email Address</h2>
                            <input type="email" placeholder='Enter your email' className='input' autoComplete='email' name='email' value={formData.email} onChange={handleChange} />
                            <h2 className='font-medium text-sm p-1.5'>Username</h2>
                            <input type="text" placeholder='Enter your username' className='input' autoComplete='username' name='username' value={formData.username} onChange={handleChange} />
                            <h2 className='font-medium text-sm p-1.5'>Password</h2>
                            <input type="password" placeholder='Enter your password' className='input' autoComplete='new-password' name='password' value={formData.password} onChange={handleChange} />
                            <h2 className='font-medium text-sm p-1.5'>Confirm Password</h2>
                            <input type="password" placeholder='Confirm your password' className='input' autoComplete='new-password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
                            <button className='auth-btn' type='submit' onClick={handleRegister} disabled={pending}>{pending ? "loading..." : "Register"}</button>
                            <h2 className='font-medium text-gray-500 text-sm p-1.5 text-center'>Already have an account? <NavLink to='/login' className="text-[#5a2bd2] active:text-[#5a2bd2] md:hover:underline">Log in</NavLink></h2>
                        </div>
                    </form>
                </>}
        </div >
    )
}
