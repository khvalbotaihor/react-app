import {useState} from 'react'
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function DeleteHandler() {
        setModalIsOpen(true)
    }

    function CloseModalHandler() {
        setModalIsOpen(false)
    }

    return (<>
            <div className='card'>
                <h2>{props.text}</h2>
                <div className='actions'>
                    <button className='btn' onClick={DeleteHandler}>Delete</button>
                </div>
            </div>
        {modalIsOpen && <Modal onCancel={CloseModalHandler} onConfirm={CloseModalHandler}/>}
        {modalIsOpen && <Backdrop onCancel={CloseModalHandler}/>}
        </>

    );
}

export default Todo;
