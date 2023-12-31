import React, { useEffect, useState } from "react";
import PjsCards from "../Characters/Pjs-Cards/PjsCards";
import { Filter } from "../Filter/Filter";
import logo from "/Logo.png";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [texto, setTexto] = useState("");
  const [page, setPage] = useState(1);

  const NavPage = (props) => {
    const setPageScroll1 = () => {
      window.scrollTo(0, 0);
      props.setPage(props.page - 1);
    };

    const setPageScroll2 = () => {
      window.scrollTo(0, 0);
      props.setPage(props.page + 1);
    };

    const firstPage = () => {
      window.scrollTo(0, 0);
      props.setPage(1);
    };

    return (
      <div className="nav-page">
        {page <= 0 || page === 1 ? (
          <button>First Page</button>
        ) : (
          <button className="" onClick={() => setPageScroll1()}>
            Page {props.page - 1}
          </button>
        )}

        <button className="" onClick={() => setPageScroll2()}>
          Page {props.page + 1}
        </button>
        <button className="" onClick={() => firstPage()}>
          Back to page 1
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
        <img href="#" src={logo} alt="Rick and Morty Logo" />
      </div>

      {/* <Filter texto={texto} setTexto={setTexto} /> */}
      <NavPage setPage={setPage} page={page} />
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
