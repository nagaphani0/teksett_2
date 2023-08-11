import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Industries from './components/industries';
import NavBar from './components/navBar';
import Footer from './components/footer';
import { ButtonSelecter } from './components/common';
import NewInsights from './components/newInsights';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domains" element={<Industries />} />
        <Route path="/services/:takePrams" element={<ButtonSelecter />} />
        <Route path="/domains/:takePrams" element={<ButtonSelecter />} />
        <Route path="/insights" element={<NewInsights />} />

      </Routes>
      <Footer />
    </div>

  );
}


export default App;
