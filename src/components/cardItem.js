import {NavLink} from 'react-router-dom'
import '../styles/MenuItem.css';

export const cardItem = (item) => {
    return (
      <div className="menuItem2" key={item.id}>
        <div style={{ backgroundImage: `url(${item.img})` }}></div>
        <h1>{item.title}</h1>
        <p>${item.price}</p>
        <div className="butDiv">
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark my-5" type="button">
          {item.button}
        </NavLink>
        </div>
    </div>
    )
  }