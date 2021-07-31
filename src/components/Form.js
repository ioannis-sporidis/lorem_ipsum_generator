function Form(props) {
  return (
    <section className='srction-senter'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={props.handleSubmit}>
        <label htmlFor='amount'>How many paragraphs?</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={props.value}
          onChange={props.onChange}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
    </section>
  );
}

export default Form;
