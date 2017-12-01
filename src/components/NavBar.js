import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render () {
        return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: 2 }}>
                    <div className="container">
                        <a className="navbar-brand text-white" href="#" >diga2017</a>
                        
                        <div className="form-inline my-2 my-lg-0">
                        <button className="english_box" onClick = ""> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" width="30" height="30" alt="" /></button>
                        <button className="english_box" onClick = ""> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2000px-Flag_of_Finland.svg.png" width="30" height="30" alt="" /></button>
                        </div>
                        
                    </div>
                </nav>
            </div>
   
        
        )
    }
}

export default NavBar