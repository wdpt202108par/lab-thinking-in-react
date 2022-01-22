import React, { Component } from 'react'
import ProductRow from './ProductRow'

// return une liste de produits (name et )prix)

class ProductTable extends Component {  
    render() {
        return (
        //return un ROW avec name et price
            <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {this.props.produits.map((el) => {
                    return <ProductRow key={el} name={el} />;
                })}
                </tbody>
            </table>
            </div>
        );
      }
}

export default ProductTable; 


