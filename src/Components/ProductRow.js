import React, { Component } from 'react'

class ProductRow extends Component {

    render() {
        return (
        //return un ROW avec name et price
            <li>
                salut
              {this.props.name}{this.props.price}
            </li>
        );
      }
}

export default ProductRow; 