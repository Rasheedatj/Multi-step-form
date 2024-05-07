import Header from './header';
import Plan from './plan';
import Button from './button';

export default function SelectPlan() {
  return (
    <div className='box'>
      <Header
        heading='Select your plan'
        subHeading='You have the option of monthly or yearly billing'
      />
      <Plan />
      <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button bgColor='transparent' color='hsl(231, 11%, 63%)'>
          Go Back
        </Button>
        <Button bgColor='hsl(213, 96%, 18%)' color='#fff'>
          Next Step
        </Button>
      </footer>
    </div>
  );
}
