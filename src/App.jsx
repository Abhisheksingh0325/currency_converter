import Input from './componenet/Input'
import useCurrencyconveter from './hooks/Usecurrencyconverter'
import { useState } from 'react'

function App() {

  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedAmount, setconvertedamount] = useState (0)

  const currencyInfo = useCurrencyconveter(from)

  const option = Object.keys(currencyInfo)


  const swap = () => {
    setFrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedAmount)
  }

const convert = () => {
  setconvertedamount(amount * currencyInfo[to])
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?w=740&t=st=1708756306~exp=1708756906~hmac=998ae2fa6e7ee0e58db5c57bcd89f5f7cfab6c28aa6ec6bccdff6224e2181c12')`,
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
                      <Input
                          label="From"
                          amount={amount}
                          currencyOpetion = {option}
                          onCurrencyChange = {() => setamount(amount)}
                          selectCurrency = {from}
                          onAmountChange={(amount) => setamount(amount)}
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
                      <Input
                          label="To"
                          amount={convertedAmount}
                          currencyOpetion = {option}
                          onCurrencyChange = {(curr) => setto(curr)}
                          selectCurrency = {to}
                          amountdisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
)
}

export default App
