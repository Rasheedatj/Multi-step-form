export default function SideBar({ step }) {
  return (
    <aside className='sidebar'>
      <SideItem number={1} title='step 1' text='your info' step={step} />
      <SideItem number={2} title='step 2' text='select plan' step={step} />
      <SideItem number={3} title='step 3' text='add-ons' step={step} />
      <SideItem number={4} title='step 4' text='summary' step={step} />
    </aside>
  );
}

function SideItem({ number, title, text, step }) {
  return (
    <div className='step'>
      <p className={`number ${step === number ? 'active' : ''}`}>{number}</p>
      <div>
        <p className='title'>{title}</p>
        <h2 className='text'>{text}</h2>
      </div>
    </div>
  );
}
