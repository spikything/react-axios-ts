import './App.css';
import { ReactElement } from 'react';
import ListClass from './components/class/List'; // Class-based (legacy) component
import ListFunctional from './components/hooks/List'; // Function (hooks) component
import ListFunctionalTS from './components/ts/List'; // Function component in TypeScript

function App():ReactElement {

  const endpoint = 'https://jsonplaceholder.typicode.com/users';

  return (
    <>
      <ListClass endpoint={endpoint} />
      <ListFunctional endpoint={endpoint} />
      <ListFunctionalTS endpoint={endpoint} />
    </>
  );

}

export default App;
