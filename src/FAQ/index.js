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


            <h4 id="top"> Course offering questions: </h4>

            <a href="#hide" id="hide">Where can I find course offerings? </a>
            <a href="#/" id="show">Hide</a>
            <div id="a"><p>Information on course offerings can be found on the Explore Page.</p></div>
            
            <p></p>

            <a href="#hide1" id="hide1">What information can I find there? </a>
            <a href="#/1" id="show1">Hide</a>
            <div id="a1"><p>You can find details on difficulty of the course, as well as a general summary.</p></div>
            
            
            <h4> Site use questions: </h4>

            <a href="#hide2" id="hide2">What information can I find there? </a>
            <a href="#/2" id="show2">Hide</a>
            <div id="a2"><p>The #1 way to use this site is before course registration, exploring the different course offerings here at HKIS and learning about each course in detail.</p></div>

            <p></p>

            <a href="#hide3" id="hide3">How do I access this information? </a>
            <a href="#/3" id="show3">Hide</a>
            <div id="a3"><p>Clicking on the photo of the courses will create a pop up menu with detailed information on the course.</p></div>
            
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
