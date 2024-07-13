import ContactForm from "../components/Contact/ContactForm";
import ExtraContactForm from "../components/Contact/ExtraContactForm";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-pink-600">Home Page</h1>
      <ContactForm />
      <ExtraContactForm />
    </div>
  );
};

export default HomePage;
