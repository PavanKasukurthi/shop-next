import { Form, useLoaderData, Link } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta } = useLoaderData()
  const { categories, companies } = meta

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />

      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        list={categories}
        name="category"
        size="select-sm"
      />

      {/* COMPANIES */}
      <FormSelect
        label="select company"
        list={companies}
        name="company"
        size="select-sm"
      />

      {/* ORDER */}
      <FormSelect
        label="sort by"
        list={['a-z', 'z-a', 'high', 'low']}
        name="order"
        size="select-sm"
      />

      {/* PRICE */}
      <FormRange name="price" label="select price" size="range-sm" />

      {/* SHIPPING */}
      <FormCheckbox name="shipping" label="free shipping" size="checkbox-sm" />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>

      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}
export default Filters
