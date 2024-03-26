import { useDispatch } from "react-redux"
import {minusNumber} from './slices/counterSlice'

const Minus = () => {
  let dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(minusNumber(2))}>Minus-</button>
  )
}

export default Minus