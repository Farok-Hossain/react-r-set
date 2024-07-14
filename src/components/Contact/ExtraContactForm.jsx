import { useState } from "react";

const ExtraContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitt = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };
  return (
    <div className="mt-20 ml-6">
      <form action="" onSubmit={handleSubmitt}>
        <input
          className="border border-blue-950 mr-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-blue-950 mr-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-blue-950 mr-3"
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExtraContactForm;
