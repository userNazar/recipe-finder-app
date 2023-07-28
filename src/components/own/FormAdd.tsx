import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useAppDispatch } from '../../store/hooks'
import { addOwnRecipe } from '../../store/features/ownSlicer'

interface InputsData {
    name: string
    ingredients: string
    instructions: string
    img?: string
    source?: string
}
export default function FormAdd() {

    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState<InputsData>({
        name: '',
        ingredients: '',
        instructions: '',
        img: '',
        source: ''
    });


    function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;

        if (target.id === 'link1') {
            setInputs({ ...inputs, name: target.value })
        }
        else if (target.id === 'link2') {
            setInputs({ ...inputs, ingredients: target.value })
        }
        else if (target.id === 'link3') {
            setInputs({ ...inputs, instructions: target.value })
        }
        else if (target.id === 'link4') {
            setInputs({ ...inputs, img: target.value })
        }
        else if (target.id === 'link5') {
            setInputs({ ...inputs, source: target.value })
        }

    }


    function createRecipe() {
        if (inputs.name.trim() && inputs.ingredients.trim() && inputs.instructions.trim()) {
            dispatch(addOwnRecipe({
                idMeal: new Date().getTime().toString(),
                strMeal: inputs.name,
                strIngredient1: inputs.ingredients,
                strInstructions: inputs.instructions,
                strSource: inputs.source ? inputs.source : null,
                strMealThumb: inputs.img ? inputs.img : null
            }))


            setInputs({
                ...inputs,
                name: '',
                ingredients: '',
                instructions: '',
                img: '',
                source: ''
            })
        } else {
            setInputs({
                ...inputs,
                name: '',
                ingredients: '',
                instructions: '',
                img: '',
                source: ''
            })
        }
    }



    return (
        <Container className='mt-2'>
            <Form onClick={(e: React.MouseEvent<HTMLFormElement>) => e.preventDefault()}>
                <Form.Group controlId="link1" className='mt-2'>
                    <Form.Label>Name of dish</Form.Label>
                    <Form.Control
                        value={inputs.name}
                        type="text"
                        placeholder="Enter Link 1"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputHandler(e)}
                    />
                </Form.Group>

                <Form.Group controlId="link2" className='mt-2'>
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                        value={inputs.ingredients}
                        type="text"
                        placeholder="Enter Link 2"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputHandler(e)}
                    />
                </Form.Group>

                <Form.Group controlId="link3" className='mt-2'>
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control
                        value={inputs.instructions}
                        type="text"
                        placeholder="Enter Link 3"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputHandler(e)}
                    />
                </Form.Group>

                <Form.Group controlId="link4" className='mt-2'>
                    <Form.Label>Image link (Optionally)</Form.Label>
                    <Form.Control
                        value={inputs.img}
                        type="text"
                        placeholder="Enter Link 4"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputHandler(e)}
                    />
                </Form.Group>
                <Form.Group controlId="link5" className='mt-2'>
                    <Form.Label>Source (Optionally)</Form.Label>
                    <Form.Control
                        value={inputs.source}
                        type="text"
                        placeholder="Enter Link 5"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputHandler(e)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-2' onClick={createRecipe}>
                    Add
                </Button>
            </Form>
        </Container>
    )
}
