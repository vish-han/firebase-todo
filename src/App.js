
import './App.css';
import Footer from './Components/Footer';
import Title from './Components/Title';
import TODO from './Components/TODO';

function App() {
  return (
    <div className="App">
   <div>
    <Title/>
   </div>
   <div>
<TODO/>
   </div>
   <Footer/>
    </div>
  );
}

export default App;
