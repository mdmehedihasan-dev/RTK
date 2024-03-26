import { useSelector } from "react-redux"
// import { plusNumber } from "./slices/counterSlice"

const Result = () => {
    let data = useSelector((state)=>state.count.value)
    console.log(data)
  return (
    <div>{data}</div>
  )
}

export default Result