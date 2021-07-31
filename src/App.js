import { useState } from 'react';
import Form from './components/Form';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    console.log('submitted');
    console.log(count);
  };

  const onChangeHandler = e => {
    setCount(e.target.value);
  };

  return (
    <Form
      handleSubmit={submitHandler}
      value={count}
      onChange={onChangeHandler}
    />
  );
}

export default App;
