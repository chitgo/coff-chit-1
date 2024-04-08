import logo from '../assets/logo.png'
import searchIcon from '../assets/search-icon.svg'
import { AiOutlineMenu } from 'react-icons/ai'
function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center py-2">
      <img src={logo} alt="" />
      <div>
        <ul className="sm:hidden">
          <AiOutlineMenu className="text-[18px]" />
        </ul>
        <ul className="hidden sm:flex gap-4">
          <li className="capitalize text-[#EE8542] text-[18px] font-medium">
            Home
          </li>
          <li className="capitalize  text-[18px] font-medium">About</li>
          <li className="capitalize  text-[18px] font-medium">Services</li>
          <li className="capitalize  text-[18px] font-medium">Blog</li>
          <li className="capitalize  text-[18px] font-medium">Contact</li>
          <li className="capitalize  text-[18px] font-medium"></li>
          <img src={searchIcon} alt="" />
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
