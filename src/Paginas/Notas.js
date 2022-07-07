import React from 'react'
import {Link} from 'react-router-dom'

function Notas() {
  return (
    <div>



<div className='row'>
  <div className='col-4'>
  <div class="d-grid gap-2">
      <Link  className="nav-link" to='/Fnota' class="btn btn-primary btn-lg">Añadir Nota</Link>
</div>
  </div>
  <div className='col-4'>
  
  </div>
  <div className='col-4'>
  <div class="d-grid gap-2">
      <Link  className="nav-link" to='/Fnota' class="btn btn-primary btn-lg">Añadir Nota</Link>
</div>
  </div>
</div>


<div class="row p-2">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Traer el mandado</h5>
        <p class="card-text">Medio de tortilla, un kilo de frijol, patitas de puerco, un fabuloso</p>
        <a href="#" class="btn btn-primary">Modificar</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Notas