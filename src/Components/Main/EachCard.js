import React from 'react';
import './EachCard.css';
import {Link} from 'react-router-dom'
function EachCard({head1,head2,img,color}) {
    return (
        <div className="eachcard">
            

            <Link to="/assessment" className={`topCard ${color}`}  >
            <h4>{head1} <br></br> {head2}</h4>
                <img src={img} />
            </Link>

            <Link to="/assessment" className={`bottomCard ${color}`}>
                <h4>Pick Test</h4>
            </Link>

            
            
        </div>
    )
}

export default EachCard
