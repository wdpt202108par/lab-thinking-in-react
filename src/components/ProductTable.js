import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render () { 
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="1">Name</th>
            <th colSpan="1">Price</th>
          </tr>
        </thead>
        <tbody>
        {this.props.productsTab.map((item => {
          return (
            <>
              {
                item.stocked ?
                <ProductRow key={item.id} name={item.name} price={item.price}/>
                :
                <ProductRow className='row' key={item.id} name={item.name} price={item.price}/>
              }
            </>
          )
        }))
        }
        </tbody>
      </table>
    )
  }
}

export default ProductTable