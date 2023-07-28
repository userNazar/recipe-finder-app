import React from 'react'
import { Table } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { deleteRecipe } from '../../store/features/storeListSlicer';
import { openCardModal } from '../../store/features/modalsOwn';
import { Meal } from '../../types/types';

export default function ListBody() {

  const { list } = useAppSelector(state => state.listStore)
  const dispatch = useAppDispatch();

  function elementHandler(e: React.MouseEvent, element: Meal) {
    const target = e.target as HTMLElement;
    if (!target.className.includes('table-delete') && !target.className.includes('table-link')) {
      dispatch(openCardModal(element))
    }
  }

  function deleteHandler(el: Meal) {
    dispatch(deleteRecipe(el))
  }
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th className='text-center'>#</th>
          <th>Name of dish</th>
          <th>Ingredients</th>
          <th>Youtube</th>
        </tr>
      </thead>

      <tbody>
        {
          list.map((el, i) =>
            <tr key={el.idMeal + i.toString()} onClick={(e: React.MouseEvent) => elementHandler(e, el)} className='table-element'>
              <td className='text-center'>{i + 1}</td>
              <td>{el.strMeal}</td>
              <td>{el.strIngredient1}</td>
              <td><a href={el.strYoutube} className='table-link' target='_blank'>Here</a></td>
              <td className='text-center table-delete' onClick={() => deleteHandler(el)}>X</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  )
}
