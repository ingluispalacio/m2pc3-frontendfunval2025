import Navbar from "./Navbar";

function Header() {
  return (
    <header className="h-16 bg-gradient-to-r from-white from-0% via-white via-85% to-[#D6E0FC] to-100% flex items-center justify-between lg:px-30 xl:px-50 ">
      <Navbar />
      <div className="flex justify-between text-xs md:text-[14px] lg:text-[16px] xl:text-lg font-bold lg:w-[20%]">
        <button className="py-2  px-3 text-blue-400 hover:underline cursor-pointer">
          Log In
        </button>
        <button
          className="relative py-2 px-3 rounded-2xl shadow-2xl overflow-hidden group transition-all duration-500 cursor-pointer"
        >          
          <span
            className="absolute inset-0 bg-gradient-to-r from-[#C381DB] to-[#4E92F9] 
               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></span>

          {/* Texto degradado (visible al inicio) */}
          <span
            className="relative z-10 bg-gradient-to-r from-[#C381DB] to-[#4E92F9] 
               bg-clip-text text-transparent group-hover:text-white transition-all duration-500"
          >
            Sign Up
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
