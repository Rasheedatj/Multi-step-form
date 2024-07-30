import { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducer } from 'react';

const PlanContext = createContext();

function PlanProvider({ children }) {
  // Plan functions
  const [pricing, setPricing] = useState('monthly');
  const [chosenPlan, setChosenPlan] = useState({
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
  });

  // step count
  const location = useLocation();
  const currentPath = location.pathname;

  //store form data for homepage from a parent component
  const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'setName':
        return { ...state, name: action.payload };
      case 'setEmail':
        return { ...state, email: action.payload };
      case 'setPhoneNumber':
        return { ...state, phoneNumber: action.payload };
      default:
        throw new Error('Action unkown');
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email, phoneNumber } = state;

  return (
    <PlanContext.Provider
      value={{
        chosenPlan,
        onChoose: setChosenPlan,
        pricing,
        setPricing,
        currentPath,
        name,
        email,
        dispatch,
        phoneNumber,
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
