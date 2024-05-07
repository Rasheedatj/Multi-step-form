import Header from './header';
import Footer from './footer';
import AddItem from './add.item';

export default function AddOns({ onNext, onPrevious, pricing }) {
  return (
    <div className='box'>
      <Header
        heading='Pick add-ons'
        subHeading='Add-ons help enhance your gaming experience'
      />
      <AddItem pricing={pricing} />

      <Footer
        onNext={onNext}
        onPrevious={onPrevious}
        bgColor='hsl(213, 96%, 18%)'
      />
    </div>
  );
}
