import article1 from '../assets/article-1.png'
import article2 from '../assets/article-2.png'
import article3 from '../assets/article-3.png'

function Articles() {
  return (
    <section className="container mx-auto">
      <div className="px-4 text-center ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#393330] ">
          News Articles
        </h1>
        <p className="font-light text-[#393330] max-w-sm mx-auto">
          Blandit enim pretium purus morbi non tincidunt auctor eu molestie.
          Vitae eu nullam tincidunt accumsan.
        </p>
      </div>

      <div className="space-y-4 pt-6">
        <div className="border-t border-[#D2CFCC] flex items-center pt-4 ">
          <div className="">
            <img
              src={article1}
              alt=""
              className="object-cover object-center  hover:scale-105 transition duration-300 w-[250px] "
            />
          </div>
          <div className="ml-4">
            <p>Cafe</p>
            <p>Exploring the Growing Trend and Art of Craft</p>
          </div>
        </div>

        <div className="border-t border-[#D2CFCC] flex items-center pt-4">
          <div>
            <img
              src={article2}
              alt=""
              className="object-cover object-center  hover:scale-105 transition duration-300 w-[250px]"
            />
          </div>
          <div className="ml-4">
            <p>Topics</p>
            <p>The Science Behind Your Daily Cup of Joy</p>
          </div>
        </div>

        <div className="border-y border-[#D2CFCC] flex items-center py-4">
          <div>
            <img
              src={article3}
              alt=""
              className="object-cover object-center  hover:scale-105 transition duration-300 w-[250px] "
            />
          </div>
          <div className="ml-4">
            <p>Category</p>
            <p>A Journey Through Different Brewing Methods</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-[#EE8542] text-white font-bold py-2 px-8 rounded-2xl text-lg mt-8 uppercase hover:bg-[#F6A03F] transition duration-300 ">
          News Articles
        </button>
      </div>
    </section>
  )
}
export default Articles
