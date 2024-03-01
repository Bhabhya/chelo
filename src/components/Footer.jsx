import styled from "styled-components"
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
   <Main>
   <div className="container-fluid">
   <div className="d-flex align-items-center footer">
   <div className="col-md-3 part-1">
   <div className="row">
   <div className="image">
   <img src="/public/logo.jpeg"></img>
   <h3>CHELO</h3>
   
   </div>
   
   </div>
    
   </div>
   
   <div className="col-md-6 part-2">
   <div className="row">
   <div className="col">

   <ul>
   <h5 >Explore Projects</h5>
   <li>All Projects</li>
   <li>Schools</li>
   <li>Universities</li>
   <li>NGOs</li>
    
   </ul>
   
   </div>

   <div className="col">

   <ul>
   <h5>About</h5>
   <li>Home</li>
   <li>About us</li>
   <li>How it works</li>
   <li>FAQs</li>
   <li>Contact us</li>
   <li>Terms and Conditions</li>
   <li>Privacy Policy</li>
   <li>POPIA</li>
   <li>Procurement Terms</li>
    
   </ul>
   
   </div>

   <div className="col">

   <ul>
   <h5 >Contact</h5>
   <p>Chelo Store</p>
   <p>+27 81 779 9230</p>
  <div className="icon">
  <FacebookIcon></FacebookIcon>
  <InstagramIcon></InstagramIcon>
  </div>
    
   </ul>
   
   </div>
   
   </div>
   
   </div>
   <div className="col-md-3 part-3">
   <div>
   <h5>Subscribe to newsletter</h5>
   <p>Gets updates for new projects, completed projects and other updates</p>
   <input type="text" placeholder="Enter Email addresss"></input>
   
   <Button>Subscribe</Button>
   
   
   </div>
   
   
   
   </div>
   
   </div>
   
   </div>
   
   </Main>
  )
}

export default Footer

const Main=styled.div`

.footer{
  background-color: whitesmoke;
  margin-top: 80px;
  padding-bottom: 100px;
}

.image{
  margin-left: 60px;
  display: flex;
  gap: 12px;
}

.image h3{
  padding-top: 20px;
  color: blueviolet;
}

.image img{
  width: 80px;
  height: 80px;
}

.part-2 ul li{
  list-style: none;
  padding-bottom: 10px;
  color:rgb(0, 0, 255);
}

h5{
  margin-bottom: 50px;
  padding-top: 20px;
  color:rgb(0, 0, 255);
  font-weight: 700;
}

.part-2 p{
  color:rgb(0, 0, 255);
}

.icon{

}

.part-3{
  //background-color: palegreen;//
  margin-bottom: 170px;
  //width: 30%;//
}

.part-3 p{
color: rgb(128, 128, 128);
}

.part-3 input{
  border-radius: 5px;
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  border: 1px solid rgb(128, 128, 128);
}


Button{
  margin-top: 20px;
  background-color: blue;
  color: white;
  border-radius: 10px;
  
}

Button:hover{
  background-color: goldenrod;
  color: #fff;
}
`;

