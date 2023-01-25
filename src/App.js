import logo from './logo.svg';
import './App.css';
import Dat from'./fetch';
function App() {
  const myStyle = {
    left:"100px",
    position:"fixed",
    top:"40px",
    fontWeight:"600",
    fontSize:"20px"
    };
    const myStyle1 = {
     height:"100%",
     width:"80px",
     position:"fixed",
     zIndex:"1",
     top:"0",
     left:"0",
     backgroundColor:"#00134d"
      };
    
  return (
    <div className="App" >
      <div className="side" style={myStyle1}></div>
    <div style={myStyle}>
     Analytics
     
    <Dat />
    </div>
    </div>
  );
}

export default App;
