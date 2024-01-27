// pages/_app.js
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { store , persistor} from '../app/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
