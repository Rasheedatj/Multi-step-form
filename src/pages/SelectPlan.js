import Main from '../components/Main';
import PlanCom from '../components/PlanCom';

function SelectPlan({
  step,
  onSetPricing,
  pricing,
  setChosenPlan,
  chosenPlan,
}) {
  return (
    <>
      <Main>
        <PlanCom
          onSetPricing={onSetPricing}
          pricing={pricing}
          setChosenPlan={setChosenPlan}
          chosenPlan={chosenPlan}
        />
      </Main>
    </>
  );
}

export default SelectPlan;
