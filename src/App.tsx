import React from 'react';
import RacersList from 'pages/RacersList';
import { Provider } from 'react-redux';
import { store } from 'store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RacersList />
      </div>
    </Provider>
  );
}

export default App;
