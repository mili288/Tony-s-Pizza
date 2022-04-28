import React from 'react'
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'


function CartBtn() {
  const navigate = useNavigate();
  // we get a state of addItems
  // write the name of the file not the function
  const state = useSelector((state)=> state.addItem);
  return (
    <>
    <Badge badgeContent={`${state.length}`} color="primary">
         <ShoppingCartIcon style={{color: 'white', cursor: 'pointer'}}
         onClick={()=> {navigate('/cart')}}
         />
         </Badge>
     </>
  )
}

export default CartBtn