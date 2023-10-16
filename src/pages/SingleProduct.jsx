import { useLoaderData } from 'react-router-dom'
import { formatPrice, customFetch, generateAmountOptions } from '../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)
  return { product: response.data.data }
}

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { price, image, title, description, colors, company } =
    product.attributes

  const rupeesAmount = formatPrice(price)

  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <section>
          <img
            src={image}
            alt={title}
            className="w-96 h-96 rounded-lg  object-cover lg:w-full"
          />
        </section>
        <section>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-semibold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{rupeesAmount}</p>
          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="capitalize text-md font-medium tracking-wider">
              Colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`w-6 h-6 mr-2 badge ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>

          {/* AMOUNT */}
          <div className="mt-6 form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="capitalize text-md font-medium tracking-wider">
                Amount
              </h4>
            </label>
            <select
              className="select w-full select-bordered select-md select-secondary"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(5)}
            </select>
          </div>

          {/*CART BUTTON */}
          <div className="mt-6">
            <button className="btn btn-primary btn-md mt-5">Add to cart</button>
          </div>
        </section>
      </div>
    </section>
  )
}
export default SingleProduct
