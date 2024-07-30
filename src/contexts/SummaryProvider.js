import { createContext, useContext, useReducer, useState } from 'react';
import { usePlan } from './PlanProvider';

// initial states of isOnline, isLargerStorage, isCustomizeProfile
const initialState = {
  largerStorage: {
    stat: false,
    monthly: 2,
    yearly: 20,
  },

  Online: {
    stat: false,
    monthly: 1,
    yearly: 10,
  },

  customizeProfile: {
    stat: false,
    monthly: 2,
    yearly: 20,
  },
};

// reducer function to handle isOnline, isLargerStorage, isCustomizeProfile
function reducer(state, action) {
  switch (action.type) {
    case 'setOnline':
      return {
        ...state,
        Online: {
          ...state.Online,
          stat: !state.Online.stat,
        },
      };
    case 'setLargerStorage':
      return {
        ...state,
        largerStorage: {
          ...state.largerStorage,
          stat: !state.largerStorage.stat,
        },
      };
    case 'setCustomizeProfile':
      return {
        ...state,
        customizeProfile: {
          ...state.customizeProfile,
          stat: !state.customizeProfile.stat,
        },
      };
    default:
      throw new Error('Unknown action');
  }
}

// Context for summary props
const SummaryContext = createContext();

function SummaryProvider({ children }) {
  // derived pricing and chosenPlan from PlanProvider
  const { pricing, chosenPlan } = usePlan();
  const [active, setActive] = useState({});

  // const [chosenPlan, setChosenPlan] = useState({
  //   name: 'Arcade',
  //   monthly: 9,
  //   yearly: 90,
  // });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { largerStorage, Online, customizeProfile } = state;
  return (
    <SummaryContext.Provider
      value={{
        pricing,
        chosenPlan,
        isOnline: Online,
        isLargerStorage: largerStorage,
        isCustomizeProfile: customizeProfile,
        dispatch,
        active,
        setActive,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
}

// custom hook for consuming SummaryContext
function useSummary() {
  const context = useContext(SummaryContext);
  if (context === undefined) throw new Error('Context was used out of scope');
  return context;
}

export { SummaryProvider, useSummary };
