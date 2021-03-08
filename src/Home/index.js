import React from 'react';
import './index.css';
import leftImage from '../Asset/homepageImage.png';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-body"> 
                <div id="banner">
                    <div id="leftside-text">
                        <h3> Discover Courses </h3>
                        <p> Find Student Testimonies, Student Advice, and More  </p>
                    </div>
                    <div id="rightside-icons">
                        <img id="left-image" src={leftImage} />
                    </div>
                </div>
            </div>
        )
    }
}