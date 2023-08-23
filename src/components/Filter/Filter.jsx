import React from "react";

export const Filter = ({ texto, setTexto }) => {
  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(texto);
  };

  return (
    <section className="filter">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Character Name"
          value={texto}
          onChange={handleInputChange}
        ></input>
      </form>
    </section>
  );
};
