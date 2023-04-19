import logo from './logo.svg';
import './App.css';
import { ReactLogo } from './Component/Logo';
import { ReactBenifits } from './Component/Benefits';
import { Button } from './Component/Button';


function App() {
  return (
    <div className="App">
       <ReactLogo/>
       <ReactBenifits/>
       <Button/>
       
    </div>
  );
}
export default App;