import './App.css';
import { ReactElement } from 'react';
// @ts-ignore
import ListClass from './components/class/List'; // Class-based (legacy) component
// @ts-ignore
import ListFunctional from './components/hooks/List'; // Function (hooks) component
import ListFunctionalTS from './components/ts/List'; // Function component in TypeScript

function App():ReactElement {

  const endpoint = 'https://jsonplaceholder.typicode.com/users';

  return (
    <>
    <h2>A demo of Axios in 3 flavours of React component: Class, Hooks, TS <a href='https://github.com/spikything/react-axios-ts' target='_blank'>[src]</a></h2>
      <ListClass endpoint={endpoint} />
      <ListFunctional endpoint={endpoint} />
      <ListFunctionalTS endpoint={endpoint} />
    </>
  );

}

export default App;
