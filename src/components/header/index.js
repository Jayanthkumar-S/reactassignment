import React, { useState } from "react";
import "./header.modules.css"
 
const header = () =>{
  
 
return(
    <header>
    <div class="left-menu">
    <div class="logo">
        <div class="logo-item">edyoda</div>
        <p class="logo-under"> Stries</p>
    </div>
    
    <div class=" dropdown">Explore Categories  <select name="explor" id="explor">
        
        <option>Artficial Intelligence</option>
        <option>Cloud Computing</option>
        <option> DevOps</option>
        <option>Programming Languages</option>
        <option>Mobile Application Development</option>
        <option>Technology and Tools</option>
        <option>Get a Job in a Tech Company</option>
        <option>Others</option>
    </select> </div>
    </div>

    <div class="right-menu">
        <div class="menu-text">
            <div class="logo">
                <div class="text">EdYoda is free learning and knowledge</div>
                <p class="text-under"> sharing platform for techies</p>
            </div>
           
        </div> 
        <button class="btn"> go to main website </button>

    </div>

 

</header>

);

}
export default header;