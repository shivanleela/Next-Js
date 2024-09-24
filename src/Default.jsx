import {PropTypes} from 'prop-types'

const Default = ({name,age,id}) => {

  return (
    <>
    {name}
    {age}
    {id}
    
    </>

  )
}

Default.protoType={
    name:PropTypes.string,
    age:25,
    id:2
}

export default Default