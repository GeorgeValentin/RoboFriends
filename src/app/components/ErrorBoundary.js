import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    // -> this lifecycle hook will be ran
    // if there is any error
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <h1>Oops! That is not good!</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;