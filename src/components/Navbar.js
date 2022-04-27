import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Badge from '@mui/material/Badge';
import ReorderIcon from '@mui/icons-material/Reorder';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'
import CartBtn from '../buttons/CartBtn';


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
  <div className="navbar">
       <div className="leftSide" id={openLinks ? "open" : "close"}>
         <Link to="/" className="image">
           <img src={Logo} />
           </Link>
           <div className="hiddenLinks">
         <Link to="/"> Home </Link>
         <Link to="/menu"> Menu </Link>
         <Link to="/contact"> Contact </Link>
           </div>
       </div>
       <div className="rightSide">
         <Link to="/"> Home </Link>
         <Link to="/menu"> Menu </Link>
         <Link to="/contact"> Contact </Link>
         <CartBtn/>
         <button onClick={toggleNavbar}>
         <ReorderIcon />
         </button>
       </div>
  </div>
  )
}

export default Navbar;
