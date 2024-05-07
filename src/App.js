import SideBar from './components/sidebar';
import Main from './components/main';
import { useState } from 'react';
function App() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <div className='container'>
        <SideBar step={step} />
        <Main step={step} setStep={setStep} />
      </div>
    </div>
  );
}

export default App;
