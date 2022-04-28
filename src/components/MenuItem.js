import React from 'react'
import {MenuList} from '../helpers/MenuList';
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
