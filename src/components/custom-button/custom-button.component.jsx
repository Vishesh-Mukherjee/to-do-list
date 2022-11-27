import { CtmBtn } from "./custom-button.styles";

const CustomButton = ({title, onClick}) => {
    return (
        <CtmBtn onClick={onClick}>{title}</CtmBtn>
    )
}

export default CustomButton;