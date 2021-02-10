import React from 'react';
import './index.css';

export default class Events extends React.Component {

    state = {
        search: "",
        events: []
    }

    onInputChange=async(evt)=>{
        await this.setState({search: evt.target.value})
    }
    
    render() {
        return (
            <div className="courses-body"> 
                <h1> Explore Events </h1>
                <div className="search-container">
                    <input type="text" value={this.state.search} onChange={this.onInputChange} placeholder="Search for Events..." id="search-field"/> 
                    <button onClick> </button> 
                    {/* write onclick func to change event state from the original */}
                </div>
                <div className="filter-container"> 
                    <button> Games </button>
                    <button> Study </button>
                    <button> Reading </button>
                    <button> Movie </button>
                    <button> Art </button>
                    <button> Music </button>
                </div>
                <div className="eventcards-container"> 
                    
                </div>
            </div>
        )
    }
}