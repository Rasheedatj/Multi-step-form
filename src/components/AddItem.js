import { useState } from 'react';
import { useSummary } from '../contexts/SummaryProvider';

const extras = [
  {
    title: 'Online service',
    subHeading: 'Access to multiplayer games',
    monthlyPrice: '+$1/mo',
    yearlyPrice: '+10/yr',
  },
  {
    title: 'Larger storage',
    subHeading: 'Extra 1TB of cloud save',
    monthlyPrice: '+$2/mo',
    yearlyPrice: '+20/yr',
  },
  {
    title: 'Customizable profile',
    subHeading: 'Custom theme on your profile',
    monthlyPrice: '+$2/mo',
    yearlyPrice: '+20/yr',
  },
];

export default function AddItem() {
  return (
    <ul className='add-item-box'>
      {extras.map((extra) => (
        <ExtraItem key={extra.title} data={extra} />
      ))}
    </ul>
  );
}

function ExtraItem({ data }) {
  const [active, setActive] = useState(false);
  const { pricing, dispatch } = useSummary();

  function handleToggle() {
    setActive((a) => !a);
    if (data.title === 'Online service') {
      dispatch({ type: 'setOnline' });
    }
    if (data.title === 'Larger storage') dispatch({ type: 'setLargerStorage' });
    if (data.title === 'Customizable profile')
      dispatch({ type: 'setCustomizeProfile' });
  }
  return (
    <li className={`add-item ${active ? 'active' : ''}`}>
      <input type='checkbox' onChange={handleToggle} />
      <div>
        <h4>{data.title}</h4>
        <p>{data.subHeading}</p>
      </div>

      <p>{`${pricing === 'monthly' ? data.monthlyPrice : data.yearlyPrice}`}</p>
    </li>
  );
}
