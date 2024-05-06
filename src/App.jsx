import { Button } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'

function App() {
  const[value,setValue] = useState("")
  const handleCalculate = (e) =>{
    e.preventDefault()
    try {
      const result = eval(value)
      setValue(result)
      
    } catch (error) {
      setValue("Invalid Operation")
    }
  }

  return (
    <>
    <div className="calculator">
      <div className="calcbody">
        <form action="">
          <div className="screen my-2 d-flex justify-content-center align-items-center">
            <input style={{height:"100px", textAlign:"right",fontSize:"30px",fontWeight:"bolder"}} type="text" className='form-control w-100' placeholder="Let's Calculate" defaultValue={value} />
          </div>
          <div className="buttons d-sm-flex flex-column justify-content-center align-items-center mb-2">
          <div className="b1 mt-3">
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={"7"} onClick={e=>setValue(value + e.target.value)}>7</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"8"} onClick={e=>setValue(value + e.target.value)}>8</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"9"} onClick={e=>setValue(value + e.target.value)}>9</Button>
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={""} onClick={()=>setValue(value.slice(0,-1))}>DEL</Button>
          </div>
          <div className="b2">
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={"4"} onClick={e=>setValue(value + e.target.value)}>4</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"5"} onClick={e=>setValue(value + e.target.value)}>5</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"6"} onClick={e=>setValue(value + e.target.value)}>6</Button>
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={"+"} onClick={e=>setValue(value + e.target.value)}>+</Button>
          </div>
          <div className="b3">
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={"1"} onClick={e=>setValue(value + e.target.value)}>1</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"2"} onClick={e=>setValue(value + e.target.value)}>2</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"3"} onClick={e=>setValue(value + e.target.value)}>3</Button>
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={"-"} onClick={e=>setValue(value + e.target.value)}>-</Button>
          </div>
          <div className="b4">
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={"."} onClick={e=>setValue(value + e.target.value)}>.</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"0"} onClick={e=>setValue(value + e.target.value)}>0</Button>
          <Button style={{width:"75px",margin:"5px"}} variant="dark" value={"/"} onClick={e=>setValue(value + e.target.value)}>/</Button>
          <Button style={{width:"75px", margin:"5px"}} variant="dark" value={"*"} onClick={e=>setValue(value + e.target.value)}>*</Button>
          </div>
          <div className="b5">
          <Button style={{width:"160px",margin:"5px"}} variant="danger" size="lg" onClick={()=>setValue("")}>RESET</Button>
          <Button type='submit' style={{width:"160px",margin:"5px"}} variant="success" size="lg" onClick={handleCalculate}>=</Button>
          </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
