import './App.css'
import AddnewTransaction from './Components/AddnewTransaction'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExpense from './Components/IncomeExpense'
import TransactionList from './Components/TransactionList'
import { GlobalProvider } from './context/GlobalState'

function App() {
 

  return (
    <GlobalProvider>

   
    <div className=' bg-blue-100 h-screen flex justify-center items-center flex-col'> 
    <div className='flex justify-center items-center flex-col shadow-xl rounded-sm w-96 p-5 bg-blue '>

      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddnewTransaction/>
    </div>
    </div>
    </GlobalProvider>
  )
}

export default App
