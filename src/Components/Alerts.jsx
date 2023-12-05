import Toast from 'react-bootstrap/Toast';
import './Alerts.css';

function Alerts({ show, onHide, message }) {
    const timestamp = new Date().toLocaleTimeString();

    return (
        <div className="alerts-toast">
            <Toast bg="danger" show={show} onClose={onHide}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">NewsNexuz</strong>
                    <small>{timestamp}</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    );
}

export default Alerts;