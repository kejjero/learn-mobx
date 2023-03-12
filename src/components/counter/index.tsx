import React from 'react'
import './counter.css'
import math from 'store/math'
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div className='counter'>
      <div className='counter__wrapper'>
        <button
          onClick={() => math.increment()}
          className='counter__btn'
          type='button'
        >
          +
        </button>
        <button
          onClick={() => math.decrement()}
          className='counter__btn'
          type='button'
        >
          -
        </button>
      </div>
      <span className='counter__result'>{math.count}</span>
    </div>
  )
})

export default Counter;