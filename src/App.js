import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [attendingWithGuest, setAttendingWithGuest] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const submit = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Email is not valid';
    if (!age) newErrors.age = "Age is required";
    else if( age <= 0) newErrors.age = 'Age must be greater than 0';
    if (attendingWithGuest && !guestName) newErrors.guestName = 'Guest name is required';

    if (Object.keys(newErrors).length === 0) {
      let message = `Form Summery \nName: ${name}\nEmail: ${email}\nAge: ${age}\nAttending with guest: ${attendingWithGuest ? 'Yes' : 'No'}`;
      if (attendingWithGuest) {
        message += `\nGuest Name: ${guestName}`;
      }
      alert(message);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container my-5">
      <div className='row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
              <center><label><b>Objective :</b> Build a form with dynamic fields and simple validation</label></center><br />
              <table className='table'>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`form-control ${errors.name ? 'is-invalid' : ''}`}/>
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td>
                      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className={`form-control ${errors.age ? 'is-invalid' : ''}`} />
                      {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                    </td>
                  </tr>
                  <tr>
                    <td>Are you attending with a guest?:</td>
                    <td>
                      <input type="radio" id="yes" name="guest" value="yes" onChange={() => setAttendingWithGuest(true)} /> Yes
                      <input type="radio" id="no" name="guest" value="no" onChange={() => setAttendingWithGuest(false)} /> No
                    </td>
                  </tr>
                  {attendingWithGuest && (
                    <tr>
                      <td>Guest Name:</td>
                      <td>
                        <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} className={`form-control ${errors.guestName ? 'is-invalid' : ''}`} />
                        {errors.guestName && <div className="invalid-feedback">{errors.guestName}</div>}
                      </td>
                    </tr>
                  )}<br />
                  <button className='btn btn-primary' onClick={submit}>Submit</button>
                </tbody>
                
              </table>
        </div>
        <div className='col-lg-3'></div>
      </div>
        
    </div>
  );
}

export default App;
