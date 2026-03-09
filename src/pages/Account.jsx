import MobileContainer from "../components/MobileContainer"
import { FiCamera } from "react-icons/fi"

export default function Account({ user, setUser }) {

  if (!user) return null

  const handleImageUpload = (e) => {

    const file = e.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {

      const updatedUser = {
        ...user,
        image: reader.result
      }

      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))

    }

    reader.readAsDataURL(file)
  }

  return (

    <MobileContainer>

      <div className="flex flex-col h-full">

        {/* Header */}
        <div className="bg-white -mx-[20px] -mt-[40px] px-[20px] py-[14px] border-b border-gray-200">
          <h2 className="text-[18px] font-medium text-[#1D2226]">
            Account Settings
          </h2>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4 mt-6 mb-4">

          <div className="relative">

            <img
              src={user.image || "https://i.pravatar.cc/100"}
              className="w-[64px] h-[64px] rounded-full object-cover"
            />

            {/* Upload Button */}
            <label className="absolute -bottom-1 -right-1 bg-[#6C25FF] w-[22px] h-[22px] rounded-full flex items-center justify-center text-white cursor-pointer">
              <FiCamera size={12} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#1D2226]">
              {user.name}
            </h3>

            <p className="text-[14px] text-[#1D2226] opacity-70">
              {user.email}
            </p>
          </div>

        </div>

        {/* Description */}
        <p className="text-[14px] text-[#1D2226] opacity-70 leading-[22px] mb-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </p>

        <div className="border-t border-dashed border-gray-300 mb-6"></div>

        <div className="mt-auto border-t border-dashed border-gray-300"></div>

      </div>

    </MobileContainer>

  )
}