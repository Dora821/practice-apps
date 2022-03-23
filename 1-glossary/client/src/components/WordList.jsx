import React from 'react';
import Word from './Word.jsx';

class WordList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('items to render', this.props.render);
    return (
      <div>
        {this.props.render.map(word=> <Word word={word}/>)}
      </div>
    )
  }
}

export default WordList;