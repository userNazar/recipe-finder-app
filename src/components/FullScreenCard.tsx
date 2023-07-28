
import { Button, CloseButton, Nav } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeCardModal } from '../store/features/modalsOwn'
import { addRecipe } from '../store/features/storeListSlicer'




export default function FullScreenCard() {

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.modals.cardModalData)


  function handlerCardClose(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    if (target.className === 'full-screen-card') {
      dispatch(closeCardModal())
    }
    return
  }

  function buttonHandler() {
    dispatch(addRecipe(state))
  }

  return (
    <div className='full-screen-card' onClick={(e: React.MouseEvent<HTMLDivElement>) => handlerCardClose(e)}>
      <div className="full-screen-card__body d-flex flex-column">
        <div className="ms-auto">
          <CloseButton className='m-3' onClick={() => dispatch(closeCardModal())} />
        </div>
        <div className="d-flex justify-content-around m-1 flex-wrap">
          <img src={state?.strMealThumb ? state?.strMealThumb : 'https://archive.org/download/no-photo-available/no-photo-available.png'} alt="" />
          {
            state?.strYoutube ?
              <iframe width="350" height="200" src={`https://www.youtube.com/embed/${state?.strYoutube.slice(32)}`} allowFullScreen />
              :
              <img src={'https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149291978.jpg?w=826&t=st=1685639030~exp=1685639630~hmac=c7f3844d3437a292e2302c10196b020c8ba2c256e4af25e477e61496a0da0505'} alt="" />
          }

        </div>
        <p className='m-1 ms-4 mt-2'>
          <span className='text-danger'>Ingredients:</span>
          <span>
            {`
              ${state?.strIngredient1 + ','}
              ${state?.strIngredient2 ? state?.strIngredient2 + ',' : ''}
              ${state?.strIngredient3 ? state?.strIngredient3 + ',': ''}
              ${state?.strIngredient4 ? state?.strIngredient4 + ',': ''}
              ${state?.strIngredient5 ? state?.strIngredient5 + ',': ''}
              ${state?.strIngredient6 ? state?.strIngredient6 + ',': ''}
              `}
          </span>
        </p>

        <p className='ms-4 me-5 mt-4'>
          <span className='text-danger'>Instructions</span>: {state?.strInstructions.slice(0, 500)}...
        </p>
        <div className='ms-4'>Source: <Nav.Link className='text-danger' href={state?.strSource} target="_blank" style={{ display: 'inline' }}>Link</Nav.Link></div>
        <div className="mt-auto text-center">
          <Button type="button" className="btn btn-danger card-btn" onClick={buttonHandler}>
            +
          </Button>
        </div>
      </div>
    </div>
  )
}

