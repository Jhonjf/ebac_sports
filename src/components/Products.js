// src/components/Products.js

import React from 'react'
import { useGetProductsQuery } from '../features/api/apiSlice'

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}

export default Products
