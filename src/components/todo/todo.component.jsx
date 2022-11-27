import ToDoCard from "../todo-card/todo-card.component";
import { Container } from "./todo.styles"

const ToDo = ({taskList, setTaskList}) => {
    return (
        <Container>
            {taskList.map((task, index) => <ToDoCard key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>)}
        </Container>
    )
};

export default ToDo;