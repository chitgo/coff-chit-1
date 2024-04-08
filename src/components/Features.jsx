import feature1 from '../assets/feature-1.svg'
import feature2 from '../assets/feature-2.svg'
import feature3 from '../assets/feature-3.svg'
import feature4 from '../assets/feature-4.svg'
function Features() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 text-center container mx-auto gap-8 ">
      <div className="text-[#4F4844] flex flex-col items-center space-y-2 ">
        <img src={feature1} alt="" />
        <h3 className="text-xl md:text-[28px] font-medium">Cozy Ambiance</h3>
        <p className="font-light max-w-[300px]">
          Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.
        </p>
      </div>

      <div className=" text-[#4F4844] flex flex-col items-center space-y-2 ">
        <img src={feature2} alt="" />
        <h3 className="text-xl md:text-[28px] font-medium">Artisanal Coffee</h3>
        <p className="max-w-[300px]">
          Orci dictumst ellentesque ut sem partu rient purus pulvinar feugiat.
        </p>
      </div>

      <div className=" text-[#4F4844] flex flex-col items-center space-y-2 ">
        <img src={feature3} alt="" />
        <h3 className="text-xl md:text-[28px] font-medium">Fresh Delights</h3>
        <p className="max-w-[300px]">
          Eugiat orci dictumst ellentesque ut sem purus pulvinar partu rient.
        </p>
      </div>

      <div className=" text-[#4F4844] flex flex-col items-center space-y-2">
        <img src={feature4} alt="" />
        <h3 className="text-xl md:text-[28px] font-medium">Friendly Service</h3>
        <p className="max-w-[300px]">
          Dictumst ellentesque ut sem purus pulvinar feugiat orci partu rient.
        </p>
      </div>
    </section>
  )
}
export default Features
