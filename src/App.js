import { Provider } from 'react-redux';
import './App.css';
import { CrudForm } from './components/CrudForm';
import { store, } from './store/Store'; 
// import { mySaga } from './sagas/Sagas.js';

// sagaMiddleware.run(mySaga);

function App() {
 
  return (
   <Provider store={store}>
     <CrudForm/>
   </Provider>       
  );
}

export default App;
