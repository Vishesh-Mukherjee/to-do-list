import { InputBox } from "./input-field.styles"

const InputField = ({inputString, setInputString}) => {
    const onChangeHandler = (event) => {
        const updatedStr = event.target.value;
        setInputString(updatedStr);
    }

    return(
        <InputBox value={inputString} autoFocus={true} onChange={onChangeHandler}/>
    )
}

export default InputField