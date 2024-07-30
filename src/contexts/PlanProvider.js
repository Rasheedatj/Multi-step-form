import { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PlanContext = createContext();

function PlanProvider({ children }) {
  const [pricing, setPricing] = useState('monthly');
  const [chosenPlan, setChosenPlan] = useState({
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
  });
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <PlanContext.Provider
      value={{
        chosenPlan,
        onChoose: setChosenPlan,
        pricing,
        setPricing,
        currentPath,
      }}
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
