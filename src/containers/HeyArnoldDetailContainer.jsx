import React, { Component } from 'react';
import CharacterDetail from '../components/characters/CharacterDetail';
import { findCharacterById } from '../services/heyArnoldApi';

export default class HeyArnoldDetailContainer extends Component {
  state = {
    character: {},
    loading: true,
  };

  async componentDidMount() {
    const character = await findCharacterById(this.props.match.params._id);
    this.setState({
      character,
      loading: false,
    });
  }

  render() {
    const { loading, character } = this.state;

    if (loading) return <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading"/>;

    return <CharacterDetail character={character} />;
  }
}