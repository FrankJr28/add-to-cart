import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Footer } from './components/Foorter.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products) 

  return (
    <CartProvider>
      <Cart/>
      <Header/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </CartProvider>
  )  
}

export default App
