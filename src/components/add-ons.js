import Header from './header';
import Button from './button';

export default function AddOns() {
  return (
    <div className='box'>
      <Header
        heading='Pick add-ons'
        subHeading='Add-ons help enhance your gaming experience'
      />

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
