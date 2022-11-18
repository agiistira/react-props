const Cards = (props) => {
  return (
    <>
      <section
        style={{
          borderStyle: "solid",
          padding: "20px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </section>
    </>
  );
};

export default Cards;
