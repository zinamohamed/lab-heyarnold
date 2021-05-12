import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = ({
  character: { image, name },
}) => {
  return (
    <ul>
      <li><img src={image} alt={name} /></li>
      <li><p>{name}</p></li>
      <li><Link to="/">Back to the list</Link></li>
    </ul>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default CharacterDetail;