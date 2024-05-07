export default function SideBar() {
  return (
    <aside className='sidebar'>
      <SideItem number={1} title='step 1' text='your info' />
      <SideItem number={2} title='step 2' text='select plan' />
      <SideItem number={3} title='step 3' text='add-ons' />
      <SideItem number={4} title='step 4' text='summary' />
    </aside>
  );
}

function SideItem({ number, title, text }) {
  return (
    <div className='step'>
      <p className='number'>{number}</p>
      <div>
        <p className='title'>{title}</p>
        <h2 className='text'>{text}</h2>
      </div>
    </div>
  );
}
