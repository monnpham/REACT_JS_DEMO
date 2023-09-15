import logo from './logo.svg';
import './App.css';
import FunctionComponent from './DemoComponent/FunctionComponent/FunctionComponent';
import ClassComponent from './DemoComponent/ClassComponent/ClassComponent';
import Ex_Layout from './Ex_Layout/Ex_Layout';
import DataBinding from './DataBinding/DataBinding';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoState from './DemoState/DemoState';
import Ex_Car from './Ex_Car/Ex_Car';
import DemoProps from './DemoProps/DemoProps';
import Ex_Phone from './Ex_Phone/Ex_Phone';

function App() {
  return (
    <div className="App">
      {/* <h1 className='App-logo'>Hello REACT</h1> */}
      {/* --- Day 1--- */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding></DataBinding> */}
      {/* <RenderWithMap></RenderWithMap> */}
      {/* --- Day 2--- */}
      {/* <DemoState /> */}
      {/* <Ex_Car></Ex_Car> */}
      {/* <DemoProps></DemoProps> */}
      {/* props reactjs */}
      <Ex_Phone />
    </div>

  );
}

export default App;
