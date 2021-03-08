import React from 'react';
import './index.css';
import SimpleForm from "../components/chatbot/SimpleForm";

export default class FAQ extends React.Component {
    render() {
        return (
        <div className="faq-body"> 
            <div id="title">
        <h1> Frequently Asked Questions </h1>
        </div>
        <div id="faqContent">
          <h4 id="top"> Where can I find Course Offerings? </h4>
          <p>
            Please check the Explore Page
          </p>
          <h4> How do I use this site? </h4>
          <p>
            The #1 way to use this site is before course registration, exploring the different course offerings here at HKIS and learning about each course in detail. 
          </p>
          <h4> What are some resources I can look at to find more information about course credits? </h4>
          <p>
            You can check out the resources on DragonNet
          </p>
          <p id="line"> </p>
          <h4> I have another question! </h4>
          <p> Please use our chatbox which you can find on the right side of your screen </p>
        </div>
        <SimpleForm />
        </div>
        )
    }
}