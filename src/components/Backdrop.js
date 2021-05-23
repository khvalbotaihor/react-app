function Backdrop(props) {
    debugger

    function RemoveModalWindow() {
        props.onCancel()
    }

    return <div className='backdrop' onClick={RemoveModalWindow}/>
}

export default Backdrop