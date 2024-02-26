import contacts from "./data";
import "./contact.css";

const Contact = () => {
    return (
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Shoot me a message via any of the links below!</p>
        <div className="container contact__container">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon" // Add a class for styling
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </section>
    );
  };

export default Contact;
