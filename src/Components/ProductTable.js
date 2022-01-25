import React from 'react';
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(product => {
                        return (
                            <ProductRow  key={product.id} name={product.name} price={product.price} stocked={product.stocked}/>
                        )
                    })} 
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;