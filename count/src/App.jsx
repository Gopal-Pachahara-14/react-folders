import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [count, setCount] = useState(1)
  const [mode,setMode] = useState(false)

  let text = "Dark"
  if(mode==true){
    text="Light"
  }
  else{
    text="Dark"
  }

  // ================================ delete button =================================
  // const symbol = count > 1 ? "-" : "🗑️";
  let symbol = "🗑️";
  if(count>1){
    symbol="-"
  }
  else if(count==1){
    symbol="🗑️"

  }
  else{
  symbol="hide";
  }

  let Id ="show";
  if(symbol==="🗑️"){
    Id="hide"
  }
  else{
    Id="show"
  }
  
  // ================================================================================

  // condition ? true sstatement : false statement ;
  return (
    <>
      {/* <button onClick={()=>{ (mode==false) ? setMode(true) : setMode(false) ;}}> {text} </button> */}
      <div >
      <button onClick={()=>{
        if(mode==false){
          setMode(true)
        }
        else{
          setMode(false)
        }
      }} className={text}> {text} </button>

      <div className="box" style={(symbol=="-" || symbol=="🗑️")?{"display":"flex"}:{"display":"none"}}>
        {/* <button onClick={() => !visible ? setVisibility(true) : setVisibility(false)}>click {visible}</button> */}
        <button onClick={() =>{setCount(count-1)} } className="btn">{symbol}</button>
        <p>{count}</p>
        <button onClick={() => setCount((count + 1))} className="btn"><ion-icon name="add-outline"></ion-icon></button>
      </div>

{/* 
      <ion-icon className={cls_name} name="trash-outline"></ion-icon> 
      <ion-icon className={cls_name} name="remove-outline"></ion-icon> 
*/}
      </div>
    </>
  )
}

export default App
