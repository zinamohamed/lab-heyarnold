export const findCharacters = async () => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters`);
  const  results  = await res.json();

  return results.map((character) => ({
    _id: character._id,
    name: character.name,
    image: character.image,
  }));
};

export const findCharacterById = async (_id) => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${_id}`)
  const results = await res.json();

  return results.map((character) => ({
    _id: character._id,
    name: character.name,
    image: character.image,
  }));
}