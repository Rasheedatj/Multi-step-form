import { useState } from 'react';
import PersonalInfo from './personalInfo';
import SelectPlan from './selectPlan';
import AddOns from './add-ons';
import Thanks from './thanks';
import Summary from './summary';

export default function Main({ step, setStep }) {
  const [pricing, setPricing] = useState('monthly');
  const [chosenPlan, setChosenPlan] = useState({
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
  });

  const [isOnline, setOnline] = useState({
    stat: false,
    monthly: 1,
    yearly: 10,
  });
  const [isLargerStorage, setLargerStorage] = useState({
    stat: false,
    monthly: 2,
    yearly: 20,
  });
  const [isCustomizeProfile, setCustomizeProfile] = useState({
    stat: false,
    monthly: 2,
    yearly: 20,
  });

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
          setChosenPlan={setChosenPlan}
        />
      )}
      {step === 3 && (
        <AddOns
          onNext={handleNext}
          onPrevious={handlePrevious}
          pricing={pricing}
          onOnline={setOnline}
          onLargerStorage={setLargerStorage}
          onCustomizeProfile={setCustomizeProfile}
        />
      )}
      {step === 4 && (
        <Summary
          onNext={handleNext}
          onPrevious={handlePrevious}
          pricing={pricing}
          chosenPlan={chosenPlan}
          isOnline={isOnline}
          isLargerStorage={isLargerStorage}
          isCustomizeProfile={isCustomizeProfile}
          onStep={setStep}
        />
      )}
      {step === 5 && <Thanks />}
    </main>
  );
}
