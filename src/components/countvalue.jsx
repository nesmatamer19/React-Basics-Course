import React, { useCallback } from 'react'

const CountValue = React.memo(function CountValue({ count }) {
  const format = useCallback(() => `Count: ${count}`, [count])
  return <div className="text-lg font-medium">{format()}</div>
})

export default CountValue
