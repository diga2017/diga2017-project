import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class BackGround extends Component {
    render () {
        return (

            <div>
                <div class="row">

                    <div class="col bg-dark text-white ">
                    1 of 3
                    </div>
                    <div class="col bg-primary text-white">
                    2 of 3
                    </div>
                    <div class="col bg-dark text-white">
                    3 of 3
                    </div>
                </div>

                 
            </div>
        )
    }
}

export default BackGround