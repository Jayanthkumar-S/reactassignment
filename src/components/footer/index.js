import React  from "react";
import "./footer.modules.css";

 const footer = ()=>{
   return(
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>EDYODA</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>RESOURCES</h3>
                        <ul>
                            <li><a href="#">Learning Paths</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Learning Videos</a></li>
                            <li><a href="#">Educators</a></li>
                            <li><a href="#">University</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>FOR ENTERPRISES</h3>
                        <ul>
                            <li><a href="#">Train Your Employees </a></li>
                            <h3>QUICK LINKS</h3>
                            <li><a href="#">Learn and Learning-Enabler</a></li>
                            <li><a href="#">Tips for Learning-Enabler</a></li>
                            <li><a href="#">Request new Topic</a></li>
                            <li><a href="#">Certification</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>CONNECT</h3>
                        <ul>
                        <li><a>2nd Floor #188, Survey No. - 123/1,
Incubes Building Next to McDonalds,
ITPL Main Rd, Brookefield,
Bengaluru, Karnataka-560037,
India</a></li>
<div class="col-lg-3 item social"><a href="#">E</a><a href="#">D</a><a href="#">Y</a><a href="#">O</a><a href="#">D</a><a href="#">A</a>
                        
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
   );

 }

 export default footer;