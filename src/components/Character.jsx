function Character({character}) {
  return (
    <div className="text-center p-5">
      <div key={character.id}>
        <h3>{character.name}</h3>
        <img className="img-fliud rounded-pill" src={character.image} alt={character.name} />
        <p>{character.origin.name}</p>
      </div>
    </div>
  );
}

export default Character;
