export default function MobileContainer({ children }) {
  return (
    <div className="flex justify-center min-h-screen bg-[#F7F8F9] pt-10 pb-10 overflow-hidden">

      {/* Mobile Screen */}
      <div className="w-[375px] h-[590px] border border-gray-300 px-[20px] py-[40px] bg-[#F7F8F9]">

        {children}

      </div>

    </div>
  );
}