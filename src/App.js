import React, {Component} from 'react';
import Menu from './Paginas/Menu';
import Header from './Componentes/Inicio/Header';
import Recordar from './Paginas/Recordatorios';
import Notas from './Paginas/Notas';
import Citas from './Paginas/Citas';
import Eventos from './Paginas/Eventos'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Frecordatorio from './Formulario/Frecordatorio';
import Fnota from './Formulario/Fnota';


function App() {
  return (
    <div className="App">
       <Router>
       <Header />
      <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/recordatorio' element={<Recordar/>}/>
      <Route path='/notas' element={<Notas/>}/>
      <Route path='/citas' element={<Citas/>}/>
      <Route path='/eventos' element={<Eventos/>}/>
      <Route path='/frecordatorio' element={<Frecordatorio/>}/>
      <Route path='/fnota' element={<Fnota/>}/>
      </Routes>
      </Router>
</div>
);
}


export default App;