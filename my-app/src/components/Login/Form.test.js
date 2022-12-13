import { fireEvent, render, screen } from '@testing-library/react'
import Form from './Form'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'
jest.mock('axios')

//describe('LogIn component renders correctly', () => {
/*test('it should called axios', () => {
        render(
            <MemoryRouter>
                {' '}
                <Form />
            </MemoryRouter>
        )
        fireEvent.click(screen.getByText('Start'))
    })*/

describe('LogIn component renders correctly', () => {
    test('it should call axios', () => {
        axios.get = jest.fn(() => Promise.resolve({ data: [] }))
        const spy = jest.spyOn(axios, 'get')
        render(
            <MemoryRouter>
                {' '}
                <Form />
            </MemoryRouter>
        )
        fireEvent.click(screen.getByText('Start'))
        expect(spy).toHaveBeenCalled()
    })

    test('inputs should be empty', () => {
        render(
            <MemoryRouter>
                {' '}
                <Form />
            </MemoryRouter>
        )
        const emailInputElement = screen.getByRole('textbox')
        const passwordInputElement = screen.getByLabelText('Password')
        expect(emailInputElement).toBe('')
        expect(passwordInputElement).toBe('')
    })
})

// test('inputs should be empty', ()=>{
//   render(<Form/>);
//   const emailInputElement = screen.getByRole("textbox");
//   const passwordInputElement = screen.getByLabelText("Password");
//   expect(emailInputElement).toBe("");
//   expect(passwordInputElement).toBe("");
// })
//})
