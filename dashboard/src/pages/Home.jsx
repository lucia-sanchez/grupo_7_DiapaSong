import React from 'react'
import { ContentRowProducts } from '../components/ContentRowProducts'
import { LastProductInDb } from '../components/LastProductInDb'
import { CategoriesInDb } from '../components/CategoriesInDb'

export const Home = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard: Dipasong</h1>
      </div>

      <ContentRowProducts />


      <div className="row">
        <LastProductInDb />

        <CategoriesInDb />
      </div>
    </div>
  )
}
