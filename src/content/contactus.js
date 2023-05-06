import React, { useState } from "react";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/information", {
      method: "post",
      body: JSON.stringify({ name, email, phone, companyname, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved successfully");
      setEmail("");
      setName("");
      setPhone("");
      setCompanyname("");
      setMessage("");
    }
  };
  return (
    <div className="form-contactus">
      <h1>Get In Touch(Let Information)</h1>
      <form>
        <label>
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <p>Email Address</p>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Phone Number</p>
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="10"
          />
        </label>
        <label>
          <p>Your Company Name</p>
          <input
            type="text"
            placeholder="Company Name"
            value={companyname}
            onChange={(e) => setCompanyname(e.target.value)}
          />
        </label>
        <label>
          <p>Message</p>
          <textarea
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <label>
          <input
            type="submit"
            value="Send Information"
            onClick={handleOnSubmit}
          />
        </label>
      </form>
    </div>
  );
};

export default Contactus;
