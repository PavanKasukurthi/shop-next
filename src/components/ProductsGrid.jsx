import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsGrid = () => {
  const { products } = useLoaderData()

  return (
    <div className="pt-12  grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes
        const rupeesAmount = formatPrice(price)
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl lg:shadow-2xl  transition duration-300 bg-neutral rounded-xl"
          >
            <figure className="p-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-56 md:h-48 w-full object-cover "
              />
            </figure>
            <div className="card-body items-center text-center py-5">
              <h2 className="card-title capitalize tracking-wider ">{title}</h2>
              <span>{rupeesAmount}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default ProductsGrid
