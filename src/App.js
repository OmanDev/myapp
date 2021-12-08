 import './App.css';
import FunctionalComp from './Component/FunctionalComp';
import {ClassComp,ClassComp1} from './Component/ClassComp';
import Click from './Component/Click';
import Counter from './Component/Counter';
import ParentComp from './Component/ParentComp';
import ClassProps from './ClassProps';
function App() {
  return (
    <div>
      
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp /> 
      
      <ClassProps name={"Learner1"} />
      <ClassProps name={"Learner2"} />
    </div>
    
  );
}


export default App;
