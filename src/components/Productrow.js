import React from 'react';

//enfant de l'enfant
function Productrow(props) {
  return (
    <div>
      {props.name} {props.price}
    </div>
  );
}

export default Productrow;
