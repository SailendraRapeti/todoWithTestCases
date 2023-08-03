import React from 'react';
import Todo from '../src/blocks/Todo';
import {it} from '@jest/globals';
import {render, screen, fireEvent} from '@testing-library/react-native'


test('should first', () => {
    render(<Todo/>)
    const textInput=screen.getByPlaceholderText("enter title")
    console.log(textInput.props.value)
    fireEvent.changeText(textInput,"sai")
    console.log(textInput.props.value)
    expect(textInput.props.value).toBe("sai")
 })

 test('should first', () => {
    render(<Todo/>)
    const textInput=screen.getByPlaceholderText("enter descripition")
    fireEvent.changeText(textInput,"sai")

    expect(textInput.props.value).toBe("sai")
 })

 test("Edit button Test",()=>
{
    render(<Todo/>)

    const textInput=screen.getByPlaceholderText("enter title")
    fireEvent.changeText(textInput,"sai")
    const textInput2=screen.getByPlaceholderText("enter descripition")
    fireEvent.changeText(textInput2,"sai")
    const Submit_Btn=screen.getByTestId("AddButton")
    fireEvent.press(Submit_Btn)
    const edit_Btn=screen.getByTestId("editButton")
    fireEvent.press(edit_Btn)
    const Testflatlist=screen.getByTestId("flatList")
    expect(textInput.props.value).toBe(Testflatlist.props.data[0].title)
    expect(textInput2.props.value).toBe(Testflatlist.props.data[0].description)
    fireEvent.changeText(textInput,"sai")
    fireEvent.changeText(textInput2,"sai")
    fireEvent.press(Submit_Btn)


})
it("delete button Test",()=>
{
    render(<Todo/>)
    const textInput=screen.getByPlaceholderText("enter title")
    fireEvent.changeText(textInput,"sai")
    const textInput2=screen.getByPlaceholderText("enter descripition")
    fireEvent.changeText(textInput2,"sai")
    const Submit_Btn=screen.getByTestId("AddButton")
    fireEvent.press(Submit_Btn)
    const delete_Btn=screen.getByTestId("deleteButton")
    fireEvent.press(delete_Btn)
    const Testflatlist=screen.getByTestId("flatList")
    expect(Testflatlist.props.data).toHaveLength(0)
})
it("test add button",()=>{
    render(<Todo/>)
    const textInput=screen.getByPlaceholderText("enter title")
    fireEvent.changeText(textInput,"sai")
    const textInput2=screen.getByPlaceholderText("enter descripition")
    fireEvent.changeText(textInput2,"sai")
    const Submit_Btn=screen.getByTestId("AddButton")
    fireEvent.press(Submit_Btn)
    const Testflatlist=screen.getByTestId("flatList")
    expect(Testflatlist.props.data[0].title).toBe("sai")
    expect(Testflatlist.props.data[0].description).toBe("sai")
    
})
it("title validsation",()=>{
    render(<Todo/>)
    const textInput=screen.getByPlaceholderText("enter title")
    fireEvent.changeText(textInput,"")
    const errortitle= screen.getByTestId("titleErrorMsg")
    console.log("err",errortitle)

    const Submit_Btn=screen.getByTestId("AddButton")
    fireEvent.press(Submit_Btn)
    expect(errortitle.children).toBe("* Please enter title")


})
it ("description validation",()=>{
    render(<Todo />)
    const textInput=screen.getByPlaceholderText("enter title")
    fireEvent.changeText(textInput,"sai")
    const textInput2=screen.getByPlaceholderText("enter descripition")
    fireEvent.changeText(textInput2,"")
    const Submit_Btn=screen.getByTestId("AddButton")
    fireEvent.press(Submit_Btn)
    const errorDecription = screen.getByTestId("descErrorMsg")
    expect(errorDecription.children).toBe("* Please enter description")

})