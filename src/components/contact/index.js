import React, { useState } from 'react';


const ContactForm = () => {

    // using hook to sync the form data of the user input with component's state
    // clears input fields upon component loading 
    const [formState, setFormState] = useState({ name: '', email: '',message: '' }); // hook offers the ability to initialize state values

    // destructuring formState object into its named properties
    const { name, email, message } = formState;

    // syncs internal state of the component formState with the user input from the DOM
    const handleChange = (e) => {
        // using spread operator (...) : used to expand elements of an iterable
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* need to replace label for attribute with htmlFor bc js reserved keywords */}
                <div>
                    <label htmlFor='name'>Name:</label>
                    {/* default assignment clears input fields */}
                    <input type='text' name='name' defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;