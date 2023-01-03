import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // -> this gets ran after render()
    // -> if this changes state then render is ran again 
    componentDidMount() {

        // -> make an HTTP Request to the link to get
        // data 
        // -> save the data retrieved in state
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // -> it's good practice to use arrow functions for 
    // custom methods as react will be able to tell
    // where to grab the "this" from
    onSearchChange = (event) => {
        // -> take what gets entered inside the input box and store it
        // inside the "searchField" state var 
        this.setState({ searchField: event.target.value });
    }

    render() {
        // -> use the searchField value to filter on the robots array 
        // and take only the robots whose names include the searchField
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App;