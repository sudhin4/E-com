import '../Contact/Contact.css'

function Contact() {
  return (
    <>
      <div className="whole_content_contact">
        <div>
          <h1 className="connect_with_us">Get connect with us..</h1>
          <input
            type="email"
            placeholder="example@gamil.com"
            className="email_inp"
          />
        </div>
        <div className='btn_Contact_sec'>
          <button className="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
export default Contact;
