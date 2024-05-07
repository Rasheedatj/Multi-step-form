import Header from './header';
import Form from './form';
import Button from './button';

export default function PersonalInfo({ onNext }) {
  return (
    <div className='box'>
      <Header
        heading='personal info'
        subHeading='Please provide your name, email address, and phone number.'
      />
      <Form />

      <footer>
        <Button
          bgColor='hsl(213, 96%, 18%)'
          color='hsl(0, 0%, 100%)'
          onClickNext={onNext}
          direction='next'
        >
          Next Step
        </Button>
      </footer>
    </div>
  );
}
