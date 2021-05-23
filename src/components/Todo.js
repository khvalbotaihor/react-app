import {useState} from 'react'
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function DeleteHandler() {
        setModalIsOpen(true)
    }

    return (<>
            <div className='card'>
                <h2>{props.text}</h2>
                <div className='actions'>
                    <button className='btn' onClick={DeleteHandler}>Delete</button>
                </div>
            </div>
        {modalIsOpen && <Modal/>}
        {modalIsOpen && <Backdrop/>}
        </>

    );
}

export default Todo;
