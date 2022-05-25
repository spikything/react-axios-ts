import React from 'react';
import axios from 'axios';

export default class List extends React.Component {

  state = {
    people: []
  }
  
  componentDidMount() {
    axios.get(this.props.endpoint)
      .then(result => {
        const people = result.data;
        this.setState({ people });
      })
  }

  render() {
    return (
      <ul>
        <strong>Class component</strong>
        {
          this.state.people
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
  
}
