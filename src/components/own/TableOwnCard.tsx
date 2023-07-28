import React from 'react'
import { useAppSelector } from '../../store/hooks'
import TablesElement from '../main/TablesElement'

export default function TableOwnCard() {

    const { mealsOwn } = useAppSelector(state => state.ownStore)
    console.log(mealsOwn)
    return (
        <div className='container mt-4 mb-4'>
            <div className="border border-dashed d-flex flex-wrap justify-content-around" style={{ minHeight: '100px', minWidth: '100px' }}>
                {
                    mealsOwn.length ?
                        mealsOwn.map(el =>
                            <TablesElement
                                key={el.idMeal}
                                img={el.strMealThumb ? el.strMealThumb : ''}
                                title={el.strMeal}
                                text={el.strInstructions}
                                recipe={el}
                            />
                        )
                        :
                        <h1 className='mt-3'>Empty</h1>
                }
            </div>
        </div>
    )
}
