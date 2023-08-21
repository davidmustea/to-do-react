import "./csscomponents/TodoApp.css";
import TodoElement from "./TodoElement";
import TodoSearch from "./TodoSearch";

function TodoApp(){
    return(
        <div className="TodoApp">
            <TodoSearch />
            <TodoElement titlutodo = "salut"/>
        </div>
        )  
}


export default TodoApp;