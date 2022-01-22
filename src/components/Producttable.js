import React from 'react';

class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colspan="2">Name</th>
              <th colspan="2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Products</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
