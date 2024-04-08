import menu from '../menu'

function Menu() {
  return (
    <section className="container py-16 mx-auto">
      <div className="mx-12">
        <div>
          <h1 className="text-[#393330] text-5xl md:text-6xl font-bold 2xl:text-8xl">
            Our Menu
          </h1>
          <p className="text-gray-500 max-w-[350px] my-4">
            Blandit enim pretium purus morbi non tincidunt auctor eu molestie.
            Vitae eu nullam tincidunt accumsan.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <div className="">
              <h2 className="text-[#393330] text-2xl md:text-3xl 2xl:text-7xl tracking-tighter font-bold mb-2">
                COFFEE SELECTION
              </h2>
              {menu.coffee.map((item) => (
                <div key={item.name} className="text-[#4F4844] space-y-1 ">
                  <p className="text-2xl md:text-[28px] flex justify-between items-center">
                    {item.name}
                    <span className="text-xl md:text-2xl font-semibold">
                      ${item.price}
                    </span>
                  </p>
                  <p className="font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-[#393330] text-2xl md:text-3xl 2xl:text-7xl tracking-tighter font-bold mb-2 mt-4">
                SPECIALITY DRINKS
              </h2>
              {menu.drinks.map((item) => (
                <div key={item.name} className="text-[#4F4844] space-y-1 ">
                  <p className="text-2xl md:text-[28px] flex justify-between items-center">
                    {item.name}
                    <span className="text-xl md:text-2xl font-semibold">
                      ${item.price}
                    </span>
                  </p>
                  <p className="font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-[#393330] text-2xl md:text-3xl 2xl:text-7xl tracking-tighter font-bold mb-2  ">
                PASTRIES
              </h2>
              {menu.pastries.map((item) => (
                <div key={item.name} className="text-[#4F4844] space-y-1 ">
                  <p className="text-2xl md:text-[28px] flex justify-between items-center">
                    {item.name}
                    <span className="text-xl md:text-2xl font-semibold">
                      ${item.price}
                    </span>
                  </p>
                  <p className="font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-[#393330] text-2xl md:text-3xl 2xl:text-7xl tracking-tighter font-bold mb-2  mt-4 ">
                SNACKS
              </h2>
              {menu.snacks.map((item) => (
                <div key={item.name} className="text-[#4F4844] space-y-1 ">
                  <p className="text-2xl md:text-[28px] flex justify-between items-center">
                    {item.name}

                    <span className="text-xl md:text-2xl font-semibold">
                      ${item.price}
                    </span>
                  </p>
                  <p className="font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pb-16">
              <h2 className="text-[#393330] text-2xl md:text-3xl 2xl:text-7xl tracking-tighter font-bold mb-2  mt-4">
                EXTRAS
              </h2>
              {menu.extras.map((item) => (
                <div key={item.name} className="text-[#4F4844] space-y-1">
                  <p className="text-2xl md:text-[28px] flex justify-between items-center">
                    {item.name}
                    <span className="text-xl md:text-2xl font-semibold">
                      ${item.price}
                    </span>
                  </p>
                  <p className="font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Menu
