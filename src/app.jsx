import React, { Component } from 'react';
const axios = require("axios");
import TopSpot from "./topspot";

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    axios.get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }
  handelMouseOver(e){
    let ls = e.target.id;
    this.setState({
      [ls]:"block"
    })
  }

  render() {
    return (
      <div className='App container'>
        <div className="row">
          <div className="jumbotron">
            <h1 className="display-3">San Diego Top Spots</h1>
            <h4 className=" ">A list of the to 30 spots to see in San Diego California</h4>
          </div>
        </div>
            {
              this.state.topspots.map(topspot => (
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location} />
              ))
            }
          </div>

    );
  }
}

export default App;
