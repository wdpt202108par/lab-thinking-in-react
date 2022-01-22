import React from "react";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => <ProductRow key={product.name} product={product} />)}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;