import { useState } from 'react';
import { Button } from 'react-bootstrap';
import PhoneCallModal from './PhoneCallModal';

function ViewButton(props) {
    const [modalShow, setModalShow] = useState(false)

    return(
        <div className='viewButton'>
            <Button variant='primary' onClick={() => setModalShow(true)}>View</Button>
            <PhoneCallModal show={modalShow} onHide={() => setModalShow(false)} phoneCallData={props.phoneCallData}/>
        </div>
    );
}

export default ViewButton;