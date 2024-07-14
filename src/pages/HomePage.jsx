import ContactForm from "../components/Contact/ContactForm";
import EmailForm from "../components/Contact/EmailForm";
import ExtraContactForm from "../components/Contact/ExtraContactForm";
import ReactHookForm from "../components/Contact/ReactHookForm";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-pink-600">Home Page</h1>
      <ContactForm />
      <ExtraContactForm />
      <ReactHookForm />
      <EmailForm />
    </div>
  );
};

export default HomePage;
