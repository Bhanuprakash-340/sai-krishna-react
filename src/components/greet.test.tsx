import { render,screen } from "@testing-library/react"
import Greet from "./Greet"

test("render heading correctly", () =>{
    render(<Greet/>)
    const headingText = screen.getByText("Hello")
    expect(headingText).toBeInTheDocument()
})

test("render Heading with name", () =>{
    render(<Greet name="bhanu"/>)
    const headingText = screen.getByText("Hello bhanu")
    expect(headingText).toBeInTheDocument()
})