function Form(props) {
  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <h4>Select 1 - 8 paragraphs</h4>
      <form className='lorem-form' onSubmit={props.handleSubmit}>
        <label htmlFor='amount'>How many paragraphs?</label>
        <input
          type='number'
          name='amount'
          min='0'
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
