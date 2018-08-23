import React, {Component} from "react";
import Calendar from "./calendar";
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (<div className="App">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            User`s<b>
              Calendar</b>
          </span>
        </div>
      </header>
      <main>
        <Calendar/>
      </main>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/schedules/new">
          Add a Schedule
        </Link>
      </div>
    </div>);
  }
}

export default App;
