import { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SelectPlan from './pages/SelectPlan';
import PickAddsOn from './pages/PickAddsOn';
import FinishingUp from './pages/FinishingUp';
import Thanks from './pages/Thanks';
import SideBar from './components/Sidebar';

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

function App() {
  const [step, setStep] = useState(1);
  const [pricing, setPricing] = useState('monthly');
  const [chosenPlan, setChosenPlan] = useState({
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { largerStorage, Online, customizeProfile } = state;

  function handleNext() {
    if (step < 5) setStep((s) => s + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <div className='container'>
      <SideBar />
      <BrowserRouter>
        <Routes>
          {/* Homepage route */}
          <Route path='/' element={<Homepage step={step} />} />
          {/* select plan route */}

          <Route
            path='selectplan'
            element={
              <SelectPlan
                step={step}
                onSetPricing={setPricing}
                pricing={pricing}
                setChosenPlan={setChosenPlan}
                chosenPlan={chosenPlan}
              />
            }
          />
          {/* pick adds on route */}

          <Route
            path='pickaddson'
            element={<PickAddsOn pricing={pricing} dispatch={dispatch} />}
          />

          {/* sumary route */}

          <Route
            path='finishingup'
            element={
              <FinishingUp
                pricing={pricing}
                chosenPlan={chosenPlan}
                isOnline={Online}
                isLargerStorage={largerStorage}
                isCustomizeProfile={customizeProfile}
              />
            }
          />

          {/* thanks route */}

          <Route path='thanks' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
