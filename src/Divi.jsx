import { useDispatch } from "react-redux"
import { divNumber } from "./slices/counterSlice"

const Divi = () => {
    let dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(divNumber())} >division </button>
  )
}

export default Divi