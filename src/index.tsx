import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import TodoApp from './TodoApp';
import { StoreProvider } from 'easy-peasy';
import store from './store/StoreModel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider store = {store}>
      <Router>
        <TodoApp />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
