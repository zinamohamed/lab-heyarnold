import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { findCharacters } from '../services/heyArnoldApi';

export default class HeyArnoldContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await findCharacters();
    this.setState({
      characters,
      loading: false,
    });
  }

  render() {
    const { loading, characters } = this.state;

    if (loading) return <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading"/>;

    return <CharacterList characters={characters} />;
  }
}