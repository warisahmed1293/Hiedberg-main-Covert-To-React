import './App.css';
import Navbar from './component/Navbar';
import ellispe from './assets/images/image_ellipse.svg'

function App() {
  return (
    <div className="App">
      <Navbar headerId="home-header" ImageEllispe={ellispe} Heading="Innovative ideas deserve a chance to reach their potential" />
    </div>
  );
}

export default App;
