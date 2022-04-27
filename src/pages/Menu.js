import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
import {cardItem} from '../components/cardItem'

function Menu() {
  return <div className="menu"> 
  <h1 className="menuTitle">Our Menu</h1> 
   <div className="menuList">
   {MenuList.map(cardItem)}
   </div>
  </div>;
}

export default Menu;
