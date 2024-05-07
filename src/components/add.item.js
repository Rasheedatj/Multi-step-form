import { useState } from 'react';

export default function AddItem({ pricing }) {
  return (
    <div className='add-item-box'>
      <Item
        title='Online service'
        subHeading='Access to multiplayer games'
        price='+$1/mo'
        price2='+10/yr'
        pricing={pricing}
      />
      <Item
        title='Larger storage'
        subHeading='Extra 1TB of cloud save'
        price='+$2/mo'
        price2='+20/yr'
        pricing={pricing}
      />
      <Item
        title='Customizable profile'
        subHeading='Custom theme on your profile'
        price='+$2/mo'
        price2='+20/yr'
        pricing={pricing}

        // onToggle={handleToggle}
        // active={active}
      />
    </div>
  );
}

function Item({ title, subHeading, price, price2, pricing }) {
  const [active, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!active);
  }
  return (
    <div className={`add-item ${active ? 'active' : ''}`}>
      <input type='checkbox' onChange={handleToggle} />
      <div>
        <h4>{title}</h4>
        <p>{subHeading}</p>
      </div>

      <p>{`${pricing === 'monthly' ? price : price2}`}</p>
    </div>
  );
}
