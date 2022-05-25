import { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
    endpoint :string;
}

interface Person {
    id :string;
    name: string;
}

export default function List ({endpoint, ...props} : Props):ReactElement {

    const [people, setPeople] : [Person[], Function] = useState([]);

    useEffect(() => {
        axios.get(endpoint)
        .then(result => {
          setPeople(result.data)
        })
    }, []);

    return (
        <ul>
          <strong>Function component (TypeScript)</strong>
          {
            people
              .map(person =>
                <li key={person.id}>{person.name}</li>
              )
          }
        </ul>
      );
}
