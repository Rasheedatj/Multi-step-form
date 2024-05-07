import Header from './header';
import Footer from './footer';

export default function Summary({ onNext, onPrevious, pricing, chosenPlan }) {
  return (
    <div className='box'>
      <Header
        heading='Finishing up'
        subHeading='Double-check everything looks okay before confirming'
      />
      <div className='summary'>
        <div className='sum-plan'>
          <div>
            <h1 style={{ textTransform: 'capitalize' }}>
              {chosenPlan.name} ({pricing})
            </h1>
            <a href='/'>Change</a>
          </div>
          <h4>
            $
            {pricing === 'monthly'
              ? `${chosenPlan.monthly}/mo`
              : `${chosenPlan.yearly}/yr`}
          </h4>
        </div>
        <div className='sum-add'>
          <div>
            <h3>Online service</h3>
            <p>+$1/mo</p>
          </div>

          <div>
            <h3>Larger storage</h3>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>

      <div className='total'>
        <p>Total( {pricing === 'monthly' ? 'per month' : 'per year'})</p>
        <h3>+$12/{pricing === 'monthly' ? 'mo' : 'yr'}</h3>
      </div>
      <Footer
        onNext={onNext}
        onPrevious={onPrevious}
        bgColor='hsl(243, 100%, 62%)'
      />
    </div>
  );
}
