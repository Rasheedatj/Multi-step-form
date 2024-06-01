import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function AddItem({ pricing, dispatch }) {
  return (
    <ul className='add-item-box'>
      {extras.map((extra) => (
        <ExtraItem
          key={extra.title}
          data={extra}
          pricing={pricing}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}

function ExtraItem({ data, dispatch, pricing }) {
  const [active, setActive] = useState(false);

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
