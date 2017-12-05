import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../data/Data";
import React, { PropTypes } from "react";
//import SelectItem from "react-select-item";
//import { element } from "./C:/Users/Omistaja/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/prop-types";

class RegionLvlBtn extends React.Component {
  constructor(props){
    super(props);        
    this.selectHandler = this.selectHandler.bind(this);      
}

selectHandler(event){     
    this.Data.getRegionLevels()(event.target.value); 
}
  
render () {  
    const {regionLevels} =  this.props;      
    return (
        <div className="RegionLevel">  
            <h2 className="headIndicator">Aluetaso:</h2> 
            <label className="textfont">Aluetaso: </label>            
           <div className="form-group">                    
                <select className="form-control"   onChange={this.selectHandler} >
                    {
                        regionLevels.map(element=>
                        <option value={element.id} key={element.id} >{element.name}</option>) 
                    }                       
                </select>
            </div>
        </div>
    )
}
}

export default RegionLvlBtn;
