import styled from 'styled-components'
import './app.css' 

function App() {
  const Container = styled.div`
  max-width: 800px
  width:100%;

  background-color:#FFFFFF;
  
  `;
  
const Logo = styled.img`
padding-top: 22px;
padding-left: 100px;
`;
const Text = styled.h1`
color: #1E255E;
padding-left: 100px;
padding-right: 65px;
width: 480px;
height: 228px;
padding-top: 86px;
font-size: 61px;
Line-height: 71.48px;
`;
const Page = styled.h6`
color: #1E255E;
padding-left: 100px;
padding-right: 65px;
width: 480px;
height: 38px;
padding-top: 8px;
font-size: 18px;
Line-height: 18.75px;
`;
const Buton = styled.button`
background-color: #0061FE;
color: white;
border: none;
font-size: 14px;
text-align: center;
margin-left: 100px;
margin-top: 60px;
width: 200px;
height: 60px;
border-radius: 100px;

&:hover{
  background-color: #488eff;
}
`;
const Right = styled.img`
display: flex;
Width: 800px;
Height: 562.5px;
`;


const Leftbox = styled.div`
display: flex;
width: 800px;
height: 800px;
`;
const Rightbox = styled.div`
background-color: #0061FE;
width:800px;
height:700px;
`;
const Icon = styled.img`
padding-left: 600px;
padding-top: 30px;
`;
  return (
    <Leftbox>
      <Container>
        <Logo  src="./Logo.png" alt="" />
        {/*<img src="Group 59.png" alt="" />*/}
      <Text>The easiest way to manage team projects & tasks</Text>
      <Page>Take a tour of work management platform to see how you can do more of your best work.</Page>
      <Buton>Know More</Buton>
      </Container>
       <Rightbox>
       <Icon src='./Group 59.png' />
       <Right src='./jump.png' alt=''/>
       </Rightbox>
    </Leftbox>
  )
}

export default App;
