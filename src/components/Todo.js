function Todo(props) {

    function DeleteHandler() {

    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={DeleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;
