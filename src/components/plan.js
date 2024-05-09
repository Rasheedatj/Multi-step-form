import { useState } from 'react';

const subscription = [
  {
    photoName: '/assets/images/icon-pro.svg',
    planName: 'Arcade',
    monthly: 9,
    yearly: 90,
  },
  {
    photoName: '/assets/images/icon-advanced.svg',
    planName: 'Advanced',
    monthly: 12,
    yearly: 120,
  },
  {
    photoName: '/assets/images/icon-pro.svg',
    planName: 'Pro',
    monthly: 15,
    yearly: 150,
  },
];

export default function Plan({ pricing, setPricing, setChosenPlan }) {
  return (
    <div>
      <PlanItem
        data={subscription}
        pricing={pricing}
        onChoose={setChosenPlan}
      />

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

function PlanItem({ data, pricing, onChoose }) {
  const [curActive, setActive] = useState(0);

  return (
    <ul className='plan'>
      {data.map((item, i) => (
        <Item
          data={item}
          key={item.planName}
          num={i}
          curActive={curActive}
          onActive={setActive}
          pricing={pricing}
          onChoose={onChoose}
        />
      ))}
    </ul>
  );
}

function Item({ data, curActive, onActive, num, pricing, onChoose }) {
  const active = num === curActive;

  function handleToggle() {
    onActive(num);
    onChoose({
      name: data.planName,
      monthly: data.monthly,
      yearly: data.yearly,
    });
  }

  return (
    <li onClick={handleToggle} className={active ? 'active' : ''}>
      <img src={data.photoName} alt={data.planName} />

      <div className='pricing'>
        <h3>{data.planName}</h3>
        {pricing === 'monthly' ? (
          <p>${data.monthly}/mo</p>
        ) : (
          <div className='yearly'>
            <p>${data.yearly}/yr</p> <h4>2 months free</h4>
          </div>
        )}
      </div>
    </li>
  );
}
