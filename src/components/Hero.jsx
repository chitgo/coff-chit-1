import heroImg from '../assets/hero-img.png'

function Hero() {
  return (
    <section>
      <img
        src={heroImg}
        className="min-h-[380px] md:min-h-[500px] object-cover object-right"
        alt=""
      />
      <div className="bg-[#f5f4f2] w-10/12 container mx-auto md:flex  border-2 border-[#D2CFCC] rounded-2xl md:-translate-y-1/2 -translate-y-[100px] text-center  sm:text-left">
        <div className="border-b-2 md:border-b-0  md:border-r-2 flex flex-col justify-center gap-4  w-full md:pr-6 py-4 items-center md:items-start">
          <h2 className="text-[#393330] text-3xl md:4xl mb-2 uppercase font-bold">
            Have a cup of coffee
          </h2>
          <p className="text-xl font-light text-gray-500 ">
            Morbi justo vel diam non leo elementum massa. Molestie ipsum
            condimentum egestas vitae ut cras aenean aoreet odionis.
          </p>
          <button className="bg-[#EE8542] text-white font-bold py-2 px-6 rounded-2xl text-lg mb-4 md:mb-0 uppercase hover:bg-[#F6A03F] transition duration-300">
            Book a table
          </button>
        </div>
        <div className="md:pl-6  py-4 flex flex-col items-center text-center ">
          <h2 className="text-[#393330] text-3xl md:4xl mb-2 uppercase font-bold ">
            It’s a Kofee time
          </h2>
          <p className="text-xl text-gray-500 text-center font-semibold">
            Mon - Fri <br /> 6.00 am - 7.00 pm
          </p>
          <p className="text-xl  text-gray-500 text-center font-semibold">
            Sat - Sun <br /> 7.00 am - 3.00 pm
          </p>
        </div>
      </div>
    </section>
  )
}
export default Hero
