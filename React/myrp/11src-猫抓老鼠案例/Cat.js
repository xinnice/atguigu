import usePosition from './usePosition'
import CatUrl from './assets/cat.gif'
export default function Cat() {
  let { x, y } = usePosition()
  x+=150
  y-=50
  return (
    <div>
      <img
        src={CatUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y}}
      />
    </div>
  )
}
