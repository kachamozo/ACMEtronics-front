import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';



function App() {
  return (
	<BrowserRouter>
	  <Navbar />
	  <Carousel/>
	 
	</BrowserRouter>
  );
}



export default App;
