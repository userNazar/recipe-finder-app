import React from 'react'
import ListBody from '../components/list/ListBody'
import FullScreenCard from '../components/FullScreenCard'
import { useAppSelector } from '../store/hooks'

export default function ListRecipe() {
  const { cardModal } = useAppSelector(state => state.modals)
  return (
    <div>
      {
        cardModal ? <FullScreenCard /> : null
      }
      <ListBody />
    </div>
  )
}
