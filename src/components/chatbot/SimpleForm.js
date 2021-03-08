import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#296d98',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#59788E',
    botFontColor: '#fff',
    userBubbleColor: '#45b6fe',
    userFontColor: '#f5f8fb',
  };

const config ={
    floating: true,
};

class SimpleForm extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <ChatBot 
       steps={[
        {
          id:'q-firstname', 
          message:'What is your first name?', 
          trigger:'firstname',
        },
        {
          id:'firstname', 
          user:true,
          trigger:'q-lastname'
        },
        {
          id:'q-lastname', 
          message:'What is your last name?', 
          trigger:'lastname',
        },
        {
          id:'lastname', 
          user:true,
          trigger:'q-email'
        },
        {
          id:'q-email', 
          message:'What is you email?', 
          trigger:'email',
        },
        {
          id:'email', 
          user:true,
          validator: (value) => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) //api:https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot
              {
                return true;
              }
            else
              {
                return'Please enter a valid email.';
              }
         },
        trigger:'course-question'
        },
        {
          id:'course-question',
          message:'What question do you have regarding courses?',
          trigger:'answer'
        },
        {
          id:'answer', 
          user:true,
          trigger:'q-submit'
        },
        {
          id:'q-submit', 
          message:'Do you wish to submit?', 
          trigger:'submit'
        },
        {
          id:'submit', 
          options:[
          {value:'y', label:'Yes', trigger:'end-message'},
          {value:'n', label:'No', trigger:'no-submit'},
          ] 
        },
        {
          id: 'no-submit',
          message:'Your information was not submitted.', 
          end: true,
        },
        {
          id: 'end-message',
          component: <Post/>,
          asMessage: true,
          end: true,
        },
        ]}
        {...config}
      />
      </ThemeProvider>
    );
  }
       
}

export default SimpleForm;

/* 
Common Text Step Attributes: steps that the Chatbot states to the user.

id (string or number) - required for any step
message (string or function) - a message to the user
trigger (string, number, or function) - the id of the next step triggered
delay (number) - the delay time before the message appears
end (boolean) - if true, this step is the end of the conversation



Common User Step Attributes: User steps are steps that require a typed user response.

id (string or number) - required for any step
user (boolean) - if true, this step waits for a user type action
validator (function) - a function used to validate the typed user text
trigger (string, number, or function) - the id of the next step triggered
end (boolean) - if true, this step is the end of the conversation

Common Option Step Attributes: provide the user with a list of options rather than requesting an input

id (string or number) - required for any step
options (array) - options with {value, label, trigger} properties
end (boolean) - if true, this step is the end of the conversation



*/

