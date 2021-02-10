import React from "react";
import "./index.css";


export default class Card extends React.Component {
    state = {
        show: true
    }

    render () {
        return (
            <div className="card">
                <div id="graphic">

                </div>
                <div id="text">
                    <div id="title">
                        
                    </div>
                    <div id="grades">
                        
                    </div>
                </div>
            </div>
        )
    }

}