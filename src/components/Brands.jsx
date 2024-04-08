import brand1 from '../assets/logo1.png'
import brand2 from '../assets/logo2.png'
import brand3 from '../assets/logo3.png'
import brand4 from '../assets/logo4.png'
import brand5 from '../assets/logo5.png'

function Brands() {
  return (
    <section className="flex items-center justify-center gap-8 flex-wrap container mx-auto">
      <img src={brand5} alt="" className="max-h-[100px]" />
      <img src={brand1} alt="" className="max-h-[100px]" />
      <img src={brand2} alt="" className="max-h-[100px]" />
      <img src={brand3} alt="" className="max-h-[100px]" />
      <img src={brand4} alt="" className="max-h-[100px]" />
    </section>
  )
}
export default Brands
