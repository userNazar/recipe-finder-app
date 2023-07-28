import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useAppDispatch} from '../../store/hooks';
import { openCardModal } from '../../store/features/modalsOwn';
import { Meal, OwnMeal } from '../../types/types';
import { addRecipe } from '../../store/features/storeListSlicer';

interface CardProps {
    img: string;
    title: string;
    text: string;
    recipe: Meal | OwnMeal
}

export default function TablesElement(props: CardProps) {
    const dispatch = useAppDispatch()

    const handlerCardOpen = (e: React.MouseEvent<HTMLDivElement>) => {

        const target = e.target as HTMLElement

        if (target.className.includes('btn')) {
            return
        }

        dispatch(openCardModal(props.recipe))
    }
    function buttonHandler() {
        dispatch(addRecipe(props.recipe))
    }

    return (

        <Card
            style={{ width: '18rem', margin: 20 }}
            className='text-black card'
            onClick={(e: React.MouseEvent<HTMLDivElement>) => handlerCardOpen(e)}
        >
            <Card.Img style={{ width: 288, height: 288, padding: 20 }} variant="top" src={props.img ? props.img : 'https://archive.org/download/no-photo-available/no-photo-available.png'} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>

            <Button type="button" className="btn btn-danger card-btn" onClick={buttonHandler}>
                +
            </Button>

        </Card>

    )
}
