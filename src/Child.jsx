import { useState } from "react"



const Child = ({fun}) => {

    const [input,setInput]=useState()

    function change(e){
        setInput(e.target.value)
    }


    function handlechange(){
        fun(input)
    }

    
  return (
    <div>

        <input type="text" onChange={change} value={input} />
        <button onClick={handlechange}>click</button>

    </div>
  )
}

export default Child