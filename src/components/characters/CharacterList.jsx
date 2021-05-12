import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
  <div>
  <ul aria-label="characters">
    {characters.map((character) => (
      <li className="content" key={character.id}>
        <Character
          name={character.name}
          image={character.image}
        />
      </li>
    ))}
  </ul>
  </div>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;