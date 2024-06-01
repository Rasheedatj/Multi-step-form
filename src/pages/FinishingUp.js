import Main from '../components/Main';
import Summary from '../components/Summary';
function FinishingUp({
  pricing,
  chosenPlan,
  isOnline,
  isLargerStorage,
  isCustomizeProfile,
}) {
  return (
    <>
      <Main>
        <Summary
          pricing={pricing}
          chosenPlan={chosenPlan}
          isOnline={isOnline}
          isLargerStorage={isLargerStorage}
          isCustomizeProfile={isCustomizeProfile}
        />
      </Main>
    </>
  );
}

export default FinishingUp;
