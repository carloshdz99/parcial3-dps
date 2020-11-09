import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//importando navbar
import Navbar from './components/navbar';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './fb.config';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<p>cargando datos</p>}>
      <Navbar />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

