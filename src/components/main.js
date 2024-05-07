import { useState } from 'react';
import PersonalInfo from './personalInfo';
import SelectPlan from './selectPlan';
import AddOns from './add-ons';
import Thanks from './thanks';

export default function Main({ step, setStep }) {
  const [pricing, setPricing] = useState('monthly');

  function handleNext() {
    if (step < 5) setStep((s) => s + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <main>
      {step === 1 && <PersonalInfo onNext={handleNext} />}
      {step === 2 && (
        <SelectPlan
          onNext={handleNext}
          onPrevious={handlePrevious}
          pricing={pricing}
          onSetPricing={setPricing}
        />
      )}
      {step === 3 && (
        <AddOns
          onNext={handleNext}
          onPrevious={handlePrevious}
          pricing={pricing}
        />
      )}
      {step === 4 && <Thanks />}
    </main>
  );
}
