import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect } from 'react-router-dom'
import { loginUser } from '../features/user/userSlice'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      const response = await customFetch.post('/auth/local', data)
      store.dispatch(loginUser(response.data))
      toast.success('Logged in successfully')
      return redirect('/')
    } 
    catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials'
      toast.error(errorMessage)
      return null
    }
  }

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          placeholder="Enter email"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          placeholder="Enter password"
        />

        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>

        <button className="btn btn-secondary btn-block">Guest user</button>
        <p className="text-center">
          Not a member yet?{' '}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Login
