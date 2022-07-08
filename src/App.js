import React, {Component} from 'react';
import Menu from './Paginas/Menu';
import Header from './Componentes/Inicio/Header';
import Recuerda from './Paginas/Registrar';
import Notas from './Paginas/Notas';
import Citas from './Paginas/Citas';
import Eventos from './Paginas/Eventos'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <Router>
       <Header />
      <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/recuerda' element={<Recuerda/>}/>
      <Route path='/notas' element={<Notas/>}/>
      <Route path='/citas' element={<Citas/>}/>
      <Route path='/eventos' element={<Eventos/>}/>
      </Routes>
      </Router>
</div>
);
}


export default App;