import React from 'react';
import Home from '../Assessment/Home';
import './Banner.css';
import {Link} from 'react-router-dom'

function Banner() {
    return (
        <div className="Banner">
            
            <div className="innerComponent">
               <h2>
               Differentiate yourself &amp;<span> <br></br> stand out from the crowd.</span>
               </h2>

               <h4>Evaluate yourself &amp; Improve, Take test now</h4>
               
               <Link to="/assessment" className="takeTest" >
                Take Test
               </Link>
            </div>

            {/* <div  className="innerComponent2">
                <img src="https://images.unsplash.com/photo-1624279869228-29323b002b54?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <div className="innerdiv" >
                    <h2>Lorem ipsum dolor sit<br></br> amet, consetetur</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur<br></br> sadipscing elitr, sed diam nonumy eirmod<br></br> tempor invidunt ut labore et dolore magna <br></br>aliquyam erat, sed diam voluptua. At vero<br></br> eos et accusam et justo duo dolores et ea</p>
                </div>
            </div>
            */}
        </div>
    )
}

export default Banner
