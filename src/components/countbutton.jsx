import React, { useCallback } from 'react'

const CountButton = React.memo(function CountButton({ onIncrement, label = 'Increment' }) {
  const handleClick = useCallback(() => {
    onIncrement()
  }, [onIncrement])

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-3 py-1 rounded">
      {label}
    </button>
  )
})

export default CountButton
