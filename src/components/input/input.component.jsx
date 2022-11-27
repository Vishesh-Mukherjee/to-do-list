import { useState } from "react"
import CustomButton from "../custom-button/custom-button.component"
import InputField from "../input-field/input-field.component"
import { Container } from "./input.styles"

const Input = ({taskList, setTaskList}) => {
    const [inputString, setInputString] = useState("");

    const onClickHandler = () => {
        taskList.push(inputString);
        setTaskList([...taskList]);
        setInputString("");
    }

    return(
        <Container>
            <InputField inputString={inputString} setInputString={setInputString}/>
            <CustomButton title="ADD" onClick={onClickHandler}/>
        </Container>
    )
}

export default Input;