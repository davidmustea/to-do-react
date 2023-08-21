import "./csscomponents/TodoElement.css";
import {Button} from "react-bootstrap";

const textColor = {
    color : "white",
}

function TodoElement(props){
    return(
        <div className="TodoElement">
            <div className="div-titlu">
                <p style = {textColor}>{props.titlutodo}</p>
            </div>

            <div className="div-butoane">
                <Button className="button">Edit</Button>
                <Button className="button">Delete</Button>
            </div>
            
        </div>
        )
}

export default TodoElement;