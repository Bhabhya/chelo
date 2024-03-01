import styled from 'styled-components'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <Nav>
    <div className='container-fluid'>
    <div className='nav'>
    <div className='image'>
    <img src='/public/logo.jpeg'></img>
    <strong className='para'>Chelo</strong>

    </div>
    
    <div className='list'>
    <ul >
    <li>About</li>
    <li>Project</li>
    <li>How it Works</li>
    <li>Contact</li>
    <li>Blog</li>
    
    </ul>
    
    </div>

    <div className='search'>
    <SearchIcon className='searchicon'></SearchIcon>
    <input type='text' placeholder='search projects and organisations'></input>
    
    </div>

<div className='btn'>
   
    <Button style={{color:'rgb(102, 51, 153)'}}>Login</Button>
    <Button className='box'>Create Account</Button>
    </div>
    </div>
    
    </div>
    
      
    </Nav>
    
  )
}

export default Navbar


const Nav=styled.div`

background-color: whitesmoke;
border: 1px solid rgba(0,0,0,0.1);
width: 100%;


.nav{
    //background-color: palegoldenrod;//
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 20px;
}

.list{
    //background-color: gray;//
    margin-left: -20px;
    
}
.list ul{
    display: flex;
   align-items: center;
    justify-content:center;
    gap: 25px;
    padding-top: 5px;
}

.list ul li{
    list-style: none;
}

.image{
    display: flex;
    gap: 10px;
}
.image img{
    height: auto;
    width: 50px;
    padding-bottom: 20px;
   
}

.para{
    font-size: 25px;
}

.search{
    //background-color: green;//
    margin-left: 50px;
}

.search input{
    //background-color: yellow;//
    width: 130%;
    padding-left: 25px;
    top: 100px;
    font-size: 20px;
    border-radius: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
   
}

.searchicon{
//background-color: white;//
position: absolute;
top: 30px;
}

.btn{
    //background-color: palegreen;//
    margin-left: 80px;
    outline: none;
    border: none;

}

Button{
    margin-right: 10px;
}

Button:hover{
    background-color: rgb(102, 51, 153);
}
.box{
    background-color: rgb(102, 51, 153);
    color: #fff;
}

`;