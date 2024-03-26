import { useDispatch } from "react-redux"
import  {plusNumber}  from "./slices/counterSlice"

const Plus = () => {
    let dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(plusNumber(5))}>Plus+</button>
  )
}

export default Plus