import category1 from '../assets/category-1.png'
import category2 from '../assets/category-2.png'
import category3 from '../assets/category-3.png'

function Categories() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
      <div className="text-center px-10 sm:px-0">
        <img
          src={category1}
          alt=""
          className="w-full max-h-[250px] object-cover object-center rounded-xl hover:scale-105 transition duration-300 "
        />
        <h2 className="text-[#393330] text-3xl md:4xl uppercase mt-2">
          pastries
        </h2>
      </div>

      <div className="text-center px-10 sm:px-0 ">
        <img
          src={category2}
          alt=""
          className="w-full max-h-[250px] object-cover object-center rounded-xl hover:scale-105 transition duration-300 "
        />
        <h2 className="text-[#393330] text-3xl md:4xl uppercase mt-2">
          Tea Selection
        </h2>
      </div>

      <div className="text-center px-10 sm:px-0">
        <img
          src={category3}
          alt=""
          className="w-full max-h-[250px] object-cover object-center rounded-xl hover:scale-105 transition duration-300 "
        />
        <h2 className="text-[#393330] text-3xl md:4xl uppercase mt-2 leading-10">
          Coffee Selection
        </h2>
      </div>
    </section>
  )
}
export default Categories
