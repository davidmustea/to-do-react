const Adaugare = e => {
    e.PreventDefault();

}
function TodoSearch(){
    return(
        <div className="TodoSearch">
            <form className="input-group mb-3" onSubmit={Adaugare}>
                <input onChange = {(e) => console.log(e.target.value)}type="text" className="form-control" placeholder="To-Do" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Add</button>
                    </div>
            </form>
            
        </div>
    )
}

export default TodoSearch;