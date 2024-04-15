
import './App.css'

function App() {

 const divStyle = {backgroundColor:'grey', height: '100vh',display:'flex',justifyContent:'center',alignItems:'center'}

 const bgBlue=()=>{
  bg.style.backgroundColor = "blue"
 }

 const bgRed=()=>{
  bg.style.backgroundColor = "red"
 }

 const bgPink=()=>{
  bg.style.backgroundColor = "pink"
 }

 const bgGreen=()=>{
  bg.style.backgroundColor = "green"
 }

 const bgBlack=()=>{
  bg.style.backgroundColor = "black"
 }
  

  return (

    <div style={divStyle} id='bg'>
<button onClick={bgBlue} className='btn' style={{backgroundColor:'blue',color:'white',width:'100px'}}>BLUE</button>
<button onClick={bgRed}  className='btn' style={{backgroundColor:'red',color:'white',width:'100px'}}>RED</button>
<button onClick={bgPink} className='btn' style={{backgroundColor:'pink',color:'white',width:'100px'}}>PINK</button>
<button onClick={bgGreen} className='btn' style={{backgroundColor:'green',color:'white',width:'100px'}}>GREEN</button>
<button onClick={bgBlack} className='btn' style={{backgroundColor:'black',color:'white',width:'100px'}}>BLACK</button>

    </div>

  
  )
  }

export default App
