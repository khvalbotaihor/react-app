function Backdrop(props) {
    debugger

    function RemoveModalWindow() {
        props.onClick()
    }

    return <div className='backdrop' onClick={RemoveModalWindow}/>
}

export default Backdrop