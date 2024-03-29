import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const App = () => {
    // -> array destructuring
    // equivalent to: var robots = robotsVar[0];
    // and            var setRobots = robotsVar[1]
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')
    const [count, setCount] = useState(0);

    // -> this gets run every time the App component renders
    // -> the "[]" parameter tells React to only run useEffect
    // if one of the elements inside [] has changed
    //  - if [] is empty it means we only want to run it once
    //  when the component is rendered
    // eg: run once when the component renders and when 
    // count changes
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users));

        console.log(count)
    }, [count])

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name
            .toLowerCase()
            .includes(searchField.toLowerCase());
    });

    return !robots.length ?
        <h1>Loading...</h1>:
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />

                <button onClick={() => setCount(count+1)}>
                    Click Me!
                </button>
                
                {/* Scrolling component, SearchBox will remain at 
                the top of the page */}
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    // -> class counterpart
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }

    // -> this gets ran after render()
    // -> if this changes state then render is ran again 
    // componentDidMount() {

    //     // -> make an HTTP Request to the link to get
    //     // data 
    //     // -> save the data retrieved in state
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }));
    // }

    // -> it's good practice to use arrow functions for 
    // custom methods as react will be able to tell
    // where to grab the "this" from
    // onSearchChange = (event) => {
    //     // -> take what gets entered inside the input box and store it
    //     // inside the "searchField" state var 
    //     this.setState({ searchField: event.target.value });
    // }

    // render() {
    //     // -> we use objects destructuring so that we do not repeat
    //     // this.state all the time
    //     const { robots, searchField } = this.state;

    //     // -> use the searchField value to filter on the robots array 
    //     // and take only the robots whose names include the searchField
    //     const filteredRobots = robots.filter(robot => {
    //         return robot.name.toLowerCase().includes(searchField.toLowerCase());
    //     });

    //     // -> if robots.length === 0 => in js it means false and
    //     // we add ! before it to make it true
    //     return !robots.length ?
    //         <h1>Loading...</h1>:
    //         (
    //             <div className="tc">
    //                 <h1 className="f1">RoboFriends</h1>
    //                 <SearchBox searchChange={this.onSearchChange} />

    //                 {/* Scrolling component, SearchBox will remain at 
    //                 the top of the page */}
    //                 <Scroll>
    //                     <ErrorBoundary>
    //                         <CardList robots={filteredRobots} />
    //                     </ErrorBoundary>
    //                 </Scroll>
    //             </div>
    //         )
    // }
}

export default App;