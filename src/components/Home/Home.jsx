import React, { useEffect, useState } from "react";
import PjsCards from "../Characters/Pjs-Cards/PjsCards";
import { Filter } from "../Filter/Filter";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [texto, setTexto] = useState("");
  const [page, setPage] = useState(1);

  const NavPage = (props) => {
    return (
      <div className="nav-page">
        {page <= 0 || page === 1 ? (
          <button>First Page</button>
        ) : (
          <button className="" onClick={() => props.setPage(props.page - 1)}>
            Page {props.page - 1}
          </button>
        )}

        <button className="" onClick={() => props.setPage(props.page + 1)}>
          Page {props.page + 1}
        </button>
      </div>
    );
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);

  const charactersFiltered = characters.filter((character) =>
    character.name.toLowerCase().includes(texto.toLowerCase())
  );

  return (
    <>
      <div className="img-logo">
        <img
          href="#"
          src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png"
        />
      </div>
      <Filter texto={texto} setTexto={setTexto} />
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <PjsCards texto={texto} characters={charactersFiltered} />
      )}
      <NavPage setPage={setPage} page={page} />
    </>
  );
};

export default Home;
