export default function Form() {
  return (
    <form>
      <Input type='text' placeholder='e.g Stephen King' label='Name' />
      <Input
        type='email'
        placeholder='e.g stephenking@gmail.com'
        label='Email Address'
      />
      <Input type='tel' placeholder='e.g +1 234 567 890' label='Phone Number' />
    </form>
  );
}

function Input({ type, placeholder, label }) {
  return (
    <div className='form-input'>
      <label
        style={{
          color: 'hsl(213, 96%, 18%)',
          fontWeight: '500',
          fontSize: '14px',
        }}
        htmlFor={label}
      >
        {label}
      </label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
