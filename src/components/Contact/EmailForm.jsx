import { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_nqwj2yc", "template_3s5arza", form.current, {
        publicKey: "9m_M2q-PKyPfKs-r5",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-1/3 ml-6 mt-20 mb-30"
      >
        <label>Name</label>
        <input className="border border-pink-800" type="text" name="name" />
        <label>Email</label>
        <input className="border border-pink-800" type="email" name="email" />
        <label>Message</label>
        <textarea
          className="border border-b-orange-500 mb-4 border-pink-800"
          name="message"
        />
        <input className="border border-pink-800" type="submit" value="Send" />
      </form>
    </div>
  );
};
export default EmailForm;
