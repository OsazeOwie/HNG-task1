import { useState } from "react";

const Contact = () => {
    const [textArea, setTextArea] = useState('');
    const [className, setClassName] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const name = 'Osaze';

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(textArea);

        if (textArea === '') {
            setClassName("invalid");
            setIsValid(true);
        }
        else {
            setClassName('');
            setIsValid(false);
        }
    }

    return (
        <div className='contact-page'>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <form onSubmit={handleSubmit} className='form'>

                <div className="nameInp">
                    <div>
                        <label>First Name</label>
                        <input placeholder="Enter your name" id='first_name' type="text" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input placeholder="Enter your last name" id='last_name' type="text" />
                    </div>
                </div>
            
                    <label>Email</label>
                    <input placeholder="yourname@email.com" id='email' type="text" />
            
                    <div className='textarea'>
                        <label>Message</label>
                        <textarea className={className} value={textArea} onChange={e => setTextArea(e.target.value)} placeholder="Send me a message and I'll reply you as soon as possible..." id='message'></textarea>
                        {isValid && <span>please enter a message</span>}
                    </div>

                    <label className='check'>
                        <input required type="checkbox" /> You agree to providing your data to {name} who may contact you.
                    </label>
                    
                
                 <button id='btn__submit'>Send message</button>
            </form>
        </div>
    );
}

export default Contact;