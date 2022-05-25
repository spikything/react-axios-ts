import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function List ({endpoint}, ...props) {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get(endpoint)
        .then(result => {
          setPeople(result.data)
        })
    }, []);

    return (
        <ul>
          <strong>Function component</strong>
          {
            people
              .map(person =>
                <li key={person.id}>{person.name}</li>
              )
          }
        </ul>
      );
}
