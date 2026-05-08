import { useState } from 'react'

import './App.css'
import ChaiCard from './components/ChaiCard.tsx'
import {Counter} from './components/Counter.tsx'
import type { Chai } from './types.ts'
import ChaiList from './components/ChaiList.tsx'
import OrderForm from './components/OrderForm.tsx'

function App() {

const menu : Chai[]=[
  {id:1 , name:"masala" , price:25}
]
  return (
    <>
      <div>
        <h1>Vite+React</h1>
        <ChaiCard name='earphones' price={10000}/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm onSubmit={(order)=>{
          console.log("Placed",order.name,order.cups);
          
        }}/>
      </div>

    </>
  )
}

export default App
