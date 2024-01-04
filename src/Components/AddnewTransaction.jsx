import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState";

function AddnewTransaction() {

    const{addTransaction}=useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random()*100000000),
            text,amount: +amount
        }
        addTransaction(newTransaction);
    }
  return (
    <>
    <h2 className="font-mono">Add New Transaction</h2>
    <form onSubmit={onSubmit} className="flex flex-col justify-start w-full">
        <div className="flex flex-col mt-2">
        <label className="font-mono">Text</label>
        <input className="p-1 bg-blue-100" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="flex flex-col mt-2">
        <label className="font-mono">Amount</label>
        <input className="p-1 bg-blue-100" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button className="mt-2 p-1 bg-green-600 font-mono" type="submit">Add Transaction</button>
    </form>
    
    </>
  )
}

export default AddnewTransaction