import AddOns from '../components/AddOn';
import Main from '../components/Main';

function PickAddsOn({ pricing, dispatch }) {
  return (
    <>
      <Main>
        <AddOns pricing={pricing} dispatch={dispatch} />
      </Main>
    </>
  );
}

export default PickAddsOn;
