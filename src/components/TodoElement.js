import {Button} from "react-bootstrap";

const styleDiv = {
    display: "flex",
    width: "20em",
    justify-content: "flex-end",
}
const textColor = {
    color : "white",
}

function TodoElement(props){
    return(
        <div className="TodoElement" style = {styleDiv}>
            <p style = {textColor}>{props.titlutodo}</p>
            <div>
                <Button className="button"></Button>
                <Button className="button"></Button>
            </div>
            
        </div>
        )
}

export default TodoElement;