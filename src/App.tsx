import { ReactElement } from 'react';
import List from './components/class/List'; // Class-based (legacy) component

function App():ReactElement {

  return (
    <>
      <List endpoint='https://jsonplaceholder.typicode.com/users' />
    </>
  );

}

export default App;
