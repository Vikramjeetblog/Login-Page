import { useState } from "react"
import Swal from "sweetalert2"
import MobileContainer from "../components/MobileContainer"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {

    if (loading) return

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Please enter email and password"
      })
      return
    }

    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (!storedUser) {
      Swal.fire({
        icon: "error",
        title: "No account found. Please signup first."
      })
      return
    }

    if (storedUser.email !== email) {
      Swal.fire({
        icon: "error",
        title: "Email not found"
      })
      return
    }

    setLoading(true)

    setTimeout(() => {

      setLoading(false)

      Swal.fire({
        icon: "success",
        title: "Login successful!"
      })

      navigate("/account")

    }, 1000)
  }

  return (

    <MobileContainer>

      {/* Title */}
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-[36px] mb-2">
        Signin to your <br/> PopX account
      </h1>

      {/* Subtitle */}
      <p className="text-[18px] text-[#1D2226] opacity-60 leading-[26px] mb-8">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      {/* Email Field */}
      <div className="relative mb-6">

        <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF]">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          autoFocus
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full h-[40px] border border-gray-300 rounded-md px-3 text-sm bg-[#F7F8F9] focus:outline-none"
        />

      </div>

      {/* Password Field */}
      <div className="relative mb-6">

        <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF]">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full h-[40px] border border-gray-300 rounded-md px-3 text-sm bg-[#F7F8F9] focus:outline-none"
        />

      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        disabled={!email || !password || loading}
        className={`w-full h-[46px] text-white rounded-md text-[16px] font-medium transition
        ${!email || !password ? "bg-gray-300" : "bg-[#6C25FF] hover:bg-[#5a1fd8]"}`}
      >
        {loading ? "Signing in..." : "Login"}
      </button>

    </MobileContainer>

  )
}