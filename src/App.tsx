import React from 'react';

import Users from './pages/Users';

import { Provider } from './context/user';

const App = () => {
  return (
    <Provider>
      <Users />;
    </Provider>
  );
};

export default App;
