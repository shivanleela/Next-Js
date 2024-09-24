import { CreateContext } from "./App"


const Props2 = () => {
 
  return (
    <div>
      <CreateContext.Consumer>
        {(name)=><p>{name.name}</p>}


      </CreateContext.Consumer>
   

    </div>
  )
}

export default Props2