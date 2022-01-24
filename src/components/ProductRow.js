import React from 'react';

class ProductRow extends React.Component {
  render () {
    return (
      <tr className={this.props.className}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    )
  }
}

export default ProductRow