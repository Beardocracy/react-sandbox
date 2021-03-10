import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // Javascript special function. Always called first when creating an instance of the object.
    // We're calling it here because we want to initialize state. It's not required to use a constructor, but it is for initializing state.
    // Super overrides the parent class's method
    // Good place to do one-time setup.
    /*
    constructor(props) {
        // Required if we're using the constructor.
        super(props);

        // This is the only time we do direct assignment. This is initialization. For manipulation, use setState()
        //Alternate syntax to putting it outside constructor, like below. No need for constructor if you put it outside.
        this.state = { lat: null, errorMessage: '' };
        
    }
    */
    // Automatically invokes the constructor like it is above.
    state = { lat: null, errorMessage: '' };

    // Automatically called when component is first rendered to screen. Only called one time.
    componentDidMount() {
        console.log('Component was rendered to the screen.');
        // The first thing is the callback function. Second is what to do if it fails.
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Always use setState. Never use this.state except for initializing.
                // React will call render when setState is invoked.
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
            
            /* Alternate syntax
            
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
            
            */
        );
    }

    // Automatically called when component updates itself (setState is used).
    // Good place to do more data-loading when state/props change.
    componentDidUpdate() {
        console.log('Component was just updated - it re-rendered.')
    }

    // Called when component is no longer shown.
    // Good place to do cleanup (especially for non-React stuff)
    componentWillUnmount() {

    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message='Please accept location request'/>;
    }

    // React says we must define render() for classes
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));