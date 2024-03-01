import styled from "styled-components"

const Hero = () => {
  return (
    <Section>
    <div className="container-fluid">
    <div className="hero_section">
    <div className="image">
    <img src="/public/bg.avif"></img>
    <div className="section">
    <h2>Support Chelo</h2>
    </div>
    
    </div>
    <div className="info">
    <h3>At Chelo, We Believe in power in power of</h3>
    <h3>giving back</h3>
    <br/>

    <p>Now you can contribute to our mission and make a positive impact simply by shopping at our merchandise store.Every purchase you make supports our efforts to empower individuals, find inspiring projects, and create a meaningful change in communities around the world</p>
    
    </div>

    </div>
    
    </div>
    

    </Section>
  )
}

export default Hero

const Section=styled.div`
margin-top: 20px;


.hero_section{
   // background-color: pink;//
    padding-bottom: 50px;
   
}

.image img{
    width:99%;
    height: 300px;
    position: relative;
    border-radius: 10px;
}

.section{
    position: absolute;
    top: 250px;
    left: 250px;
}

.section h2{
    color: #fff;
}

.info{
    //background-color: pink;//
    text-align: center;
    width: 50%;
    margin-left: 250px;
    margin-top: 40px;
}

.info h3{
    color: rgb(0, 0, 255);
}

.info p{
    color: #454545;
}
`;