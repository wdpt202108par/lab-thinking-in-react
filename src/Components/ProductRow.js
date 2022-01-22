import React from "react";




class ProductRow extends React.Component {
    render(){
        const details = this.props
        return(
            <>
              
                        <tr>
                       
                            <td>{details.name}</td>
                            <td>{details.price}</td>
                        </tr>
                    
                
            </>
        )        
    }
}
    


export default ProductRow;