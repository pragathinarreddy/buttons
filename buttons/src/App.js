import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { buttonSizes,buttonTypes } from './buttoninfo';

function App() {
  return (
   <>
   <Button label = "Click Me!"/>
   <Button label = "Click Me!" size={buttonSizes.SMALL} type={buttonTypes.SECONDARY}/>
   <Button label = "Click Me!" size={buttonSizes.LARGE} type = {buttonTypes.TERITIARY}/>
   <Button onClickHandler = {() => alert("You clicked me")}/>
   <Button disabled/>
   </>
  );
}

export default App;
