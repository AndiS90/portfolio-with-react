import React, { useState } from 'react';
import { send } from 'emailjs-com';



// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [toSend, setToSend] = useState({
    email: '',
    userName: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      //used to clear the form upon submit
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );
      this.setState({
        itemvalues: [{}]
      });
  
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };




  // // Create state variables for the fields in the form
  // // We are also setting their initial values to an empty string
  // const [email, setEmail] = useState('');
  // const [userName, setUserName] = useState('');
  // const [message, setMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   // Based on the input type, we set the state of either email, username, and message
  //   if (inputType === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputType === 'userName') {
  //     setUserName(inputValue);
  //   } else {
  //     setMessage(inputValue);
  //   }
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  //   if (!validateEmail(email) || !userName) {
  //     setErrorMessage('Email or username is invalid');
  //     // We want to exit out of this code block if something is wrong so that the user can correct it
  //     return;      
  //   }
 

  //   // If everything goes according to plan, we want to clear out the input after a successful registration.
  //   setUserName('');
  //   setMessage('');
  //   setEmail('');
  // };

  return (
    <div>
      <form className="form">
      
      <div className="form-group">
        <label for="exampleFormControlInput1">Email Address</label>
        <input className="form-control" value={toSend.email} name="email" onChange={handleChange} type="email" placeholder="Email" />
      </div>

      <div className="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input className="form-control" value={toSend.userName} name="userName" onChange={handleChange} type="text"placeholder="Name"/>
      </div>
       
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <input class="form-control" id="textArea" rows="3" value={toSend.message}  name="message" onChange={handleChange} type="" placeholder="Message" />
      </div>

      <div class="button">
        <button className="btn btn-secondary btn-lg btn-block" type="button" onClick={onSubmit}>Submit</button>
      </div>

      </form>
      
      {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
    </div>
  );
}

export default Contact;

