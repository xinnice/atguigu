import { useState, useEffect } from 'react'

export default function usePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove')
    }
  }, [])

  function move(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return { x, y }
}
