import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import localizedStrings from './LocalizedStrings'

class NavBar extends Component {
    render () {
        return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: 2 }}>
            <div className="container">
                <a className="navbar-brand text-white">diga2017</a>
                
                <div className="form-inline my-2 my-lg-0">
  
                <button className="Toggle_langage" class = "btn btn-sm btn-info" onClick = {this.toggleLanguage}>{ localizedStrings.languageOnSwitch } 

                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" width="25" height="25" alt="" />
            
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2000px-Flag_of_Finland.svg.png" width="25" height="25" alt="" />
             
                </button>

                <button className="Toggle_langage" class = "btn btn-sm btn-info" > 
                    
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lcST3H5P7M7Q_SvGC7RG4XIhOt6IwTdWPZM1AU5ro6cvDO7d2A" width="25" height="25" alt="" />
             
                </button>

                </div>
                </div>
            </nav>
        </div>
   
        
        )
    }
}

export default NavBar