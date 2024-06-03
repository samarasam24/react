import { Provider } from 'react-redux';
import './App.css';  
import { store } from './store/Store';
import { CrudForm } from './components/CrudForm';

function App() {
  return (
   <Provider store={store}>
     <CrudForm/>
   </Provider>     
  );
};

export default App;
