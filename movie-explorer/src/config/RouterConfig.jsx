import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails'
import Home from '../components/Home'

function RouterConfig() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies-details/:id' element={<MovieDetails />} />
    </Routes>
  )
}

export default RouterConfig