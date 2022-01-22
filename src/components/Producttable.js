import React from 'react';
import Productrow from './Productrow';

//enfant de filterabletable
class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <tr>
                  <th colspan="2">Name</th>
                </tr>
                {this.props.productlist.map((el) => (
                  <Productrow key={el.id} name={el.name}></Productrow>
                ))}
              </td>
              <td>
                <tr>
                  <th colspan="2">Price</th>
                </tr>
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
