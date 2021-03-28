import './App.css';
import PokedexContainer from './components/PokedexContainer';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
          <Provider store={store}>
    <div className="App">
      <PokedexContainer />
    </div>
     </Provider>
  );
}

export default App;
