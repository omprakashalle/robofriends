import React from 'react';
import 'tachyons';

const Cards =({name,email,id}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
             <img alt="ROBO_ONE" src='https://robohash.org/${id}?200x200' />
            <div>
                <h2>{email}</h2>
                <p>{name}</p>
            </div>    
        </div>

    );
}

export default Cards;