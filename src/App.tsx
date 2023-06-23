import TaskForm from "./components/Formulario";
import TaskList from "./components/Tarefas";
import { TaskProvider } from "./context/taskContext";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="App">
      <TaskForm />
      <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
