import { usePlan } from '../contexts/PlanProvider';

export default function SideBar() {
  const { currentPath } = usePlan();

  return (
    <aside className='sidebar'>
      <SideItem
        number={1}
        title='step 1'
        text='your info'
        state={currentPath === '/'}
      />
      <SideItem
        number={2}
        title='step 2'
        text='select plan'
        state={currentPath === '/selectplan'}
      />
      <SideItem
        number={3}
        title='step 3'
        text='add-ons'
        state={currentPath === '/pickaddson'}
      />
      <SideItem
        number={4}
        title='step 4'
        text='summary'
        state={currentPath === '/finishingup' || currentPath === '/thanks'}
      />
    </aside>
  );
}

function SideItem({ number, title, text, state }) {
  return (
    <div className='step'>
      <p className={`number ${state ? 'active' : ''}`}>{number}</p>
      <div>
        <p className='title'>{title}</p>
        <h2 className='text'>{text}</h2>
      </div>
    </div>
  );
}
