import React, { useContext, useState } from 'react';
import RegisterContext from '../../context/register/registerContext';

const EmailForm = () => {
  const registerContext = useContext(RegisterContext);

  const { sendEmail } = registerContext;

  const [email, setEmail] = useState({
    subject: '',
    text: '',
  });

  const { text, subject } = email;

  const onChange = (e) => {
    setEmail({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    sendEmail(email);
    setEmail({
      subject: '',
      text: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <label>To:</label>
      <input
        type='text'
        placeholder='To'
        name='to'
        value={to}
        onChange={onChange}
        required
      /> */}
      <label>From:</label>
      <input
        type='text'
        placeholder='From'
        name='subject'
        value={subject}
        onChange={onChange}
        required
      />
      <label>Body:</label>
      <textarea
        rows='3'
        placeholder='Message'
        name='text'
        value={text}
        onChange={onChange}
        required
      />
      <div>
        <input type='Submit' className='btn btn-primary ' value='Send' />
      </div>
    </form>
  );
};

export default EmailForm;
