import React from 'react'
import {useParams, NavLink} from 'react-router-dom';
import {useState} from 'react';
import {MenuList} from '../helpers/MenuList';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';
import '../styles/ProductDetail.css';

function ProductDetail() {
    const [minus, setMinus] = useState('-');
    const [plus, setPlus] = useState('+');
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const proid = useParams();
    const proDetail = MenuList.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch()

    const moreItems = (product) => {
      if (plus === '+') {
        dispatch(addItem(product))
      }
    }

    const lessItems = (product) => {
      if (minus === '-') {
        dispatch(delItem(product))
      }
    }

    const handleCart = (product) => {
      if (cartBtn === "Add to Cart") {
          dispatch(addItem(product))
          setCartBtn("Remove from Cart")
      }
      else {
        dispatch(delItem(product))
          setCartBtn("Add to Cart")
      }
    }

    return (
    <>
    <div className="container1">
<div className="menuItem1" key={product.id}>
      <div style={{ backgroundImage: `url(${product.img})` }}></div>
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p className="lead">{product.desc}</p>
      <div className="bb">
      <button onClick={()=>handleCart(product)} className="btn btn-outline-dark my-5">{cartBtn}</button>
      <button onClick={()=>moreItems(product)} className="btn btn-outline-dark my-5">{plus}</button>
      <button onClick={()=>lessItems(product)} className="btn btn-outline-dark my-5">{minus}</button>
      </div>
  </div>
  </div>
    </>
  )
}

export default ProductDetail