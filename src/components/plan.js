import { useState } from 'react';

const subscription = [
  {
    photoName: '/assets/images/icon-pro.svg',
    planName: 'Arcade',
    monthly: '$9/mo',
    yearly: '$90/yr',
  },
  {
    photoName: '/assets/images/icon-advanced.svg',
    planName: 'Advanced',
    monthly: '$12/mo',
    yearly: '$120/yr',
  },
  {
    photoName: '/assets/images/icon-pro.svg',
    planName: 'Pro',
    monthly: '$15/mo',
    yearly: '$150/yr',
  },
];

export default function Plan({ pricing, setPricing }) {
  return (
    <div>
      <PlanItem data={subscription} pricing={pricing} />

      <div className='sub-type'>
        <h4
          style={{ color: pricing === 'monthly' ? 'hsl(213, 96%, 18%)' : '' }}
        >
          Monthly
        </h4>
        <input
          type='checkbox'
          onChange={() =>
            setPricing(pricing === 'monthly' ? 'yearly' : 'monthly')
          }
        />
        <h4 style={{ color: pricing === 'yearly' ? 'hsl(213, 96%, 18%)' : '' }}>
          Yearly
        </h4>
      </div>
    </div>
  );
}

function PlanItem({ data, pricing }) {
  const [curActive, setActive] = useState(0);

  return (
    <div className='plan'>
      {' '}
      {data.map((item, i) => (
        <Item
          data={item}
          key={item.planName}
          num={i}
          curActive={curActive}
          onActive={setActive}
          pricing={pricing}
        />
      ))}
    </div>
  );
}

function Item({ data, curActive, onActive, num, pricing }) {
  const active = num === curActive;
  function handleToggle() {
    onActive(num);
  }

  return (
    <div onClick={handleToggle} className={active ? 'active' : ''}>
      <img src={data.photoName} alt={data.planName} />

      <div className='pricing'>
        <h3>{data.planName}</h3>
        {pricing === 'monthly' ? (
          <p>{data.monthly}</p>
        ) : (
          <div className='yearly'>
            <p>{data.yearly}</p> <h4>2 months free</h4>
          </div>
        )}
      </div>
    </div>
  );
}
