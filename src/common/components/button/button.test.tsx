import { render, screen } from "@testing-library/react"
import ButtonJSX from "./button"

describe("Button", ()=>{
    test("should show the text", ()=>{
        const text = "Click me"
       render(<ButtonJSX msg={text} onClick={()=>{}}/>)
       expect(screen.getByText(text)).toBeDefined()
    })
})