import React, { Component } from 'react' ;
import {Link} from 'react-router-dom'


class Menu extends Component{
render(){
return(


    <div className='fondito'>

<div class="d-grid gap-2">
  <Link  className="nav-link" to='/recuerda' class="btn btn-danger">+ Recordatorio</Link>
  <Link  className="nav-link" to='/notas' class="btn btn-danger">+ Notas</Link>
  <Link className="nav-link" to='/citas' class="btn btn-danger">+ Citas</Link>
  <Link className="nav-link" to='/eventos' class="btn btn-danger">+ Eventos</Link>
</div>
</div>
 
        );
      }
}

export default Menu;