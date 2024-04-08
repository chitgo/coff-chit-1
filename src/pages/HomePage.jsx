import About from '../components/About'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import Reservation from '../components/Reservation'
import Articles from '../components/Articles'
import Images from '../components/Images'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

function HomePage() {
  return (
    <div className="bg-[#f5f4f2] ">
      <Top />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Categories />
      <Menu />
      <Reservation />
      <Testimonials />
      <Articles />
      <Images />
      <Brands />
      <Footer />
    </div>
  )
}
export default HomePage
