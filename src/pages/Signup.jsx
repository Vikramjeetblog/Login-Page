import { useState } from "react"
import Swal from "sweetalert2"
import MobileContainer from "../components/MobileContainer"
import { useNavigate } from "react-router-dom"
import { validateSignup } from "../utils/Validation"

export default function Signup() {

  const navigate = useNavigate()

  const [errors, setErrors] = useState({})
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [company, setCompany] = useState("")
  const [agency, setAgency] = useState("yes")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {

    if (loading) return

    const formData = { name, phone, email, password }

    const validationErrors = validateSignup(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const confirm = await Swal.fire({
      title: "Create Account?",
      text: "Are you sure you want to create this account?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes"
    })

    if (!confirm.isConfirmed) return

    setLoading(true)

   setTimeout(() => {

  setLoading(false)

  const userData = {
    name,
    email,
    phone,
    company,
    agency
  }

  localStorage.setItem("user", JSON.stringify(userData))

  Swal.fire({
    icon: "success",
    title: "Account Created!"
  })

  navigate("/login")

}, 1200)
}
  return (

    <MobileContainer>

      {/* Title */}
      <h1 className="text-[26px] font-medium text-[#1D2226] mb-4">
        Create your <br /> PopX account
      </h1>

      {/* Full Name */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF]">
          Full Name <span className="text-red-500">*</span>
        </label>

        <input
  type="text"
  placeholder="Enter full name"
  value={name}
  onChange={(e) => {

    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "")

    setName(value)

    setErrors(prev => ({ ...prev, name: "" }))

  }}
  className={`w-full h-[40px] border rounded-md px-3 bg-[#F7F8F9] focus:outline-none
  ${errors.name ? "border-red-500" : "border-gray-300"}`}
/>
         
         

        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF]">
          Phone number <span className="text-red-500">*</span>
        </label>

        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          maxLength="10"
          onChange={(e) => {

            const value = e.target.value.replace(/\D/g, "")
            setPhone(value)

            setErrors(prev => ({ ...prev, phone: "" }))
          }}
          className={`w-full h-[40px] border rounded-md px-3 bg-[#F7F8F9] focus:outline-none
          ${errors.phone ? "border-red-500" : "border-gray-300"}`}
        />

        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF]">
          Email address <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setErrors(prev => ({ ...prev, email: "" }))
          }}
          className={`w-full h-[40px] border rounded-md px-3 bg-[#F7F8F9] focus:outline-none
          ${errors.email ? "border-red-500" : "border-gray-300"}`}
        />

        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF]">
          Password <span className="text-red-500">*</span>
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setErrors(prev => ({ ...prev, password: "" }))
          }}
          className={`w-full h-[40px] border rounded-md px-3 bg-[#F7F8F9] focus:outline-none
          ${errors.password ? "border-red-500" : "border-gray-300"}`}
        />

        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      {/* Company */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF]">
          Company name
        </label>

        <input
          type="text"
          placeholder="Enter company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full h-[40px] border border-gray-300 rounded-md px-3 bg-[#F7F8F9] focus:outline-none"
        />
      </div>

      {/* Agency */}
      <div className="mb-8">

        <p className="text-sm text-[#1D2226] mb-2">
          Are you an Agency? <span className="text-red-500">*</span>
        </p>

        <div className="flex items-center gap-4">

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={agency === "yes"}
              onChange={(e) => setAgency(e.target.value)}
            />
            Yes
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={agency === "no"}
              onChange={(e) => setAgency(e.target.value)}
            />
            No
          </label>

        </div>

      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full h-[40px] text-white rounded-md text-[16px] font-medium 
        bg-gradient-to-r from-[#6C25FF] to-[#7C3AED] hover:opacity-90 transition"
      >
        {loading ? "Submitting..." : "Create Account"}
      </button>

    </MobileContainer>

  )
}