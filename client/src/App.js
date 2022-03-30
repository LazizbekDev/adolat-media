import React from 'react'
import { Header, Footer } from './components'
import Home from "./screens/Home";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./screens/404/404";
import Xabar from "./screens/Xabar";

const App = () => {
  return (
    <>
      <Header />

      <main className={'selection:text-white selection:bg-gray-900 py-20 container mx-auto'}>
          <Routes>
              <Route path={'*'} element={<NotFound />} />
              <Route exact path={'/'} element={<Home />} />
              <Route exact path={'/xabarlar/:id'} element={<Xabar />} />
          </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App