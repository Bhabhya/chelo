import styled from "styled-components"

const Shop = () => {
  return (
    <Main>
    <div className="container-fluid">
    <div className="section">


   <div className="heading">
   <h5>Shop our merchandise store</h5>
   </div>

<div className="products">
<div className="image">
<img src="/public/sweater.jpg" className="one"></img>
<div className="price">
<p>Chelo Tshirt</p>
<strong> Rs 500.00</strong>
</div>


</div>

<div className="image">
<img src="/public/golf.jpg" className="one"></img>
<div className="price">
<p>Chelo Golf Tshirt</p>
<strong> Rs 500.00</strong>
</div>

</div>

<div className="image">
<img src="/public/tshirt.jpg" className="one"></img>
<div className="price">
<p>Chelo Tshirt</p>
<strong> Rs 500.00</strong>
</div>
</div>

</div>

<div className="shop">
<div className="image">
<img src="/public/lower.jpg" className="one"></img>
<div className="price">
<p>Chelo Lower</p>
<strong> Rs 500.00</strong>
</div>
</div>

<div className="image">
<img src="/public/mug.jpg" className="one"></img>
<div className="price">
<p>Chelo Mug</p>
<strong> Rs 500.00</strong>
</div>
</div>

<div className="image">
<img src="/public/notepad.jpg" className="one"></img>
<div className="price">
<p>Chelo Notepad</p>
<strong> Rs 500.00</strong>
</div>
</div>

</div>

    </div>
    
    
    </div>
      
    </Main>
  )
}

export default Shop

const Main=styled.div`

.section{
    //background-color: palevioletred;//
}

h5{
    color:  rgb(102, 51, 153);
    margin-bottom: 40px;
    font-size: 24px;
}



.products{
    display: flex;
    justify-content: space-between;
    //background-color: palevioletred;//
    margin-left: 200px;
    margin-right: 200px;
}

.image{
    border: 1px solid black;
    border-radius: 5px;
  
    //background-color: yellowgreen;//
}

.image img{
    padding-bottom: 10px;
    margin-top: 10px;

}

.one {
    width: 250px;
    height: 250px;
}

.price{
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
}

.shop{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    margin-left: 200px;
    margin-right: 200px;
}
`;
