export const findCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const  results  = await res.json();

  return results.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};