import React from 'react'
import {Link} from 'react-router-dom'

import './header.css';



const Header = () => {

        return (
          <body>

<div class="pos-f-t">
          <div >
            <div class="bg-dark">
            </div>
          </div>
          <nav class="navbar navbar-black bg-black">
          <Link to='/'>Kriz Dairy</Link>
          </nav>

</div>

 </body>
        
      
  );
  }

export default Header;