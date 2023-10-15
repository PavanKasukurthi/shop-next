import { Header, NavBar } from '../components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  )
}
export default HomeLayout
