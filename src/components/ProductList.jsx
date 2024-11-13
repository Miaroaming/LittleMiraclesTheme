import React, { useEffect, useState, useContext } from 'react';
import wooCommerceApi from '../woocommerceApi';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await wooCommerceApi.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false); // End loading
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
  };

  return (
    <div className='cart-cont'>
      <h1>Our Shop</h1>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
      <ul className='cart-product-list'>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>

            {/* Display the product image */}
            {product.images && product.images.length > 0 && (
              <img 
                src={product.images[0].src} 
                alt={product.images[0].alt || product.name}  
              />
            )}

            {/* Display the product price */}
            <p>Price: ${(product.prices.price /100).toFixed(2)}</p>

            <button className='primary-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default ProductList;
