function DisplayText(props) {
  return (
    <article className='lorem-text section-center'>
      {props.text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </article>
  );
}

export default DisplayText;
