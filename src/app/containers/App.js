import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
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
        // -> we use objects destructuring so that we do not repeat
        // this.state all the time
        const { robots, searchField } = this.state;

        // -> use the searchField value to filter on the robots array 
        // and take only the robots whose names include the searchField
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        // -> if robots.length === 0 => in js it means false and
        // we add ! before it to make it true
        return !robots.length ?
            <h1>Loading...</h1>:
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />

                    {/* Scrolling component, SearchBox will remain at 
                    the top of the page */}
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
    }
}

export default App;