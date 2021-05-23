function Backdrop(props) {
    function RemoveModalWindow() {
        props.CloseModalHandler()
    }
return <div className='backdrop' onClick={RemoveModalWindow}/>
}
export default Backdrop