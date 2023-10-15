import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl leading-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Change the way you shop
        </h1>
        <p className="mt-8 max-w-xl text-lg-leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          cumque quo quos beatae deserunt non necessitatibus eaque reiciendis
          quia commodi? Aperiam mollitia modi consectetur pariatur animi eius
          expedita amet exercitationem.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Products
          </Link>
        </div>
      </div>
      <div className="h-[28rem] hidden lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-md">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-md h-full w-80 object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Hero
