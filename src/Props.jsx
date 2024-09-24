
import { useContext } from "react"
import { CreateContext } from "./App"
import Props1 from "./Props1"


const Props = () => {
    const data =useContext(CreateContext)
 
  return (
    <div>
      <p>Id  :{data.id}</p> 
       <p>Name  :{data.name}</p> 
       <p>Age :{data.age}</p> 
       <Props1/>

    </div>
  )
}

export default Props