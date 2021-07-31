import { useState } from 'react';
import Form from './components/Form';
import DisplayText from './components/DisplayText';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 0;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  const onChangeHandler = e => {
    setCount(e.target.value);
  };

  return (
    <>
      <Form
        handleSubmit={submitHandler}
        value={count}
        onChange={onChangeHandler}
      />
      <DisplayText text={text} />
    </>
  );
}

export default App;
