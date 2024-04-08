import reservionImg from '../assets/reservation-1.png'

function Reservation() {
  return (
    <section className="sm:px-0 md:flex bg-[#EDEBE8]   ">
      <div className="flex-1">
        <img src={reservionImg} alt="" className="h-full object-cover" />
      </div>
      <div className="flex-1 mx-12 md:mx-24  flex flex-col pb-12  gap-4">
        <h1 className="text-[#393330] text-4xl md:text-5xl mt-12">
          Reservation
        </h1>
        <p className="font-light">
          Blandit enim pretium purus morbi non tincidunt auctor eu molestie.
          Vitae eu nullam tincidunt accumsan.
        </p>
        <form className="bg-transparent flex flex-col gap-1  ">
          <input
            type="number"
            placeholder="No of Persons"
            className="bg-transparent outline-none"
          />
          <input
            type="date"
            className="bg-transparent text-gray-500 outline-none"
          />
          <br />
          <input type="date" className="bg-transparent text-gray-500" />
          <br />
          <button className="bg-[#EE8542] text-white font-bold py-1 px-4 rounded-2xl text-lg self-start my-2 uppercase hover:bg-[#F6A03F] transition duration-300">
            Find a table
          </button>
        </form>
      </div>
    </section>
  )
}
export default Reservation
