import logo from '../assets/logo.png'
import searchIcon from '../assets/search-icon.svg'
import { AiOutlineMenu } from 'react-icons/ai'
function Navbar() {
  return (
    <nav className="container flex items-center justify-between py-2 mx-auto">
      <img src={logo} alt="logo" className="cursor-pointer" />
      <div className="">
        <ul className="sm:hidden">
          <AiOutlineMenu className="text-[18px]" />
        </ul>
        <ul className="hidden gap-4 sm:flex">
          <li className="capitalize text-[#EE8542] text-[18px] font-medium cursor-pointer ">
            Home
          </li>
          <li className="hover:text-[#EE8542] cursor-pointer capitalize  text-[18px] font-medium">
            About
          </li>
          <li className="capitalize  text-[18px] font-medium hover:text-[#EE8542] cursor-pointer">
            Services
          </li>
          <li className="capitalize  text-[18px] font-medium hover:text-[#EE8542] cursor-pointer">
            Blog
          </li>
          <li className="capitalize  text-[18px] font-medium hover:text-[#EE8542] cursor-pointer">
            Contact
          </li>
          <li className="capitalize  text-[18px] font-medium hover:text-[#EE8542] cursor-pointer"></li>
          <img src={searchIcon} alt="" />
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
