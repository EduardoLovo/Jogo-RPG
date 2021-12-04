import * as C from './App.styles';
import { Character } from './components/character';

 const App = () => {
  return (
    <C.Container>
      <C.Map>
        <Character/>        
      </C.Map>
    </C.Container>
  )
}

export default App;

