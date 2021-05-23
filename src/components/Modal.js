function Modal(props) {
    debugger
    function CloseModalWindow() {
        props.CloseModalHandler()
    }
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={CloseModalWindow}>Cancel</button>
            <button className='btn' onClick={CloseModalWindow}>Confirm</button>
        </div>)
}

export default Modal