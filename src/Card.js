import React from 'react';




class Card extends React.Component{
  render(){
    return(
      <div className='bg-light-green dib ma2 br3 pa3 grow bw2 shadow-5'>
        <img src="https://robohash.org/faerwe" alt="robots" />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>        
      </div>
    );
  };
};

export default Card;