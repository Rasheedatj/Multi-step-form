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
  // active states from context to persist it across renders
  const { active, setActive } = useSummary();

  function toggleItem(title) {
    setActive((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }

  return (
    <ul className='add-item-box'>
      {extras.map((extra) => (
        <ExtraItem
          key={extra.title}
          data={extra}
          toggleItem={() => toggleItem(extra.title)}
          isActive={!!active[extra.title]}
        />
      ))}
    </ul>
  );
}

function ExtraItem({ data, toggleItem, isActive }) {
  const { pricing, dispatch } = useSummary();

  function handleToggle() {
    toggleItem();

    if (data.title === 'Online service') {
      dispatch({ type: 'setOnline' });
    }
    if (data.title === 'Larger storage') dispatch({ type: 'setLargerStorage' });
    if (data.title === 'Customizable profile')
      dispatch({ type: 'setCustomizeProfile' });
  }

  return (
    <li
      className={`add-item ${isActive ? 'active' : ''}`}
      onClick={handleToggle}
    >
      <input type='checkbox' checked={isActive} />
      <div>
        <h4>{data.title}</h4>
        <p>{data.subHeading}</p>
      </div>

      <p>{`${pricing === 'monthly' ? data.monthlyPrice : data.yearlyPrice}`}</p>
    </li>
  );
}
