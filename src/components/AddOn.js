import Header from './Header';
import Footer from './Footer';
import AddItem from './AddItem';

export default function AddOns() {
  return (
    <div className='box'>
      <Header
        heading='Pick add-ons'
        subHeading='Add-ons help enhance your gaming experience'
      />

      <AddItem />

      <Footer nextPage='/finishingup' prevPage='/selectplan' />
    </div>
  );
}
