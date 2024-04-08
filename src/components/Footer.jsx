import logo from '../assets/logo.png'
import social1 from '../assets/social-1.png'
import social2 from '../assets/social-2.png'
import social3 from '../assets/social-3.png'
import social4 from '../assets/social-4.png'
import social5 from '../assets/social-5.png'
function Footer() {
  return (
    <section className="container mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pb-16 border-b border-b-[#D2CFCC] ">
      <div className="space-y-2 ">
        <img src={logo} alt="" />
        <p>
          Blandit enim pretium purus morbi non tincidunt auctor eu molestie.
        </p>
        <div className="flex gap-2">
          <img src={social1} alt="" className="text-[#EE8542]" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />
          <img src={social4} alt="" />
          <img src={social5} alt="" />
        </div>
      </div>

      <div>
        <ul className="flex flex-col gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Help & support</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <p>address 1, location, 123</p>
        <p>address 1, location, 123</p>
        <p>address 1, location, 123</p>
      </div>

      <div>
        <p>YOurinfo@mail.com</p>
        <p>address, location, 123</p>
        <p>111 222 333 444 555</p>
      </div>
    </section>
  )
}
export default Footer
