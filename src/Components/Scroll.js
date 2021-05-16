import React from 'react';

const Scrollbox = (props) =>{
        return(
            <div style={{ overflow:'scroll' , border:'5px solid white' , height:'750px' }}>
                {props.children}
                
            </div>
        );
    }

export default Scrollbox;