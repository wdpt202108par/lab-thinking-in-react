import React from "react";
import ProductRow from "./ProductRow"


class ProductTable extends React.Component {



    render() {

      return (
        <div>
            <table style={{width: "90%", margin: "auto"}}>
                <thead style={{backgroundColor: 'lightgrey', fontWeight:'600'}}>
                    <tr style={{height: '50px'}}>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>

                {this.props.products.map((eachProduct, index) => {
                    return (
                <tbody key={eachProduct.id}>
                    <ProductRow eachProduct={eachProduct} index={index} />
                </tbody>
                )
                })}
            </table>
        </div>
      );
    }
  }
  
  export default ProductTable;