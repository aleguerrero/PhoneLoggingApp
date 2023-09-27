// import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AudioTranscription from "./AudioTranscription";

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
                <div className="recording-data-block">
                    <b>Recording</b><br /><br />
                    <ReactAudioPlayer
                        src={process.env.PUBLIC_URL + props.phoneCallData.phoneCallRecording}
                        controls
                    />
                    <br /><br />
                    <b>Phone Number:</b> <br/>{props.phoneCallData.phoneNumber}<br /><br/>
                    <b>Call Date:</b> <br/>{props.phoneCallData.callDate}<br /><br/>
                    <b>Person Who Attended It:</b> <br/>{props.phoneCallData.personWhoAttended}
                </div>
                <AudioTranscription transcript={props.phoneCallData.transcript} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PhoneCallModal;