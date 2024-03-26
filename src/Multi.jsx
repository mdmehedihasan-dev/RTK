
import { useDispatch } from 'react-redux'
import { multiNumber } from './slices/counterSlice'

const Multi = () => {
    let dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(multiNumber())}>Multiplication</button>
  )
}

export default Multi