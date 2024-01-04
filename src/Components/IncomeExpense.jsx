import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

 function IncomeExpense() {

   const{transaction} = useContext(GlobalContext);
    const amount = transaction.map((amount)=>amount.amount)
   const income = amount.filter((amount)=>amount>0).reduce((acc,amount)=>(acc += amount),0).toFixed(2)
   const expense = amount.filter((amount)=>amount<0).reduce((acc,amount)=>(acc += amount),0).toFixed(2)*-1
  return (
    <div className="flex justify-around w-full bg-blue-100">
        <div className="flex-col justify-center">
            <h3 className="text-green-600 font-mono text-lg font-medium ">Income</h3>
            <p className="text-center font-medium text-lg">{income}</p>
        </div>
        <div className="border-l-2 border-blue"></div>

        <div>
            <h3 className="text-red-600 font-mono text-lg font-semibold">Expense</h3>
            <p className="text-center font-medium text-lg">{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense