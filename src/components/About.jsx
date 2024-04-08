import aboutImg from '../assets/about-img.png'

function About() {
  return (
    <section className="container flex flex-col md:flex-row items-center mx-auto justify-center">
      <div className="  ">
        <img src={aboutImg} alt="" className="h-full  object-cover" />
      </div>
      <div className=" ">
        <h1 className="text-[#393330] text-4xl lg:6xl 2xl:text-8xl ">
          About Us
        </h1>
        <p className="font-light text-gray-500  text-lg mt-4 ml-8 max-w-[600px] ">
          Welcome to Kofee Cafe, where we strive to provide a memorable coffee
          experience in a cozy and inviting atmosphere. At Kofee Cafe, we are
          passionate about serving artisanal coffee that delights the senses.
          Our expert baristas skillfully craft each cup, ensuring the perfect
          balance of flavors and aromas. Whether you're a coffee aficionado or a
          casual coffee lover, our diverse coffee selection, including classics
          like cappuccinos and lattes.
        </p>
        <button className="bg-[#EE8542] text-white font-bold py-2 px-8 rounded-2xl text-lg mt-4 capitalize ml-8 uppercase hover:bg-[#F6A03F] transition duration-300">
          About us
        </button>
      </div>
    </section>
  )
}
export default About
