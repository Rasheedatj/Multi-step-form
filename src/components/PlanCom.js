import Header from './Header';
import Plan from './Plan';
import Footer from './Footer';

export default function PlanCom({
  onSetPricing,
  pricing,
  setChosenPlan,
  chosenPlan,
}) {
  return (
    <div className='box'>
      <Header
        heading='Select your plan'
        subHeading='You have the option of monthly or yearly billing'
      />
      <Plan
        pricing={pricing}
        setPricing={onSetPricing}
        setChosenPlan={setChosenPlan}
        chosenPlan={chosenPlan}
      />

      <Footer nextPage='/pickaddson' prevPage='/' />
    </div>
  );
}
