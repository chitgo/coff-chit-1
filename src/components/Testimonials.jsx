import testimonialsQuotes from '../assets/testimonials-qutotes.svg'

function Testimonials() {
  return (
    <section className="flex py-24 md:px-24 px-8">
      <div className="relative max-w-2xl mx-auto">
        <p className="italic font-light text-[#4F4844]">
          &quot;I absolutely love the cozy ambiance of this cafe! The warm
          lighting, comfortable seating, and charming decor make it the perfect
          place to unwind. And the coffee? Simply divine! Every sip of their
          artisanal brews is a treat for the taste buds. Highly
          recommended!&quot;
        </p>
        <p className="text-[#4F4844] font-semibold mt-2">Sarah Anderson</p>
        <div className="hidden md:block">
          <img
            src={testimonialsQuotes}
            alt=""
            className="max-w-[60px]  absolute -top-4 -left-16 "
          />
        </div>
      </div>
    </section>
  )
}
export default Testimonials
