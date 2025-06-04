import { useState, useEffect } from 'react';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullname] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullname(firstName + " " + lastName);
    setSubmitted(true);
  }
  
  return (
  <div>
    <h1>Full Name Display</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
    <label htmlFor="name">First Name:</label>
    <input name='name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input> <br/>
    <label htmlFor="lastName">Last Name:</label>
    <input name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}></input> <br/>
    <button type="submit">Submit</button>
    </form>
    {submitted && <p>Full Name: {fullName}</p>}
  </div>
  );

}

export default App;
