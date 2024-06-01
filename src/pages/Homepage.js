import PersonalInfo from '../components/personalInfo';
import Main from '../components/Main';
function Homepage({ step, handleNext }) {
  return (
    <>
      <Main>
        <PersonalInfo handleNext={handleNext} />
      </Main>
    </>
  );
}

export default Homepage;
