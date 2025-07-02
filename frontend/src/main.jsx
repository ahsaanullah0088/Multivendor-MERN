import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // ✅ new import
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import Store from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // ✅ createRoot instead of render

root.render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
