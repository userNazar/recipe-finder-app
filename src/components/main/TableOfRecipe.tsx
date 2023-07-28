import { useEffect } from 'react'
import TablesElement from './TablesElement'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchRecipe } from '../../store/features/recipeSlicer';
import { Spinner } from 'react-bootstrap';

export default function TableOfRecipe() {

    const dispatch = useAppDispatch();
    const { meals, loading } = useAppSelector(state => state.netRecipes)


    useEffect(() => {
        dispatch(fetchRecipe('p'))
    }, [])

    

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center m-5">
                <Spinner
                    animation="border"
                    variant="primary"
                    style={{ width: '10rem', height: '10rem' }}
                />
                <h1 className='ms-5 loadingH1'>Loading...</h1>
            </div>
        )
    }

    return (
        <div className='text-white' style={{ background: "#f1f1f1" }}>
            <div className="container d-flex flex-wrap justify-content-around">
                {
                    meals ?

                        meals.map(recipe =>
                            <TablesElement
                                key={recipe.idMeal}
                                title={recipe.strMeal}
                                text={`${recipe.strIngredient1}, ${recipe.strIngredient2}, ${recipe.strIngredient3}, ${recipe.strIngredient4}, ${recipe.strIngredient1}`}
                                img={recipe.strMealThumb}
                                recipe={recipe}
                            />
                        )
                        :
                        <h1 className='text-black'>No recipes some Error )</h1>
                }

            </div>
        </div>
    )
}
