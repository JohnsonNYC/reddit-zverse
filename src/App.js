import {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';


// Components
import Home from './Components/Home'
import Profile from './Components/Profile'

// JSON Link
let redditData = "https://www.reddit.com/r/3Dprinting/.json"

class App extends Component {
  state = {
    data: []
  }
  // Initial Fetch
  componentDidMount(){
    this.fetchData()
  }

  // Sort Reddit on Click
  onSort = (event) => {
    const sortKey = event.target.innerText.toLowerCase();
    const sortedDataURL = "https://www.reddit.com/r/3Dprinting/"+sortKey+"/.json"
    this.fetchData(sortedDataURL)
  }

  // Helper Fetch Function
  fetchData = (url = redditData) => {
    fetch(url)
      .then(resp => resp.json())
        .then(data => this.setState({ data: data.data.children }))
  }

  render(){
    return (
      <div className='App'>
        <Switch>
          <Route path="/:id" render={(routerProps)=> <Profile {...routerProps} data={this.state.data}/>} />
          <Route path="/" render={(routerProps) => <Home {...routerProps} data={this.state.data} onSort={this.onSort}/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
