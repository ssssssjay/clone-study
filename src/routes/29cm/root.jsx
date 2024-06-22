import Header from "../../components/29cm/Header"
import { Outlet } from "react-router-dom"

export default function Shop29cm() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}