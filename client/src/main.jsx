import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from './components/slice/Store'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)
