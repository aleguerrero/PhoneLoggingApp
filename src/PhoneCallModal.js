// import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

function PhoneCallModal(props) {

    // const [Recording, setRecording] = useState("");

    // useEffect(
    //     () => {
    //         const recordingProp = require(props.phoneCallData.phoneCallRecording);
    //         setRecording(recordingProp);
    //     }, []);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Call from {props.phoneCallData.personWhoCalled}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <b>Recording</b><br/><br/>
                <ReactAudioPlayer
                    src={process.env.PUBLIC_URL + props.phoneCallData.phoneCallRecording}
                    controls
                />
                <br/><br/>
                <b>Phone Number: </b> {props.phoneCallData.phoneNumber}<br/>
                <b>Call Date: </b> {props.phoneCallData.callDate}<br/>
                <b>Person Who Attened It: </b> {props.phoneCallData.personWhoAttended}<br/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PhoneCallModal;