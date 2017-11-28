import React, { Component } from 'react';
import regionalLevelItems from './components/regionalLevelItems';
import displayRegionalLevel from './components/displayRegionalLevel';


class App extends Component {
  render() {
    
    const data = [
      {
        id: 1,
        name: "Scotland",
        description: "Trainspoting"
        
      },
      {
        id: 2,
        name: "Dublin",
        description: "Ireland"
      },
      {
         id: 3,
         name: "Oulu",
         description: "North finland"
       }
    ];

    return (
      <div className="container">
        
        <displayRegionalLevel />
        {
          data.map(element => <regionalLevelItems id ={element.id}
                                                  name = {element.name} 
                                                  description = {element.description} />)
        }
      </div>
    );
  }
}

export default App;
