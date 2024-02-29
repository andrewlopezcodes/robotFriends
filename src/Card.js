import React from 'react';


class Card extends React.Component{
  render(){
    return(
      <div>
        <img src="https://robohash.org/faerwe" alt="robots" />
        <div>
        <h3>Character Name</h3>
        <p>andrewlopezcodes@gmail.com</p>
        </div>        
      </div>
    );
  };
};

export default Card;