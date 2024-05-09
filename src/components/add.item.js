import { useState } from 'react';

export default function AddItem({
  pricing,
  onOnline,
  onLargerStorage,
  onCustomizeProfile,
}) {
  return (
    <ul className='add-item-box'>
      <Item
        title='Online service'
        subHeading='Access to multiplayer games'
        price='+$1/mo'
        price2='+10/yr'
        pricing={pricing}
        onOnline={onOnline}
      />
      <Item
        title='Larger storage'
        subHeading='Extra 1TB of cloud save'
        price='+$2/mo'
        price2='+20/yr'
        pricing={pricing}
        onLargerStorage={onLargerStorage}
      />
      <Item
        title='Customizable profile'
        subHeading='Custom theme on your profile'
        price='+$2/mo'
        price2='+20/yr'
        pricing={pricing}
        onCustomizeProfile={onCustomizeProfile}
      />
    </ul>
  );
}

function Item({
  title,
  subHeading,
  price,
  price2,
  pricing,
  onOnline,
  onLargerStorage,
  onCustomizeProfile,
}) {
  const [active, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!active);
    if (title === 'Online service')
      onOnline((isOnline) => ({ ...isOnline, stat: !isOnline.stat }));
    if (title === 'Larger storage')
      onLargerStorage((isLargerStorage) => ({
        ...isLargerStorage,
        stat: !isLargerStorage.stat,
      }));
    if (title === 'Customizable profile')
      onCustomizeProfile((isCustomizeProfile) => ({
        ...isCustomizeProfile,
        stat: !isCustomizeProfile.stat,
      }));
  }

  return (
    <li className={`add-item ${active ? 'active' : ''}`}>
      <input type='checkbox' onChange={handleToggle} />
      <div>
        <h4>{title}</h4>
        <p>{subHeading}</p>
      </div>

      <p>{`${pricing === 'monthly' ? price : price2}`}</p>
    </li>
  );
}
