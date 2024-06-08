import { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

function PlanProvider({ children }) {
  const [pricing, setPricing] = useState('monthly');
  const [chosenPlan, setChosenPlan] = useState({
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
  });
  return (
    <PlanContext.Provider
      value={{ chosenPlan, onChoose: setChosenPlan, pricing, setPricing }}
    >
      {children}
    </PlanContext.Provider>
  );
}

function usePlan() {
  const context = useContext(PlanContext);
  return context;
}

export { PlanProvider, usePlan };
