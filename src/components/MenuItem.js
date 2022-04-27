import React from 'react'
import {MenuList} from '../helpers/MenuList';
import {NavLink} from 'react-router-dom';
import '../styles/MenuItem.css';
import {cardItem} from '../components/cardItem'


function MenuItem() {
  

return (
  <div>
    {MenuList.map(cardItem)}
  </div>
)
}

export default MenuItem
