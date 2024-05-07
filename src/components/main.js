import { useState } from 'react';
import PersonalInfo from './personalInfo';
import SelectPlan from './selectPlan';
import AddOns from './add-ons';

export default function Main() {
  const [step, setStep] = useState(3);
  return (
    <main>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <SelectPlan />}
      {step === 3 && <AddOns />}
    </main>
  );
}
