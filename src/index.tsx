import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import reportWebVitals from './reportWebVitals';

// Components
import App from './App';

// Styles
import './index.css';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GITHUB_BASE_URL}`,
  headers: {
    authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
  },
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
