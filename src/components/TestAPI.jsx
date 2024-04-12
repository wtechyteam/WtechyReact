import React, { useState, useEffect } from 'react';

const TestAPI = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h2>Products</h2>
      <ul>
        {products.map(product => (

            <>
            <img src={product.thumbnail}></img>
          <li key={product.id}>{product.title}-{product.price}</li>
            </>
        ))}
      </ul>
    </div>
  );
};

export default TestAPI;