import React from "react";
import "./latestpost.modules.css";
import { FaFilter } from "@react-icons/all-files/fa/FaFilter";




const Tabs =()=>{
return(
    <div class="categories">
    <div class="category-session">
        <h2 class="title">Latest Posts</h2>
        <div class="icon">
        <div class="filtericon">
        {/* <i class="cis-filter"></i> */}
            <FaFilter/>
           
        </div>
        <p>Filter by Category</p>
        </div>
        <ul class="category-group">
            <li class="list"><a href=""><h5>All</h5></a></li>
            <li class="list"><a href=""><h5>Artificial Intelligence</h5></a></li>
            <li class="list"><a href=""><h5>Cloud Computing</h5></a></li>
            <li class="list"><a href=""><h5>DevOps</h5></a></li>
            <li class="list"><a href=""><h5>Programming Languages</h5></a></li>
            <li class="list"><a href=""><h5>Mobile Application Development</h5></a></li>
            <li class="list"><a href=""><h5>Technology and Tools</h5></a></li>
            <li class="list"><a href=""><h5>Get a Job in a Tech Company</h5></a></li>
            <li class="list"><a href=""><h5>Others</h5></a></li>
        </ul>
    </div>
</div>
);

    
}


export default Tabs;