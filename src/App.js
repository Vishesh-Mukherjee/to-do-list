import { useState } from "react";
import { Container } from "./App.styles";
import Input from "./components/input/input.component";
import ToDo from "./components/todo/todo.component";

function App() {

  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  return (
    <Container>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      <ToDo taskList={taskList} setTaskList={setTaskList}/>
    </Container>
  );
}

export default App;
