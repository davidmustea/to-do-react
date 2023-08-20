import TodoElement from "./TodoElement";
import TodoSearch from "./TodoSearch";

const style = {
    border: "5px solid",
    margin: "auto",
    width: "50%",
    padding: "10px",
    background: "#06053D",
}


function TodoApp(){
    return(
        <div className="TodoApp" style = {style}>
            <TodoSearch />
            <TodoElement titlutodo = "salut"/>
        </div>
        )  
}


export default TodoApp;