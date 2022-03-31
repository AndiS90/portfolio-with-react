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
      

    </div>
  );
}

export default Contact;

