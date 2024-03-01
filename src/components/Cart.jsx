import styled from "styled-components"
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const Cart = () => {

  const[size,setsize]=useState('M');

  const handleSizeChange = (selectedSize) => {
    setsize(selectedSize);
  };


  return (
    <Section>
    <div className="container-fluid">

    <div className="heading">
    <h5>Back To Home</h5>
    </div>
    
    <div className="cart">

    <div className="image">
    <img src="/public/lower.jpg"></img>
    </div>

    <div className="info">
    <h4>CHELO LOWER</h4>
    <strong>Rs.500</strong>

    <div className="material">
    <p>Material: 280gms 60% Cotton 40% Polyester & brushed fieced</p>
    <h6>Branding: Embroidery</h6>
    </div>
<br/>
    <div className="size">
    <h5>Select Size</h5>

    <ul>
    <li
    onClick={() => handleSizeChange('Xs')}
    className={size === 'Xs' ? 'selected' : ''}
  >
    Xs
  </li>

  <li
  onClick={() => handleSizeChange('S')}
  className={size === 'S' ? 'selected' : ''}
>
  S
</li>

<li
onClick={() => handleSizeChange('M')}
className={size === 'M' ? 'selected' : ''}
>
M
</li>

<li
            onClick={() => handleSizeChange('L')}
            className={size === 'L' ? 'selected' : ''}
          >
            L
          </li>
          <li
          onClick={() => handleSizeChange('XL')}
          className={size === 'XL' ? 'selected' : ''}
        >
          XL
        </li>

        <li
        onClick={() => handleSizeChange('2XL')}
        className={size === '2XL' ? 'selected' : ''}
      >
        2XL
      </li>

      <li
      onClick={() => handleSizeChange('3XL')}
      className={size === '3XL' ? 'selected' : ''}
    >
      3XL
    </li>
    
    
    </ul>
    
    </div>

    <div className="Quantity">
    <h5>Quantity</h5>
    <span>1 <KeyboardArrowDownIcon className="icon"></KeyboardArrowDownIcon></span>
    
    </div>
<br/>

    <Button>Add to Cart</Button>    
    </div>
    
    
    </div>
    
    </div>
    
    
    </Section>
  )
}

export default Cart

const Section=styled.div`

.heading h5{
    border: 1px solid whitesmoke;
    padding-top: 5px;
    padding-bottom: 5px;
}

.cart{
 display: flex;
 justify-content: space-between;
 margin-left: 200px;
 margin-right: 200px;
 margin-top: 10px;
}

.image{
  border: 1px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.info{
  margin-top: 50px;
}

.info h4{
  font-size: 3rem;
  color: blue;
}

.info strong{
  font-size: 2.5rem;
  color: blue;
}

.image img{
  width: 300px;
}

.material{
  margin-top: 10px;
}

.size ul{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.size ul li{
  list-style: none;
  border: 1px solid blue;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  cursor: pointer;

  &.selected {
      background-color: blue;
      color: white;
    }
}



.Quantity span{
  border: 1px solid black;
  padding-left: 10px;
  //padding-right: 40px;//
  font-size: 20px;
}

.icon{
  margin-left: 20px;
}

Button{
  border: 1px solid black;
  background-color: blue;
  color: #fff;
  border-radius: 8px;
}

Button:hover{
  background-color: blue;
  color: white;
}
`;