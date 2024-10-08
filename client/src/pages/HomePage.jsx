import FaqSection from '../components/faq/FaqSection'
import CounterUpCard from '../components/counterUpCard/CounterUpCard'
import Carousel from '../components/Carousel/Carousel'
import Data from '../components/Carousel/ImageGalleryData'
import HeroSection from '../components/hero-section/hero-section'
import Benefits from '../components/CardPages/Benifits'
import Testimonials from '../components/testimonials/Container'
import TestimonialForm from '../components/testimonials/TestimonialForm'
function HomePage() {
  return (
    <div className='dark:bg-darkmode  w-full p-2 flex flex-col gap-10'>
      <HeroSection />
      <CounterUpCard />
      <div className="max-w-full overflow-hidden">
      <Benefits/>
    </div>
      <Carousel images={Data} />
      <Testimonials />
      <TestimonialForm/>
      <FaqSection />
    </div>
  )
}

export default HomePage
