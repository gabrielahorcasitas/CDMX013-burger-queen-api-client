import {  fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import {MemoryRouter} from 'react-router-dom';
import axios from '../../__mocks__/axios';

jest.mock('axios');

describe('LogIn component renders correctly', ()=>{
  test('it should called axios', ()=>{
     render(<MemoryRouter> <Form/>
      </MemoryRouter>);
      fireEvent.click(screen.getByText('Start'));
  
  } )
  
  // test('inputs should be empty', ()=>{
  //   render(<Form/>);
  //   const emailInputElement = screen.getByRole("textbox");
  //   const passwordInputElement = screen.getByLabelText("Password");
  //   expect(emailInputElement).toBe("");
  //   expect(passwordInputElement).toBe("");
  // })
})