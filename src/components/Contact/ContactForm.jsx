import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }
    if (password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters",
      });
      return;
    }

    console.log(email, password);
  };

  return (
    <div className="text-center ">
      <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
        <input
          className=" border border-black mb-3"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
        <input
          className="border border-blue-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
