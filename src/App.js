import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Card from './components/Cards'
import Ease from './components/Ease'
import Advertise from './components/Advertise'
import CallToAction from './components/CallToAction'
import Services from './components/sevices'
import MenuBar from './components/MenuBar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <MenuBar/>
      <Introduction/>
      <Card/>
      <Ease/>
      <Services/>
      <Advertise/>
      <CallToAction/>
    </div>
  );
}

export default App;
