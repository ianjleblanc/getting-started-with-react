import { useState } from "react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
      firstName: "enter name here",
      lastName: "",
      password: "",
      age: "",
      subscription: false,
    });
  
    function handleChangeInput(event) {
      let newVal = event.target.value;
  
      // If input is a checkbox, use event.target.checked prop instead
      if (event.target.type === "checkbox") newVal = event.target.checked;
  
      setFormData({
        ...formData,
        [event.target.name]: newVal,
      });
    }
  function handleSubmit(event) {
      event.preventDefault();
      console.log("Form submitted", formData);
    }

    const { firstName, lastName, password, age, subscription } = formData;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="register-first-name">First:</label>
          <input type="text" name="firstName" id="register-first-name" value={firstName} onChange={handleChangeInput} />
        </div>
        <div>
          <label htmlFor="register-last-name">Last:</label>
          <input type="text" name="lastName" id="register-last-name" value={lastName} onChange={handleChangeInput} />
          { lastName.length > 0 && lastName.length < 5 && <div className="text-error">Name must be more than 5 chars!</div> }
        </div>
        <div>
          <label htmlFor="register-password">Password:</label>
          <input type="password" name="password" id="register-password" value={password} onChange={handleChangeInput} />
        </div>
        <div>
          <label htmlFor="register-age">Age:</label>
          <select required name="age" id="register-age" value={age} onChange={handleChangeInput}>
            <option value="">--- SELECT AGE ---</option>
            <option value="under-18">Under 18</option>
            <option value="18-34">18-34</option>
            <option value="35-50">35-50</option>
          </select>
        </div>
        <div>
          <input type="checkbox" name="subscription" id="register-subscription" value={subscription} onChange={handleChangeInput} />
          <label htmlFor="register-subscription">Subscribe?</label>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Submit</button>
          <button className="btn btn-danger" type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}