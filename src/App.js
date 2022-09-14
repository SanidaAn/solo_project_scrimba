import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';


function App() {
  const arrayData = data.map(newArray => {
        return <Card 
                newArray = {newArray}
        />
  })

  return (
    <div className="App">
      <Navbar/>
      <div className='section'>
        {arrayData}
      </div>
    </div>
  );
}

export default App;
