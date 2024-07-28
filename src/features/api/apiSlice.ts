// src/features/api/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Defina a interface para o seu produto
interface Product {
  id: number
  name: string
}

// Crie o apiSlice com endpoints para interagir com a API
export const apiSlice = createApi({
  reducerPath: 'api', // Caminho do reducer na store
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // URL base para as requisições
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products' // Endpoint para buscar produtos
    })
    // Outros endpoints podem ser adicionados aqui
  })
})

// Exportar o hook gerado para o endpoint getProducts
export const { useGetProductsQuery } = apiSlice
