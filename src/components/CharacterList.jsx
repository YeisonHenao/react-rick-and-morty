import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props){
  return(
    <header className="d-flex justify-content-between align-items-center">
      <p>Page : {props.page}</p>
      <button 
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >Page {props.page + 1}</button>
    </header>
  );
}

function CharacterList() {
  const [loading, setloading] = useState(true);
  const [characters, setcharacters] = useState([]);
  const [page,setpage] = useState(1)

  useEffect(() => {
    async function Fetchdata() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setloading(false)
      setcharacters(data.results);
    }

    Fetchdata();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setpage} />
      {loading 
      ? (<h1>Loading</h1>) : (
        <div className="row">
          {characters.map((characters) => {
            return (
              <div className="col-md-4" key={characters.id}>
                <Character character={characters} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setpage} />
    </div>
  );
}

export default CharacterList;
