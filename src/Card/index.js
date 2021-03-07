import React from "react";
import "./index.css";
import { LinkOutline } from 'react-ionicons';
import Modal from "../components/Modal";

export default class Card extends React.Component {
    state = {
        show: true,
        visible: false
    }

    render () {
        // let image_source = this.props.course.picture ? this.props.course.picture : "/Image/sample-image.jpeg"
        return (
            <> 
                <div className="card" 
                    onClick={(event) => {
                    event.preventDefault();
                    this.setState({visible: true})
                }}>
                    <div id="graphic">
                    {/* <img src={window.location.origin + image_source} />  */}
                    {/* <img src={this.props.course.picture}/> */}
                    </div>
                    <div id="text">
                        <div id="title">
                            {this.props.course.name}
                        </div>
                        <div id="grades">
                            {this.props.course.grades}
                            <LinkOutline id="link"/> 
                        </div>
                    </div>
                </div>
                {this.state.visible ? <Modal setVisible={(visible) => {
                    document.body.style.overflow = "visible";
                    this.setState({visible})
                }} /> : <></>} 
            </>
        )
    }

}