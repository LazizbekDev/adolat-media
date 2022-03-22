import React from 'react'
import { Header, Footer } from './components'
import Home from "./screens/Home";

const App = () => {
  return (
    <>
      <Header />

      <main className={'selection:text-white selection:bg-gray-900 py-20 container mx-auto'}>
        <Home />
      </main>

      <Footer />
    </>
  )
}

export default App