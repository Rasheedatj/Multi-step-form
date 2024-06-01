import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'setPhoneNumber':
      return { ...state, phoneNumber: action.payload };
    default:
      throw new Error('Action unkown');
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email, phoneNumber } = state;
  return (
    <form>
      <Input
        type='text'
        placeholder='e.g Stephen King'
        value={name}
        dispatch={dispatch}
        dispatchType={'setName'}
      >
        Name
      </Input>
      <Input
        type='email'
        placeholder='e.g stephenking@gmail.com'
        value={email}
        dispatch={dispatch}
        dispatchType={'setEmail'}
      >
        Email Address
      </Input>
      <Input
        type='tel'
        placeholder='e.g +1 234 567 890'
        value={phoneNumber}
        dispatch={dispatch}
        dispatchType={'setPhoneNumber'}
      >
        Phone Number
      </Input>
    </form>
  );
}

function Input({
  type,
  placeholder,
  children,
  inputValue,
  dispatch,
  dispatchType,
}) {
  return (
    <div className='form-input'>
      <label
        style={{
          color: 'hsl(213, 96%, 18%)',
          fontWeight: '500',
          fontSize: '14px',
        }}
        htmlFor={children}
      >
        {children}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) =>
          dispatch({ type: dispatchType, payload: e.target.value })
        }
      />
    </div>
  );
}
