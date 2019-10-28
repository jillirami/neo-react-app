import React from 'react';
import Product from './Product.js';

const ProductList = () => {
  const products = [
    {
      name: "Hope",
      url: "https://www.essilor.co.th/sites/default/files/2018-07/anti-dust-lenses-mobile.jpg",
    },
    {
      name: "Dreams", 
      url: "https://i.pinimg.com/originals/12/4c/8f/124c8f954ebfc8dd8414cddbc2b3e060.gif",
    }
  ]
  
  const productCollection = products.map((product, i) => {
    return <Product key={i} name={product.name} url={product.url} standardPrice={ Math.floor((Math.random() * 100))} discountPrice={Math.floor((Math.random() * 100))} avatar={0}/>
  });

  return (
    <div className="product">{productCollection}</div>
  );
}

// ProductList.propTypes = {
//   name: PropTypes.string,
//   productURL: PropTypes.string,
//   standardPrice: PropTypes.number,
//   discountPrice: PropTypes.number,
//   avatar: PropTypes.number,
// }

export default ProductList;
