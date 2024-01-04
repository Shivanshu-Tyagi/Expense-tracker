import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

function Balance() {
 const{transaction} = useContext(GlobalContext)
 const amount = transaction.map((amount) => amount.amount);
 const total = amount.reduce((acc,item)=>(acc += item),0).toFixed(2)
  return (
    <div className="flex justify-between w-full my-6">
        <h4 className="font-semibold font-mono text-lg">Your Balance :</h4>
        <h2 className="text-xl font-medium text-blue-100">{total}</h2>
    </div>
  )
}

export default Balance