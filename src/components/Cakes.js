import React from "react";
//import fishes from '../sample-fishes';
//import cakes from '../sample-cakes';
import {formatPrice} from '../helpers';

class Cakes extends React.Component {

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const isAvailable = this.props.details.availability[1].status === "available";
    return (
      <li className="menu-fish">
         <img src={this.props.details.image}  alt={this.props.details.name} />
         <h3 className="fish-name">
         {this.props.details.name}
         <span className="price">{formatPrice(this.props.details.availability[1].price)}</span>
         </h3>
         <p>{this.props.details.desc}</p>
         <button disabled = {!isAvailable} onClick={this.handleClick}>{isAvailable ? "Add to Cart":"Sold Out"}</button>
         
      </li>
    )
  }
}

export default Cakes

