import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(name + " " + lastName);
    setSubmitted(true);
  }
  return (
  <div>
    {/* <h1>{fullName}</h1> */}
    <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First name:</label>
      <input type="text" id="fname" name="fname" value={name} onChange={handleNameChange} required/><br/>
      <label htmlFor="lname">Last name:</label>
      <input type="text" id="lname" name="lname" value={lastName} onChange={handleLastNameChange} required/><br /><br />
      <input type="submit" value="Submit"/>
    </form>
    {submitted && (<p>Full Name: {fullName}</p>)}
    
  </div>
  );

}

export default App;
