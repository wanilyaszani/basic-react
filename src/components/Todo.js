import {useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';
function Todo(props){
const [modalIsOpen, setModalIsOpen] = useState(false); // react hook, always return the array woth two elemetsz

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }
return <div className = "card">
                 <h2>{props.text}</h2>
                 <div className="actions">
                     <button className="btn" onClick={deleteHandler}>Delete</button>
                 </div>
                 {modalIsOpen && <Modal onClose={closeModalHandler} />}
                 {modalIsOpen && <Backdrop  onCancel={closeModalHandler} />}
               </div>

}
export default Todo;