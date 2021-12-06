import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const ContactForm = () => {
  // using hook to sync the form data of the user input with component's state
  // clears input fields upon component loading
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  }); // hook offers the ability to initialize state values
  const [errorMessage, setErrorMessage] = useState(""); // error message hook

  // destructuring formState object into its named properties
  const { name, email, message } = formState;

  // syncs internal state of the component formState with the user input from the DOM
  const handleChange = (e) => {
    // validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid. ");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    // using conditional to only update state if form passes validation
    if(!errorMessage){
      // using spread operator (...) : used to expand elements of an iterable
      setFormState({ ...formState, [e.target.name]: e.target.value });
    } 

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section>
      <h1 data-testid='contact'>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* need to replace label for attribute with htmlFor bc js reserved keywords */}
        <div>
          <label htmlFor="name">Name:</label>
          {/* default assignment clears input fields */}
          <input
            type="text"
            name="name"
            defaultValue={name}
            /*
               This attribute prevents error message 
               from firing before user has finished typing. 
               Method fires after user has switched focus 
               to another ui element. 

                using on change caused error messages to display 
                with every new keystroke.
            */
            onBlur={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        {/* conditionally rendering the error message based on value of 'errorMessage' */}
          {/* The below is considered the same as:
                if (errorMessage) {
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
               } 
          */}
          {errorMessage && ( // if true the block renders. '&&' is being used as a short circuit in this instance
              <div>
                  <p className="error-text">{errorMessage}</p>
              </div>
          )}
        </div>
        <button type="submit" data-testid='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
