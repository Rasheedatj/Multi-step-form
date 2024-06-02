import { Link } from 'react-router-dom';
import Header from './Header';
import Form from './Form';

export default function PersonalInfo() {
  return (
    <div className='box'>
      <Header
        heading='personal info'
        subHeading='Please provide your name, email address, and phone number.'
      />
      <Form />

      <footer>
        <Link to='/selectplan'>
          <button
            style={{
              backgroundColor: 'hsl(213, 96%, 18%)',
              color: 'hsl(0, 0%, 100%)',
            }}
          
          >
            Next
          </button>
        </Link>
      </footer>
    </div>
  );
}
