import React from 'react'
import './Recordatorios.css';
import {Link} from 'react-router-dom'

const Recordatorios = () => {
  return (
       <div>
      <div class="d-grid gap-2">
      <Link  className="nav-link" to='/Frecordatorio' class="btn btn-danger">+ Recordatorio</Link>
</div>
        
        
        <body>
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Modificar</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Ponencia de sistemas</h5>
        <p class="card-text">Recuerda llevar tus cosas, lap, cañon, es importante citar al profesor xxxxx para dar un buen inicio</p>
        <a href="#" class="btn btn-primary">Modificar</a>
        <a href="#" class="btn btn-danger">Eliminar</a>
      </div>
    </div>
  </div>
</div>
        </body>
      
       </div>


  );
}


export default Recordatorios;