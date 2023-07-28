import FullScreenCard from '../components/FullScreenCard'
import TableOfRecipe from '../components/main/TableOfRecipe'
import { useAppSelector } from '../store/hooks'


export default function Main() {

  const modalsState = useAppSelector(state => state.modals)

  return (
    <div>

      {
        modalsState.cardModal ? <FullScreenCard /> : null
      }
    
      <TableOfRecipe />
    </div>
  )
}
