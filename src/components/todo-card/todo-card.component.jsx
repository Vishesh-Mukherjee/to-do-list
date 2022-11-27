import CustomButton from "../custom-button/custom-button.component";
import { Container, Para } from "./todo-card.styles";

const ToDoCard = ({task, index, taskList, setTaskList}) => {

    const onClickHandler = () => {
        const filteredList = taskList.filter((ele, eleIndex) =>  eleIndex !== index);
        setTaskList(filteredList); 
    }

    return (
        <Container>
            <Para>{task}</Para>
            <CustomButton title={"DELETE"} onClick={onClickHandler}/>
        </Container>
    );
};

export default ToDoCard;