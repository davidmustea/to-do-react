function TodoSearch(){
    return(
        <div className="TodoSearch">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="To-Do" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Add</button>
                    </div>
            </div>
            
        </div>
    )
}

export default TodoSearch;