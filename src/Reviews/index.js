// import React from "react";
import React from 'react'
import './style.css'
const Reviews=()=>{
    return(
      
        <div className='reviews'>
            
            {/* <h1 id='comments'>Why we love React</h1> */}
          <div className='reviews1'> 
              
          
            <img src="./images/profile1.jpeg"/>
            <h4>"flexibility of reusing components"</h4>
            </div>
            {/* <img src='./images/quoteicon.png'/> */}
           <div className='reviews2'>  
          
            {/* client two */}
            <img src='./images/profile2.jpeg'/>
            <h4>"React is fast because it uses virtual DOM"</h4>
            </div> 
            <div className='reviews2'>
                <img src='./images/profile3.jpeg'/>
                <h4>The React community is a great support system</h4>

            </div>
        
        </div>
    )

}
export default Reviews
