import React from 'react'
import './Contact.css'

function Contact() {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "69b8015c-eb5b-4a0d-b68c-21c24aca0fae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h2>Send us a message</h2>
            <p>Please feel free to contact us with any questions or concerns regarding your vehicle, and our team will respond within 24 hours.</p>
            
        <div className="contact-col"></div>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder= 'Enter your phone number' required/>
                <label>Type your message here</label>
                <textarea name="message" rows="6" placeholder="Enter your issue or question" required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    
    <div className='info'>
        <h2>Our Info</h2>
        <ul>
            <p>(248) 840-7752</p>
            <p>AutoFixTransmissions@gmail.com</p>
            <p>7720 Highland rd, Waterford MI 48327</p>
         </ul>

    <div className='hours'>
            <h2>Our Hours</h2>
            <p>Monday  8am-6pm</p>
            <p>Tuesday 8am-6pm</p>
            <p>Wednesday 8am-6pm</p>
            <p>Thursday  8am-6pm</p>
            <p>Friday    8am-6pm</p>
            <p>Saturday Appointment Only</p>
            <p>Sunday   Closed</p> 
         
         </div>
        </div>
    </div>
  )
}

export default Contact
