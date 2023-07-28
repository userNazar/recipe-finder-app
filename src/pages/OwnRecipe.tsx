import React from 'react'
import FormAdd from '../components/own/FormAdd'
import TableOwnCard from '../components/own/TableOwnCard'
import { useAppSelector } from '../store/hooks'
import FullScreenCard from '../components/FullScreenCard'

export default function OwnRecipe() {

  const modalsState = useAppSelector(state => state.modals)

  return (
    <div>
      {
        modalsState.cardModal ? <FullScreenCard /> : null
      }
      <FormAdd />
      <TableOwnCard />
    </div>
  )
}
