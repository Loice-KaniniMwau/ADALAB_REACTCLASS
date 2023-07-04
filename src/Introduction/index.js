import React from "react";
import './style.css'
const Introduction=()=>{
return(
<div>
    <h1 className="heading">What i have learnt about ReactJs</h1>
    <p>It has reusable components</p>
    <p>The writing format is JSX</p>
    <p>It is fast</p>
    <h1>Why is React famous</h1>
    <img src="./images/pointer.png"/> 
  <h4>React uses Virtual Dom to effectively update the UI components</h4>
  <h4> React follows an indirect data flow.Data therefore flows from the parent</h4>
  <h4>to the child components</h4>
  <h4>React can be fully integrated into existing projects</h4>
  <h1 id="quot"> <img src='./images/quoteicon.png' id="quote"/></h1>

</div>
)   
}

export default Introduction;