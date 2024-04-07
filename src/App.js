import './App.css';

import {useState, useEffect} from 'react';

const App = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    // 👇️ set isMounted to true
    let isMounted = true;

    async function fetchData() {
      const result = await Promise.resolve(['hello', 'world']);

      // 👇️ only update state if the component is mounted
      if (isMounted) {
        setState(result);
      }
    }

    fetchData();

    return () => {
      // 👇️ when the component unmounts, set isMounted to false
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h2>State: {JSON.stringify(state)}</h2>
    </div>
  );
};

export default App;
