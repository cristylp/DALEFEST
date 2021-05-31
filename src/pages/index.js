import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "../components/Navbar"
import Homepage from "../pages/home"



const IndexPage = () => {
  return (
    <>
      <Navigation />
        <main>
          <title>DALE - Home</title>
        </main>
      <Homepage />
    </>
  )
}

export default IndexPage