import { useDispatch } from 'react-redux'
import { formatPrice, generateAmountOptions } from '../utils'
import { editItem, removeItem } from '../features/cart/cartSlice'

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, amount, image, company, productColor } =
    cartItem

  const dispatch = useDispatch()

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }))
  }

  const handleAmount = (e) => {
    console.log(e)
    dispatch(editItem({ cartID, amount: e.target.value }))
  }

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg sm:h-32 sm:w-32"
      />

      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className=" capitalize font-medium">{title}</h3>

        {/* COMPANY */}
        <h4 className="capitalize text-sm text-neutral-content mt-4">
          {company}
        </h4>

        {/* COLOR */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2 ">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>

        {/* REMOVE */}
        <button
          className="mt-2 link-success link  link-hover text-sm "
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  )
}
export default CartItem
