import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transaction ,deleteTransaction} = useContext(GlobalContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

   

  const sign = transaction.map((trans) => (Math.sign(trans.amount) === 1 ? "+" : Math.sign(trans.amount) === -1 ? "-" : ""));

  return (
    <div className="flex flex-col w-full my-4">
      <div className="font-mono">History</div>
      {transaction.map((trans, index) => (
        <div
          key={trans.id}
          className={`w-full flex justify-between p-1 mt-2 bg-blue-100 border-r-4 ${sign[index] === "+" ? "border-green-600" : "border-red-600"}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="font-mono">{trans.text}</h3>
          <p>{trans.amount}</p>
          {hoveredIndex === index && (
            <button className="text-red-60" onClick={() => handleDelete(trans.id)}>
              X
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
