import React from 'react';
import Productrow from './Productrow';

//enfant de filterabletable
class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <table className="ProductList">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.productlist.map((el) => (
                  <Productrow key={el.id} name={el.name}></Productrow>
                ))}
              </td>
              <td>
                {this.props.productlist.map((el) => (
                  <Productrow key={el.id} price={el.price}></Productrow>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
