import { useState } from 'react'
import InputBox from './Components/InputBox'
import './App.css'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setamount] = useState(0)
  const [from,setfrom]=useState("usd")
  const [To,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const CurrencyInfo=useCurrencyInfo(from)

  const options = Object.keys(CurrencyInfo)

  const swap=()=>{
    setfrom(To)
    setTo(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)

  }

  const convert=()=>{
    setConvertedAmount(amount*CurrencyInfo[To])
  }


  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                // backgroundImage: url("bg.jpg")
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setamount(amount)}
                                selectCurrency={from}
                                onamountChange={(amount)=>setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
