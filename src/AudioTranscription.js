function AudioTranscription(props) {
    return (
        <div className="transcription-block">
            <h4>Audio Transcription</h4>
            {props.transcript
                && props.transcript.map((t) => (
                    <div className="transcription-segment">
                        <b>{t.name}</b><br />
                        <p>{t.transcript}</p>
                    </div>
                ))}
        </div>
    );
}

export default AudioTranscription;