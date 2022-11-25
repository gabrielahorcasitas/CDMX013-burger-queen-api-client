import {  render, screen } from "@testing-library/react";
import Form from "./Form";

describe('LogIn component renders correctly', ()=>{
  
  test('inputs should be empty', ()=>{
    render(<Form/>);
    const emailInputElement = screen.getByRole("textbox");
    const passwordInputElement = screen.getByLabelText("Password");
    expect(emailInputElement).toBe("");
    expect(passwordInputElement).toBe("");
  })
})