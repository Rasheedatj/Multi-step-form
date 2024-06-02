import Header from './Header';
import Plan from './Plan';
import Footer from './Footer';

export default function PlanCom() {
  return (
    <div className='box'>
      <Header
        heading='Select your plan'
        subHeading='You have the option of monthly or yearly billing'
      />
      <Plan />

      <Footer nextPage='/pickaddson' prevPage='/' />
    </div>
  );
}
