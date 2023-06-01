import React, { useState } from 'react';
import './Form.css';
import FormSentModal from './FormSentModal';
import bgStars from './media/bgstars.png';


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your form submission logic here
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div style={{ backgroundImage: `url(${bgStars})` }}>
            <div className="form-container" style={{ backgroundImage: `url(${bgStars})` }}>
                <h1>Want to build something?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    <button type="submit">Submit</button>
                </form>
                <FormSentModal showModal={showModal} closeModal={closeModal} />
            </div>
        </div >
    )
}

export default Form;
