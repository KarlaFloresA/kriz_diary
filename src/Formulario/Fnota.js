import React from 'react'
import './fnota.css';


function Fnota() {
  return (
    <div>

<h1> Registro de nota </h1>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Titulo</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Encabezado del recordatorio" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Contenido de texto</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-primary">Guardar</button>
    </div>
  )
}

export default Fnota