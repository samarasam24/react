import { Provider } from 'react-redux';
import './App.css';
import { CrudForm } from './components/CrudForm';
import { store } from './store/Store';



function App() {
  return (
   <Provider store={store}>
     <CrudForm/>
   </Provider>       
  );
}

export default App;
