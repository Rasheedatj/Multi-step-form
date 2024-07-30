import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SelectPlan from './pages/SelectPlan';
import PickAddsOn from './pages/PickAddsOn';
import FinishingUp from './pages/FinishingUp';
import Thanks from './pages/Thanks';
import SideBar from './components/Sidebar';
import { SummaryProvider } from './contexts/SummaryProvider';
import { PlanProvider } from './contexts/PlanProvider';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <PlanProvider>
          <SideBar />
          <SummaryProvider>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='selectplan' element={<SelectPlan />} />
              <Route path='pickaddson' element={<PickAddsOn />} />
              <Route path='finishingup' element={<FinishingUp />} />
              <Route path='thanks' element={<Thanks />} />
            </Routes>
          </SummaryProvider>
        </PlanProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
