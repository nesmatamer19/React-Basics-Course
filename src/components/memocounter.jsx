import React, { useState, useCallback , useMemo} from 'react'
import CountValue from './countvalue'
import CountButton from './countbutton'

export default function Memocounter() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  const incrementA = useCallback(() => {
    //usememo lets you cashe any heavy calculation and only recalculate it when the dependencies change
    //use callback is used to prevent the function from being recreated on every render and only recreate it when the dependencies change
    //react memo is used to prevent the component from re-rendering when the props or state change and only re-render when the props or state change
    //react memo and use callback are used together
    setCountA(countA + 1)
  }, [countA])

  const incrementB = useCallback(() => {
    setCountB(countB + 1)
  }, [countB])

  const isEven = useMemo(() => {
    let i= 0;
    while (i < 1000000000) i++;
    return countA % 2 === 0;
  }, [countA])

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <h2>{isEven ? "Even" : "Odd"}</h2>
          <CountValue count={countA} />
        </div>
        <div className="flex items-center gap-2">
          <CountButton onIncrement={incrementA} label="Increase A" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <CountValue count={countB} />
        </div>
        <div className="flex items-center gap-2">
          <CountButton onIncrement={incrementB} label="Increase B" />
        </div>
      </div>
    </div>
  )
}
