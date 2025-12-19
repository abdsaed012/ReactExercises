
import Form from './Form';

const ContactForm = () => {
  const { values, handleChange } = Form({
    name: '',
    email: '',
    Phone: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', values);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            name="Phone"
            value={values.Phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
