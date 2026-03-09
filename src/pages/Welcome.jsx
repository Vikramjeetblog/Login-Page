/**
 * Welcome Screen
 * First screen of the PopX app
 */

import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

export default function Welcome() {

  const navigate = useNavigate();

  return (

    <MobileContainer>

      {/* Push content to bottom */}
      <div className="flex flex-col justify-end h-full">

        {/* Text Section */}
        <div className="mb-6">

          {/* Welcome Title */}
          <h1 className="text-[28px] leading-[17px] font-medium text-[#1D2226] mb-3">
            Welcome to PopX
          </h1>

          {/* Description */}
          <p className="text-[18px] leading-[26px] text-[#1D2226] opacity-60">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

        </div>

        {/* Buttons */}
        <div className="space-y-3">

          {/* Create Account */}
          <button
            onClick={() => navigate("/signup")}
            className="w-full h-[46px] bg-[#6C25FF] text-white rounded-md text-[16px] leading-[17px] font-medium hover:bg-[#5a1fd8] transition cursor-pointer"
          >
            Create Account
          </button>

          {/* Already Registered */}
          <button
            onClick={() => navigate("/login")}
            className="w-full h-[46px] bg-[#6C25FF4B] rounded-md text-[16px] leading-[17px] font-medium text-[#1D2226] hover:bg-[#6C25FF66] transition cursor-pointer"
          >
            Already Registered? Login
          </button>

        </div>

      </div>

    </MobileContainer>

  );
}