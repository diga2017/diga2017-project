import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class regionalLevelItems extends Component {
    render () {
        const { id, name, description } = this.props;
        
        return (
            <div className = "row">
                <div className="col-md-4">{ id }</div>
                <div className="col-md-4">{ name }</div>
                <div className="col-md-4">{ description }</div>
            </div>
        )
    }
}

export default regionalLevelItems