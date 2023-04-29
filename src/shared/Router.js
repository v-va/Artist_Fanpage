import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArtistRegister from '../pages/ArtistRegister'
import Main from '../pages/Main'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="artistRegister" element={<ArtistRegister />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
