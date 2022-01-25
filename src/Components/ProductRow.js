import React from "react";

class ProductRow extends React.Component {
    render() {
        return(
            <>
                <tr>
                    <td style={this.props.stocked? {color: 'black'}: {color: 'red'}}>{this.props.name}</td>
                    <td>{this.props.price}</td>
                </tr>
            </>
        )        
    }
}
    
export default ProductRow;