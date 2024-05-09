import Header from './header';
import Footer from './footer';

export default function Summary({
  onNext,
  onPrevious,
  pricing,
  chosenPlan,
  isOnline,
  isLargerStorage,
  isCustomizeProfile,
  onStep,
}) {
  const planCost =
    pricing === 'monthly' ? chosenPlan.monthly : chosenPlan.yearly;

  const onlineCost = isOnline.stat ? isOnline[pricing] : 0;
  const storageCost = isLargerStorage.stat ? isLargerStorage[pricing] : 0;
  const profileCost = isCustomizeProfile.stat ? isCustomizeProfile[pricing] : 0;
  const additionalCost = onlineCost + storageCost + profileCost;

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
            <a
              href='/'
              onClick={(e) => {
                e.preventDefault();
                onStep(2);
              }}
            >
              Change
            </a>
          </div>
          <h4>
            ${pricing === 'monthly' ? `${planCost}/mo` : `${planCost}/yr`}
          </h4>
        </div>
        <div className='sum-add'>
          {isOnline.stat && (
            <div>
              <h3>Online service</h3>
              <p>
                +${isOnline[pricing]}/{pricing === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          )}

          {isLargerStorage.stat && (
            <div>
              <h3>Larger storage</h3>
              <p>
                +${isLargerStorage[pricing]}/
                {pricing === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          )}

          {isCustomizeProfile.stat && (
            <div>
              <h3>Customizable profile</h3>
              <p>
                +${isCustomizeProfile[pricing]}/
                {pricing === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className='total'>
        <p>Total( {pricing === 'monthly' ? 'per month' : 'per year'})</p>
        <h3>
          +${planCost + additionalCost}/{pricing === 'monthly' ? 'mo' : 'yr'}
        </h3>
      </div>
      <Footer
        onNext={onNext}
        onPrevious={onPrevious}
        bgColor='hsl(243, 100%, 62%)'
      />
    </div>
  );
}
