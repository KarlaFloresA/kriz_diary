import React from 'react'
import './frecordatorio.css';


function Frecordatorio() {
  return (
    <div>

<h1> Aqui estara el formulario </h1>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Titulo</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Encabezado del recordatorio" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Recordar</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        
    </div>
  )
}

export default Frecordatorio