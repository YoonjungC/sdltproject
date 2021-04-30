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
            <a href="#/" id="show"> (Show/hide)</a>
            <div id="a"><p>Information on course offerings can be found on the Explore Page.</p></div>
            
            <p></p>

            <a href="#hide1" id="hide1">What information can I find there? </a>
            <a href="#/1" id="show1"> (Show/hide)</a>
            <div id="a1"><p>You can find details on difficulty of the course, as well as a general summary.</p></div>
            
            
            <h4> Site use questions: </h4>

            <a href="#hide2" id="hide2">What is the most effective way to use this site? </a>
            <a href="#/2" id="show2"> (Show/hide)</a>
            <div id="a2"><p>The #1 way to use this site is before course registration, exploring the different course offerings here at HKIS and learning about each course in detail.</p></div>

            <p></p>

            <a href="#hide3" id="hide3">How do I access this information? </a>
            <a href="#/3" id="show3"> (Show/hide)</a>
            <div id="a3"><p>Clicking on the photo of the courses will create a pop up menu with detailed information on the course.</p></div>
            

            <p></p>

            <h4> Extra info: </h4>

            <a href="#hide4" id="hide4"> Is there any further info provided by the school? </a>
            <a href="#/4" id="show4"> (Show/hide)</a>
            <div id="a4"><p>You can check out the resources on DragonNet for further information directly from HKIS.</p></div>

            <p></p>

            <a href="#hide5" id="hide5"> What exactly is the point of this site? </a>
            <a href="#/5" id="show5"> (Show/hide)</a>
            <div id="a5"><p>This site was made to provide users with easy and acceisble information provided with student input to ensure satisfaction after course regristration. </p></div>

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
