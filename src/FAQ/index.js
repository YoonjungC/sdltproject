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
          <border>
            <h4 id="top"> Where can I find Course Offerings? </h4>
            <p> 
              Information on course offerings can be found on the Explore Page.
            </p>
            <h4> How do I use this site? </h4>
            <p>
              The #1 way to use this site is before course registration, exploring the different course offerings here at HKIS and learning about each course in detail. 
            </p>
            <h4> What are some resources I can look at to find more information about course credits? </h4>
            <p>
              You can check out the resources on DragonNet for further information provided by the school.
            </p>
            <p id="line"> </p>
            <h4> If I have more questions, where can I ask it? </h4>
            <p> Please use our chatbox located on the bottom right of the website. </p>
            </border>
          </div>
          <SimpleForm />
        </div>
        )
    }
}
