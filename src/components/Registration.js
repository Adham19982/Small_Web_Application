import { useState } from "react";
import "./stylesheet.css";

function App() {


  const [email,setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const emailValidation = () =>{
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-.com]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(regEx.test(email)){
      setMessage("Email Is Valid");
    }else if(!regEx.test(email)&& email!==""){
      setMessage("Email Is Not Valid!");
    }else{
      setMessage("Enter Email!");
    }
  };

  const handleOnChange = (e) =>{
    setEmail(e.target.value);
  };



  const [formInput, setFormInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      password: "",
      confirmPassword: "",
    };

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty, should be at least 7 characters with 1 capital letter, one number, and one special character"
      });
      return
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty, should be at least 7 characters with 1 capital letter, one number, and one special character",
      });
      return
    }
    setFormError(inputError);
  };

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Registration Form</h4>
        </div>

        <div className="card-body">
          <form onSubmit={validateFormInput}>
            <p className="label">Email</p>
            <input
              value={email}
              onChange={handleOnChange}
              name="email"
              type="text"
              className="input"
              placeholder="Enter Email"
            />
            <p className="emailMessage">{message}</p>
            <p className="error-message">{formError.email}</p>

            <p className="label">Name</p>
            <input
              required
              type="text"
              className="input"
              placeholder="Name"
            />

            <p className="label">Password</p>
            <input
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{7,}$"
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <p className="error-message">{formError.password}</p>

            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
              
            />
            <p className="error-message">{formError.confirmPassword}</p>

            <input onClick={emailValidation} type="submit" className="btn" value="Submit"/>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;