function Modal(props) {
    function CloseModalWindow() {
        props.onClick()
    }
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={CloseModalWindow}>Cancel</button>
            <button className='btn' onClick={CloseModalWindow}>Confirm</button>
        </div>)
}

export default Modal