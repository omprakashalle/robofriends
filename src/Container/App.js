import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import '../Container/App.css';
import Scrollbox from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:[],
            searchField :''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => this.setState({robots:json}))
        
    }
    onTextSearchChange = (event)=>{
            this.setState({searchField:event.target.value});
    }
 render(){
    const filterRobots = this.state.robots.filter( robots =>{
        return robots.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })

    if(this.state.robots.length === 0){
        return <h1>Loading...</h1>
    }
  else{
  return(
     
        <div className="tc">
             <h1 className="f2">ROBO FRIENDS</h1>
             <SearchBox searchChange={this.onTextSearchChange}/>
             <Scrollbox>
                 <ErrorBoundary>
                   <CardList robots={filterRobots} />
                 </ErrorBoundary>
             </Scrollbox>    
        </div>
     
  );
  }
 }
}

export default App;