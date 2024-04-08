import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import img6 from '../assets/img-6.png'
import img7 from '../assets/img-7.png'
import img8 from '../assets/img-8.png'
import img9 from '../assets/img-9.png'
import img10 from '../assets/img-10.png'
import img11 from '../assets/img-11.png'
import img12 from '../assets/img-12.png'

function Images() {
  return (
    <section className="grid grid-cols-3 md:grid-cols-4 gap-4 lg:grid-cols-6 my-24">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      <img src={img7} alt="" />
      <img src={img8} alt="" />
      <img src={img9} alt="" />
      <img src={img10} alt="" />
      <img src={img11} alt="" />
      <img src={img12} alt="" />
    </section>
  )
}
export default Images
