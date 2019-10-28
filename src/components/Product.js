import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';

const Product = (props) => {
  return (
    <div className="product">
      <img className="productImage" src={`${props.url}`} alt={`Product: ${props.name}`} />
      <p>{props.name}</p>
      <ul id="pricing">
        <li className={props.discountPrice < props.standardPrice ? "redPrice" : "black"}> ${props.discountPrice} </li>
        <li className="grey"> ${props.standardPrice} </li>
      </ul>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  productURL: PropTypes.string,
  standardPrice: PropTypes.number,
  discountPrice: PropTypes.number,
  avatar: PropTypes.number,
}

export default Product;
