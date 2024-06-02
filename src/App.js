import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SelectPlan from './pages/SelectPlan';
import PickAddsOn from './pages/PickAddsOn';
import FinishingUp from './pages/FinishingUp';
import Thanks from './pages/Thanks';
import SideBar from './components/Sidebar';
import SummaryProvider from './components/SummaryProvider';
import PlanProvider from './components/PlanProvider';

function App() {
  const [step, setStep] = useState(1);

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
          <Route path='/' element={<Homepage step={step} />} />

          <PlanProvider>
            <Route path='selectplan' element={<SelectPlan step={step} />} />
          </PlanProvider>

          <SummaryProvider>
            <Route path='pickaddson' element={<PickAddsOn />} />
            <Route path='finishingup' element={<FinishingUp />} />
          </SummaryProvider>

          <Route path='thanks' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
