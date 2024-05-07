import Header from './header';
import Plan from './plan';
import Footer from './footer';

export default function SelectPlan({
  onNext,
  onPrevious,
  onSetPricing,
  pricing,
}) {
  return (
    <div className='box'>
      <Header
        heading='Select your plan'
        subHeading='You have the option of monthly or yearly billing'
      />
      <Plan pricing={pricing} setPricing={onSetPricing} />
      <Footer
        onNext={onNext}
        onPrevious={onPrevious}
        bgColor='hsl(213, 96%, 18%)'
      />
    </div>
  );
}
