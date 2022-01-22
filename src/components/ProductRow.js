import React from "react";

const ProductRow = (props) => {
    // console.log("View Props", props.eachProduct)
    return(
        <tr>
            {
                props.eachProduct.stocked ? 
                <td style={{borderBottom: "1px solid lightgrey", height: "50px"}}>{props.eachProduct.name}</td>
                :
                <td style={{color: "red", borderBottom: "1px solid lightgrey", height: "50px"}}>{props.eachProduct.name}</td>
            }
            <td style={{borderBottom: "1px solid lightgrey", height: "50px"}}>{props.eachProduct.price}</td>        
        </tr>
    )
}
  
  export default ProductRow;