import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-5xl font-bold mt-5 text-green-600">
        Welcome to the Tailwind Pricing Club
      </h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
